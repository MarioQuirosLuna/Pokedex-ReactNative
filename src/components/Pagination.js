import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPages } = props;
    return (
        <View style={styles.pagination}>
            <Button
                onClick={onLeftClick}
                title="➖"
            />
            <Text>{page} to {totalPages}</Text>
            <Button
                onClick={onRightClick}
                title="➕"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

export default Pagination;