import React from 'react';
import { Text, View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { percentageWidth as pw, percentageHeight as ph } from 'react-native-responsive-dimension';
import Pagination from './Pagination';
import Pokemon from './Pokemon';
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
                <Text style={styles.text}>Pokedex</Text>
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
                        renderItem={({ item }) => <Pokemon pokemon={item} key={item.name} />}
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
        marginHorizontal: pw(5),
    },
    text: {
        fontSize: pw(5),
        fontWeight: 'bold',
    },
    containerPokedex: {
        justifyContent: 'center',
        marginHorizontal: pw(5),
    },
});

export default Pokedex;