import React, { Component } from "react";
import { 
    View
  } from 'react-native';
import TeamDetail from "./components/team-detail";

class TeamDetailScene extends Component {

    constructor(props) {
        super(props);
    }   
    render() {
        return (
            <View>
                <TeamDetail navigation={ this.props.navigation } />                  
            </View>
        );
    }
}
export default TeamDetailScene;