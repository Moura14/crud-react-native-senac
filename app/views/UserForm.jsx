import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'


export default ({route, navigation}) => {
    
  const [user, setUser] = useState(route.params ? route.params : {})
    return (
       <View style={style.form}>
            <Text>Name</Text>
            <TextInput style={style.input} onChangeText={name => setUser({...user, name})} placeholder='Informe o Nome' value={user.name}></TextInput>
            <View>
                <Text>Email</Text>
                <TextInput style={style.input} onChangeText={email => setUser({...user, email})} placeholder='Informe seu Email' value={user.email}></TextInput>
            </View>
            <View>
                <Text>URL do Avatar</Text>
                <TextInput style={style.input} onChangeText={url => setUser({...user, email})} placeholder='Informe a URl do Avatar' value={user.avatar}>
                </TextInput>
            </View>
            <Button title="Salvar" onPress={() =>  {
                navigation.goBack()
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