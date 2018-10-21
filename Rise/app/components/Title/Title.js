import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./styles"

export default class Title extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={[styles.title, this.props.style]}>{this.props.children}</Text>
            </View>
        )
    }
}