import React, { useContext } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Button, Icon, ListItem } from 'react-native-elements'
import ProductContext from '../context/ProductContext'



export default props => {


    const {state, dispatch} = useContext(ProductContext)

    function confirmProductDeletion(produto){
        Alert.alert('Excluir produto', 'Deseja excluir o produto?', [
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type : 'deleteProduct',
                        payload: produto
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getProductItem({item: produto}){
        return (
            <ListItem bottomDivider  onPress={() => props.navigation.navigate('ProductForms')}>

                <ListItem.Content>
                    <ListItem.Title key='name'>{produto.name}</ListItem.Title>
                    <ListItem.Title key='desc'>{produto.desc}</ListItem.Title>
                    <ListItem.Title key='categoria'>{produto.categoria}</ListItem.Title>
                    <ListItem.Title key=''>{produto.preco}</ListItem.Title>
                </ListItem.Content>
            <Button
            onPress={() => {
                props.navigation.navigate( 'ProductForms', produto);
          }}
            type="clear"
            icon={<Icon name="edit" size={25} color="orange" />}
        />
         <Button 
            onPress={() => {confirmProductDeletion(produto)}}
            type="clear"
            icon={<Icon name="delete" size={25} color="red"/>}
        />
            </ListItem>
        )
    } 


    return (
        <View>
            <FlatList data={state.products}  keyExtractor={produtos => produtos.id.toString()} renderItem={getProductItem} >
            </FlatList>
        </View>
    )
}