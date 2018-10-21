import React, { Component } from "react"
import { ScrollView, Text, FlatList } from "react-native"

import Header from "../components/Header"
import LeaderboardHeader from "../components/LeaderboardHeader"
import LeaderboardRow from "../components/LeaderboardRow"

export default class Leaderboard extends Component {
    constructor() {
        super()
        this.state = {
            users: [{}, {}, {}]
        } 
    }
    async componentDidMount() {
        let req = await fetch("http://192.168.10.69:3000/users")
        let data = await req.json()
        this.setState({users: data.data.users})
    }
    render() {
        return (
            <ScrollView>
                <Header>Leaderboard</Header>
                <LeaderboardHeader users={this.state.users} />
                <FlatList
                    style={{
                        paddingTop: 20
                    }}
                    data={this.state.users.splice(3, this.state.users.length)}
                    renderItem={({item, index}) => <LeaderboardRow iter={index} user={item}></LeaderboardRow>}
                />
            </ScrollView>
        )
    }
}