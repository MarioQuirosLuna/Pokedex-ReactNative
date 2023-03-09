import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { percentageWidth as pw, percentageHeight as ph } from 'react-native-responsive-dimension';
import FavoriteContext from '../context/favoriteContext';

const Navbar = () => {

    const { favoritePokemons } = useContext(FavoriteContext);

    let logoURL = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    return (
        <View style={styles.nav}>
            <View>
                <Image source={{ uri: logoURL }} style={styles.navbarImage} />
            </View>
            <Text style={styles.navbarHeartImg}>❤️ {favoritePokemons.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        height: ph(20),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#263238',
    },
    navbarImage: {
        width: 257,
        height: 103,
        margin: 20,
    },
    navbarHeartImg: {
        textAlign: 'center',
        color: '#fff',
    },
});

export default Navbar;