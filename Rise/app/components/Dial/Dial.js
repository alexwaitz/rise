import React, { Component } from "react"
import { View, Text } from "react-native"
import Mask from "react-native-mask"
import { AreaChart, Grid } from "react-native-svg-charts"
import * as shape from "d3-shape"

import styles from "./styles"

export default class Dial extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.dial}>
                    <View style={styles.textWrapper}>
                        <Mask shape="circle" style={styles.mask}>
                            <AreaChart
                                style={{ height: 150, width: 150, bottom: -25 }}
                                data={ this.props.hist == [] ? [10, 10, 10] : this.props.hist }
                                contentInset={{ top: 30, bottom: 30 }}
                                curve={ shape.curveNatural }
                                svg={{ fill: '#C1F2E4' }}
                            >
                            </AreaChart>
                        </Mask>
                        <View style={[styles.textWrapper, styles.mask]}>
                            <Text style={styles.valueNumber}>{this.props.value}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}