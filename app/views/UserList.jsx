import React from 'react'
import { FlatList, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import users from '../data/user'


export default props => {

    console.warn(users)

    function getUserItem({item: user}){
        return (
            <ListItem bottomDivider onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={{uri: user.avatar}}></Avatar>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Title>{user.email}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }


    return (
        <View>
            <FlatList data={users} keyExtractor={user => user.id.toString()} renderItem={getUserItem}>

            </FlatList>
        </View>
    )
}