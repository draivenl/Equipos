import React from 'react';
import {
    Text,
    View,
    StyleSheet ,
    Image,
    TouchableHighlight
} from 'react-native';


const ItemTeam = (props) => (
    <TouchableHighlight
        onPress = { ()=> props.navigation.navigate('TeamDetailScreen', { id: props.teams.idTeam } ) }
        underlayColor = "#ccc"
    >
    <View style={ styles.container }>
            <Image
                style={styles.cover}
                source ={{ uri: props.teams.strTeamBadge }}
            />
            <Text style={ styles.title }>{ props.teams.strTeam }</Text>
      
    </View>
    </TouchableHighlight>

);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    brand:{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    brandText:{
        color: 'white',
        fontSize: 11
    },
    cover:{
        height: 60,
        width: 60,
        resizeMode: 'contain',
    },
    right:{
        paddingLeft: 2,
        justifyContent: 'space-between',

    },
    left:{
        paddingRight: 2,
    },
    title:{
        fontSize: 18,
        color: '#44546b',
        paddingHorizontal: 4

    },
    price:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 13,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    description:{
        color: '#6b6b6b',
        fontSize: 12,
        fontWeight: 'bold',
    }
    
})

export default ItemTeam;
