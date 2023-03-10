import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <View style={styles.pagination}>
            <Button
                onPress={onLeftClick}
                title="➖"
            />
            <Text>  {page} to {totalPages}  </Text>
            <Button
                onPress={onRightClick}
                title="➕"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    }
});

export default Pagination;