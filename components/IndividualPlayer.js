import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

export default class IndividualPlayer extends React.Component {
  state = {
    player: []
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', ''),
      headerBackTitle: navigation.getParam('teamId', '')
    }
  }
  async componentDidMount() {
    const player = this.props.navigation.getParam('player')
    console.log('player', player)
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
