import React, { Component } from "react"
import { ScrollView, View, Text } from "react-native"

import Header from "../components/Header"
import Dial from "../components/Dial"
import Summary from "../components/Summary"

export default class Rewards extends Component {
    render() {
        return (
            <ScrollView>
                <Header>Rewards</Header>
                <View style={{
                    padding: 30,
                    borderRadius: 10,
                    backgroundColor: "#eeeeee",
                    marginHorizontal: 15,
                    marginBottom: 15
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 24,
                    }}>1st place</Text>
                    <Text>Wins a homework pass and gets to skip the final.</Text>
                </View>
                <View style={{
                    padding: 30,
                    borderRadius: 10,
                    backgroundColor: "#eeeeee",
                    marginHorizontal: 15,
                    marginBottom: 15
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 24,
                    }}>2nd place</Text>
                    <Text>Wins a homework pass and an extra bathroom pass.</Text>
                </View>
                <View style={{
                    padding: 30,
                    borderRadius: 10,
                    backgroundColor: "#eeeeee",
                    marginHorizontal: 15,
                    marginBottom: 15
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 24,
                    }}>3rd place</Text>
                    <Text>Wins a homework pass.</Text>
                </View>
            </ScrollView>
        )
    }
}