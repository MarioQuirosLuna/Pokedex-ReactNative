import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { searchPokemon, getPokemons, getPokemonData } from '../data/api';
import { FavoriteProvider } from '../context/favoriteContext';

import Navbar from './Navbar';
import Searchbar from './Searchbar';

const localStorageKey = 'favorite_pokemon';

const AppMain = () => {

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] = useState(false);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(25, 25 * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotal(Math.ceil(data.count / 25));
            setNotFound(false);
        } catch (err) { }
    };

    const loadFavoritePokemons = async () => {
        try {
            const pokemons = JSON.parse(await AsyncStorage.getItem(localStorageKey)) || [];
            setFavorites(pokemons);
        } catch (error) { }
    };

    useEffect(() => {
        loadFavoritePokemons();
    }, []);

    useEffect(() => {
        if (!searching) {
            fetchPokemons();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const updateFavoritePokemon = async (name) => {
        try {
            const update = [...favorites];
            const isFavorite = favorites.indexOf(name);
            if (isFavorite >= 0) {
                update.splice(isFavorite, 1);
            } else {
                update.push(name);
            }
            setFavorites(update);
            storeData();
            await AsyncStorage.setItem(localStorageKey, JSON.stringify(favorites));
        } catch (error) { }
    };

    const onSearch = async (pokemon) => {
        if (!pokemon) {
            return fetchPokemons();
        }
        setLoading(true);
        setNotFound(false);
        setSearching(true);
        const result = await searchPokemon(pokemon);
        if (!result) {
            setNotFound(true);
            setLoading(false);
            setSearching(false);
            return;
        } else {
            setPokemons([result]);
            setPage(0);
            setTotal(1);
        }
        setLoading(false);
        setSearching(false);
    };

    return (
        <View style={styles.container}>
            <FavoriteProvider value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemon }}>
                <Navbar />
                <View>
                    <Searchbar onSearch={onSearch} />

                </View>
            </FavoriteProvider>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: '#dfdfdf',
    },
});

export default AppMain;