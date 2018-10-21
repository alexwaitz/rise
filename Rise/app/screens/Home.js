import React, { Component } from "react"
import { ScrollView, Text } from "react-native"

import Header from "../components/Header"
import Dial from "../components/Dial"
import Summary from "../components/Summary"

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        } 
    }
    async componentDidMount() {
        let req = await fetch("http://192.168.10.69:3000/user/2")
        let data = await req.json()
        this.setState({user: data.data.users[0]})
    }
    render() {
        return (
            <ScrollView>
                <Header>{this.state.user.name}</Header>
                <Dial value={this.state.user.points} hist={this.state.user.json ? JSON.parse(this.state.user.json).history : []}></Dial>
                <Summary hist={this.state.user.json ? JSON.parse(this.state.user.json).history : []} />
            </ScrollView>
        )
    }
}