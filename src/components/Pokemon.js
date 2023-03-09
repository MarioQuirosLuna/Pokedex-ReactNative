import React, { useContext, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { percentageWidth as pw, percentageHeight as ph } from 'react-native-responsive-dimension';
import FavoriteContext from '../context/favoriteContext';
import ModalPokemon from './ModalPokemon';
import GlobalStyles from '../style/globalStyles';


const Pokemon = (props) => {
    const { pokemon } = props;
    const [show, setShow] = useState(false);

    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (evt) => {
        evt.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }

    const showDetails = () => {
        if (!show) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    return (
        <View style={[styles.pokemonCard, { backgroundColor: GlobalStyles(pokemon.types[0].type.name) }]} >
            <View style={styles.pokemonImgContainer}>
                <TouchableOpacity onPress={showDetails}>
                    <Image
                        style={styles.pokemonImg}
                        source={{ uri: pokemon.sprites.front_default }}
                    />
                </TouchableOpacity>
            </View>
            {show ?
                <ModalPokemon pokemon={pokemon} />
                :
                <View style={styles.cardBody}>
                    <View>
                        <Text style={styles.text}>{pokemon.name} #{pokemon.id}</Text>
                    </View>
                    <View style={styles.cardBody}>
                        <FlatList
                            data={pokemon.types}
                            renderItem={({ item }) => (
                                <Text style={[{ backgroundColor: GlobalStyles(item.type.name) }, styles.pokemonTypeText]}>
                                    {item.type.name}
                                </Text>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                        />
                        <View style={styles.pokemonHeartBtn}>
                            <Button
                                onPress={clickHeart}
                                title={heart}
                            />
                        </View>
                    </View>
                </View>
            }
        </View >
    );
}

const styles = StyleSheet.create({
    pokemonCard: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    pokemonImgContainer: {
        padding: 10,
    },
    pokemonImg: {
        width: pw(40),
        height: ph(30),
        resizeMode: 'contain',
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
    },
    cardBody: {
        width: pw(45),
        paddingHorizontal: 0,
        paddingVertical: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        textTransform: 'capitalize',
        fontSize: pw(5),
    },
    pokemonContainer: {
    },
    pokemonTypeText: {
        padding: 10,
        textTransform: 'capitalize',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#555',
        overflow: 'hidden',
        margin: pw(1),
    },
    pokemonHeartBtn: {
        width: pw(10),
        height: ph(5),
        backgroundColor: '#2196F3',
        borderRadius: 5,
        overflow: 'hidden',
        margin: pw(1),
    },

});

export default Pokemon;
