import React from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'
import users from '../data/user'


export default props => {

    function confirmUserDeletion(user){
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({item: user}){
        return (
            <ListItem bottomDivider  onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={{uri: user.avatar}}></Avatar>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Title>{user.email}</ListItem.Title>
                </ListItem.Content>
            <Button
            onPress={() => {
            props.navigation.navigate('UserForm', user);
          }}
            type="clear"
            icon={<Icon name="edit" size={25} color="orange" />}
        />
         <Button 
            onPress={() => {confirmUserDeletion(user)}}
            type="clear"
            icon={<Icon name="delete" size={25} color="red"/>}
        />
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