import React from 'react';
import { Text, View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Pagination from './Pagination';
//import Pokemon from './Pokemon';
//import Loading from './Loading';


const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading } = props;

    const prevPage = () => {
        const prevPage = Math.max(page - 1, 0);
        setPage(prevPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }

    return (
        <View>
            <View style={styles.header}>
                <Text>Pokedex</Text>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={prevPage}
                    onRightClick={nextPage}
                />
            </View>
            {loading ?
                // <Loading />
                <View></View>
                :
                <SafeAreaView style={styles.containerPokedex}>
                    <FlatList
                        data={pokemons}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                        keyExtractor={item => item.name}
                    />
                </SafeAreaView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    containerPokedex: {

    },
    pokedexItem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

export default Pokedex;