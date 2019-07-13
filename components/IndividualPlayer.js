import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

export default class IndividualPlayer extends React.Component {
  state = {
    player: []
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', ''),
      headerBackTitle: null
    }
  }
  async componentDidMount() {
    const player = this.props.navigation.getParam('player')
  }

  render() {
    return <ScrollView style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
