import React, { Component } from "react"
import { View } from "react-native"

import styles from "./styles"
import Title from "../Title"

export default class Header extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Title>{this.props.children}</Title>
            </View>
        )
    }
}