import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { percentageWidth as pw, percentageHeight as ph } from 'react-native-responsive-dimension';

const ModalPokemon = (props) => {
    const { pokemon } = props;

    return (
        <View style={styles.cardDetails}>
            <View style={styles.cardInfo}>
                <Text style={styles.text}>Height:</Text>
                <Text>{pokemon.height}</Text>
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.text}>Weight:</Text>
                <Text>{pokemon.weight}</Text>
            </View>
            <View styles={styles.cardInfo}>
                <Text style={[styles.text, { paddingLeft: 10 }]}>Abilities:</Text>
                <FlatList style={styles.cardInfoAbilities}
                    data={pokemon.abilities}
                    renderItem={({ item }) => (
                        <Text style={styles.cardInfoAbility}>{item.ability.name}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardDetails: {
        padding: 10,
        width: pw(45),
    },
    cardInfo: {
        padding: 10,
    },
    cardInfoAbilities: {
        textTransform: 'capitalize',
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 20,
        paddingVertical: 5,
    },
    cardInfoAbility: {
        padding: 2,
        textTransform: 'capitalize',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#555',
        overflow: 'hidden',
    },
});

export default ModalPokemon;