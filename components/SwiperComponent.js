import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper/src'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', textAlign: 'center' }
})

export class SwiperComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Swiper>
        {
          this.props.data.map((item, index) => {
            return (
              <View key={index} style={styles.container}>
                <Text> {item} </Text>
              </View>
            )
          })
        }
      </Swiper>
    )
  }
}

export default SwiperComponent
