import React, { Component } from "react"
import { View, Image, Text } from "react-native"

import styles from "./styles"

export default class LeaderboardHeader extends Component {
    render() {
        return (
            <View>
                <View style={styles.circleContainer}>
                    <View style={styles.normalCircle}>
                        <Image style={styles.innerImage}
                            source={{uri: this.props.users[1].picture || ""}}/>
                    </View>
                    <View style={styles.winnerCircle}>
                        <Image style={styles.innerImage}
                            source={{uri: this.props.users[0].picture || ""}}/>
                    </View>
                    <View style={styles.normalCircle}>
                        <Image style={styles.innerImage}
                            source={{uri: this.props.users[2].picture || ""}}/>
                    </View>
                </View>
                <View style={[styles.circleContainer, {}]}>
                    <Text style={styles.normalPlace}>2. {(this.props.users[1].name || "").split(" ")[0]}</Text>
                    <Text style={styles.firstPlace}>1. {(this.props.users[0].name || "").split(" ")[0]}</Text>
                    <Text style={styles.normalPlace}>3. {(this.props.users[2].name || "").split(" ")[0]}</Text>
                </View>
            </View>
        )
    }
}