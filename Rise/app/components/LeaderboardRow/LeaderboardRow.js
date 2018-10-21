import React, { Component } from "react"
import { View, Image, Text } from "react-native"

import styles from "./styles"

export default class LeaderboardRow extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.profilePictureWrapper}>
                    <Text style={styles.name}>{this.props.iter + 4}</Text>
                    <Image style={styles.profilePicture}
                        source={{uri: this.props.user.picture || ""}}/>
                    <Text style={styles.name}>{this.props.user.name}</Text>
                </View>
            </View>
        )
    }
}