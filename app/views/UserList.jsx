import React, { useContext } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'
import UsersContext from '../context/UserContext'



export default props => {

  const {state} = useContext(UsersContext)


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
            <FlatList data={state.users} keyExtractor={user => user.id.toString()} renderItem={getUserItem}>

            </FlatList>
        </View>
    )
}