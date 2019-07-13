import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExpoLinksView } from '@expo/samples'
import axios from 'axios'

export default class ClubhouseScreen extends React.Component {
  state = {
    standings: [],
    pointsLeaders: []
  }
  async componentDidMount() {
    const standings = await axios.get(
      'https://dn0a11v09sa0t.cloudfront.net/LeagueTeamStandings.json'
    )

    this.setState({ standings: standings.data.Teams })

    const leaders = await axios.get(
      'https://dn0a11v09sa0t.cloudfront.net/LeaguePlayerStatLeaders.json'
    )
    this.setState({ pointsLeaders: leaders.data.Points.Players })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.leagueContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>League Standings</Text>
            </View>

            <View style={styles.cardBody}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.nameColumn}>
                  <Text style={styles.cardHeaderText}>Name</Text>
                </View>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardHeaderText}>Wins</Text>
                </View>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardHeaderText}>Loss</Text>
                </View>
              </View>
              {this.state.standings.map(team => {
                const { TeamName, TeamID, Wins, Losses, Ties, ScoreDiff } = team
                return (
                  <View style={styles.cardRow}>
                    <View style={styles.nameColumn}>
                      <Text
                        style={styles.name}
                        onPress={() =>
                          this.props.navigation.navigate('IndividualTeam', {
                            headerTitle: TeamName
                          })
                        }
                      >
                        {TeamName}
                      </Text>
                    </View>
                    <View style={styles.cardColumn}>
                      <Text>{Wins}</Text>
                    </View>
                    <View style={styles.cardColumn}>
                      <Text>{Losses}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Points Leaders</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.nameColumn}>
                  <Text style={styles.cardHeaderText}>Name</Text>
                </View>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardHeaderText}>Points</Text>
                </View>
                <View style={styles.cardColumn}>
                  <Text style={styles.cardHeaderText}>PPG</Text>
                </View>
              </View>
              {this.state.pointsLeaders.map((player, idx) => {
                const {
                  FirstName,
                  LastName,
                  TotalValue,
                  PerGameValue,
                  TeamId
                } = player
                if (idx < 6) {
                  return (
                    <View
                      style={styles.cardRow}
                      onPress={() =>
                        this.props.navigation.navigate('IndividualPlayer', {
                          player,
                          name: `${FirstName} ${LastName}`,
                          teamId: TeamId
                        })
                      }
                    >
                      <View style={styles.nameColumn}>
                        <Text
                          style={styles.name}
                          onPress={() =>
                            this.props.navigation.navigate('IndividualPlayer', {
                              player,
                              name: `${FirstName} ${LastName}`,
                              teamId: TeamId
                            })
                          }
                        >{`${FirstName} ${LastName}`}</Text>
                      </View>
                      <View style={styles.cardColumn}>
                        <Text>{TotalValue}</Text>
                      </View>
                      <View style={styles.cardColumn}>
                        <Text>{PerGameValue}</Text>
                      </View>
                    </View>
                  )
                } else {
                  return
                }
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

ClubhouseScreen.navigationOptions = {
  title: 'Clubhouse',
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: 'black'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
  leagueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(47, 149, 220, 0.16)',
    backgroundColor: 'white',
    width: '98%',
    borderRadius: 10,
    height: 160,
    marginTop: 5
  },
  cardHeader: {
    marginTop: 5,
    width: '98%'
  },
  cardHeaderRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  cardHeaderText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  cardBody: {
    flex: 1,
    height: 100
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%%'
  },
  nameColumn: {
    width: '60%'
  },
  name: {
    color: 'blue'
  },
  cardColumn: {
    width: '19%'
  }
})
