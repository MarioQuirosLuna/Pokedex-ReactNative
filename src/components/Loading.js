import React, { useEffect, useRef } from 'react';
import { Animated, View, Easing, StyleSheet } from 'react-native';
import { percentageWidth as pw, percentageHeight as ph } from 'react-native-responsive-dimension';

const Loading = () => {
    let rotateImageValue = useRef(new Animated.Value(0)).current;

    const rotateData = rotateImageValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const rotation = () => {
        rotateImageValue.setValue(0);
        Animated.timing(rotateImageValue, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false,
            easing: Easing.linear,
        }).start(({ finished }) => {
            if (finished) {
                rotation()
            }
        });
    };

    useEffect(() => {
        rotation();
    }, []);

    return (
        <View style={styles.containerLoading}>
            <Animated.Image
                style={[
                    styles.LoadingLogo,
                    { transform: [{ rotate: rotateData }] }
                ]}
                source={{ uri: 'https://raw.githubusercontent.com/MarioQuirosLuna/Pokedex-ReactNative/master/src/img/starmie.png' }}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    containerLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        //transform animate rotate 360deg 
        transform: [{ rotate: '360deg' },
        { perspective: 1000 },],

    },
    LoadingLogo: {
        width: pw(40),
        height: ph(40),
        resizeMode: 'contain',
    },
});

export default Loading;