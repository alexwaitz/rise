import React, { Component } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Link } from "react-router-native"

import styles from "./styles"

export default class Tabs extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                {[{to: "/", icon: "f"}, {to: "/leaderboard", icon: "l"}, {to: "/rewards", icon: "b"}].map((i, x) => (
                    <Link key={x} to={i.to} style={styles.button} component={TouchableOpacity} activeOpacity={0.5}>
                        <View>
                            <Text style={styles.icon}>{i.icon}</Text>
                        </View>
                    </Link>
                ))}
            </View>
        )
    }
}