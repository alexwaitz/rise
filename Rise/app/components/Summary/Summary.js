import React, { Component } from "react"
import { View } from "react-native"

import Title from "../Title"

export default class Summary extends Component {
    render() {
        let { hist } = this.props
        let percent
        if(hist.length < 2) percent = 100
        percent = ((hist[hist.length-2] - hist[hist.length-1])/hist[hist.length-2]) * 100
        return (
            <View>
                <Title style={{
                    fontSize: 19,
                    color: "#70A98C"
                }}>Keep up the good work!</Title>
                <Title style={{
                    fontSize: 15,
                    color: "#70A98C"
                }}>Your gain has increased by {percent}%</Title>
            </View>
        )
    }
}