import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { percentageWidth as pw, percentageHeight as ph } from 'react-native-responsive-dimension';

const NotFoundPage = () => {

    return (
        <View style={styles.container}>
            <View style={styles.notFoundText}>
                <Text style={styles.text}>¡Ooops!</Text>
                <Text style={styles.text}>Pokemon not found</Text>
            </View>
            <Image
                style={styles.pikachu404}
                source={{ uri: 'https://raw.githubusercontent.com/MarioQuirosLuna/Pokedex-ReactNative/master/src/img/pikachuSad.png' }}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: pw(5),
    },
    notFoundText: {
        padding: pw(3),
    },
    text: {
        fontSize: pw(4),
        fontWeight: 'bold',
    },
    pikachu404: {
        width: pw(40),
        height: ph(40),
        resizeMode: 'contain',
    },
});

export default NotFoundPage;