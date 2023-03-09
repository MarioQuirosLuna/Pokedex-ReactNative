import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const Searchbar = (props) => {
    const { onSearch } = props;
    const [search, setSearch] = useState("");


    const onChange = (evt) => {
        setSearch(evt.target.value.toLowerCase());
        if (evt.target.value.length === 0) {
            onSearch(null);
        }
    };

    const onClick = async (evt) => {
        onSearch(search);
    };

    return (
        <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Search"
                    onChangeText={onChange}
                    value={search}
                    style={styles.searchBarInput}
                />
            </View>
            <Button
                title="Search"
                onPress={onClick}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        marginHorizontal: '20%',
        marginVertical: 20,
        alignItems: 'center',
    },
    searchBar: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        padding: 5,
    },
    searchBarInput: {
        width: 150,
    },
});

export default Searchbar;