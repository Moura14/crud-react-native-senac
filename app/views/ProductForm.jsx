import { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import ProductContext from '../context/ProductContext'


export default ({route, navigation}) => {

    const [produto, setProduto] = useState(route?.params ?? {})

 const {dispatch} = useContext(ProductContext)
    
    return (
        <View style={style.form}>
            <Text>Nome do produto</Text>
            <TextInput style={style.input} onChangeText={ nome => (setProduto({...produto, nome}))} value={produto.nome}   placeholder='Informe o produto'  ></TextInput>
            <View>
                <Text>Descrição</Text>
                <TextInput style={style.input} onChangeText={ descricao => (setProduto({...produto, descricao }))} value={produto.descricao}  placeholder='Informe a descrição'  ></TextInput>
            </View>
            <View>
                <Text>Categoria</Text>
                <TextInput style={style.input} onChangeText={ categoria => (setProduto({...produto, categoria }))} value={produto.categoria} placeholder='Informe a categoria' >
                </TextInput>
            </View>
            <View>
                <Text>Preço</Text>
                <TextInput style={style.input} onChangeText={ preco => (setProduto({...produto, preco }))} value={produto.preco} placeholder="Informe o preço" />
            </View>
            <Button title="Salvar" onPress={() =>  {
                    dispatch({
                type: produto.id ? 'updateProduct' : 'createProduct',
                payload: produto,
               })
                        }}>
            
                        </Button>
        </View>
    )
}


const style = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 40,
        borderColor:'gray' ,
        borderWidth: 1,
        marginBottom: 10
    }
})