import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import axios from 'axios'
import Colors from '../constants/Colors'

export default class IndividualTeam extends React.Component {
  state = {
    players: []
  }
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('headerTitle', 'Team')

    return {
      title,
      headerStyle: {
        backgroundColor: Colors[`${title.toLowerCase()}Primary`]
      },
      //headerTintColor: Colors[`${title.toLowerCase()}Secondary`],
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
  async componentDidMount() {
    const teamId = this.props.navigation.getParam('teamId')
    try {
      const { data } = await axios.get(
        `https://dn0a11v09sa0t.cloudfront.net/Teams/${teamId}_TeamStats.json`
      )
    } catch (err) {
      console.log(err)
    }

    this.setState({ players: data.Players })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.players.map(player => {
          const { FirstName, LastName, TeamId } = player

          return (
            <Text
              onPress={() =>
                this.props.navigation.navigate('IndividualPlayer', {
                  player,
                  name: `${FirstName} ${LastName}`
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
