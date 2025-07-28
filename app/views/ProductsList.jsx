import { Alert, FlatList, View } from 'react-native'
import { Button, Icon, ListItem } from 'react-native-elements'



export default props => {




    function confirmUserDeletion(user){
        Alert.alert('Excluir produto', 'Deseja excluir o produto?', [
            {
                text: 'Sim',
                onPress(){
                    
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({}){
        return (
            <ListItem bottomDivider  onPress={() => props.navigation.navigate('UserForm')}>

                <ListItem.Content>
                    <ListItem.Title>Produto</ListItem.Title>
                    <ListItem.Title>Preço</ListItem.Title>
                </ListItem.Content>
            <Button
            onPress={() => {
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
            <FlatList >
            </FlatList>
        </View>
    )
}