import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Button from './Button';
import Intro from './Intro';

export default class Game extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>TargetSum ...</Text>
            <Button />
            <Intro />   
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    }
})
