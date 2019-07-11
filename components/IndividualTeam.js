import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import axios from 'axios'

export default class IndividualTeam extends React.Component {
  state = {
    players: []
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('headerTitle', 'Team')
    }
  }
  async componentDidMount() {
    const teamId = this.props.navigation.getParam('teamId')
    const { data } = await axios.get(
      `https://dn0a11v09sa0t.cloudfront.net/Teams/${teamId}_TeamStats.json`
    )

    this.setState({ players: data.Players })
  }

  render() {
    console.log('teamId', this.props.navigation.getParam('teamId'))
    return (
      <ScrollView style={styles.container}>
        {this.state.players.map(player => {
          const { FirstName, LastName, TeamId } = player
          return (
            <Text
              onPress={() =>
                this.props.navigation.navigate('IndividualPlayer', {
                  player,
                  name: `${FirstName} ${LastName}`,
                  teamId: TeamId
                })
              }
            >
              {FirstName}
              {LastName}
            </Text>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
