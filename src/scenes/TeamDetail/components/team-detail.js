import React , {Component}from 'react';
import {
    Button,
    Text, 
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} 
from 'react-native';
import HttpTeam from './../../../services/Teams/http-teams';

class TeamDetail extends Component{
  constructor(props){
      super(props);
      this.state = {
          team: []
      }
  }

  componentDidMount = () =>{ 
      id = this.props.navigation.getParam('id', 'no-data') ;
      this.getTeamtById(id);
  }
   /**
    * Funcion para Obtener un equipo por su Identificador
    */
  async getTeamtById(id){
      const data = await HttpTeam.getTeamById(id);
      console.log("TEAM data");
      console.log(data);
      this.setState({
        team: data['teams']
      })
      console.log("TEAM after");
      console.log(data['teams']);
  } 

  render(){
    return (
      <View>
         <View style={styles.dataContainer}>
            <View style={styles.imageContainer}>
            <Text>{this.state.team.strTeamBadge}</Text>
              <Text>{this.state.team.strTeamBadge}</Text>
              <Image style={styles.image}  source={{ uri: this.state.team.strTeamBadge  }} />        
            </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerCol:{
    flexDirection: 'column',
    marginLeft: 10,
  },
  dataContainer: {
    color: '#3949AB',
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,

  },
  brand: {
    color: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold"
  },
  titleText: {
    color: '#3949AB',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold"
  },
  brandText: {
    color: '#3949AB',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {  
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  price:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText:{
    backgroundColor: '#3949AB',
    padding: 2,
    color: 'white',
    fontSize: 20,
    borderRadius: 10,
    alignItems: 'center',
    lineHeight: 30
  },
  description: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
  descriptionText: {
    color: '#3949AB',
    fontSize: 20,
  },
  containerButton:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpacity: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#3949AB',
    borderRadius: 20,
  },
  buttonTextOpacity: {
    padding: 20,
    color: 'white',
    fontSize: 18
  }
});

export default TeamDetail;
