import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import HttpTeam from './../../services/Teams/http-teams';

import ItemTeam from './components/item-team';
import ItemSeparator from './components/item-separator';


class TeamsScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
        teamsList: []
       
    }


    

  }
    //Método de Cilo de Vida
    componentDidMount() {
        this.getTeams();
    };
  async getTeams(){
    const data = await HttpTeam.getTeams();

    this.setState({
        teamsList: data['teams']
    });


    console.log(data['teams']);
  }

  renderItem = ( { item }) => <ItemTeam navigation = { this.props.navigation } teams = { item } />
  separatorComponent = () => <ItemSeparator />;
  emptyComponent = () => <Text>Teams not found </Text>
  keyExtractor = item => item.idTeam.toString();

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <FlatList
                            data ={ this.state.teamsList }
                            renderItem={ this.renderItem }
                            ItemSeparatorComponent = { this.separatorComponent }
                            ListEmptyComponent = { this.emptyComponent }
                            keyExtractor = { this.keyExtractor }
        />
      </View>
    );
  }
}

export default TeamsScene;
