
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


export default ({route, navigation}) => {

    
    return (
        <View style={style.form}>
            <Text>Nome do produto</Text>
            <TextInput style={style.input}  placeholder='Informe o produto' ></TextInput>
            <View>
                <Text>Descrição</Text>
                <TextInput style={style.input}  placeholder='Informe a descrição' ></TextInput>
            </View>
            <View>
                <Text>Categoria</Text>
                <TextInput style={style.input} placeholder='Informe a categoria' >
                </TextInput>
            </View>
            <View>
                <Text>Preço</Text>
                <TextInput style={style.input} placeholder="Informe o preço" />
            </View>
            <Button title="Salvar" onPress={() =>  {
                    
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