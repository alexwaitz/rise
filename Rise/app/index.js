import React, { Component } from "react"
import { View, StatusBar, Text } from "react-native"
import { NativeRouter, Switch, Route, AndroidBackButton } from "react-router-native"

import Home from "./screens/Home"
import Tabs from "./components/Tabs"
import Leaderboard from "./screens/Leaderboard"
import Rewards from "./screens/Rewards"

export default class Index extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: "white",
                flex: 1
            }}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <NativeRouter>
                    <AndroidBackButton>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/leaderboard">
                                <Leaderboard />
                            </Route>
                            <Route exact path="/rewards">
                                <Rewards />
                            </Route>
                        </Switch>
                        <Tabs />
                    </AndroidBackButton>
                </NativeRouter>
            </View>
        )
    }
}