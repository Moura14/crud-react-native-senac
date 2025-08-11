import { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}


export default class Register extends Component {




    state = {...initialState}

    render(){
        return(
            <ImageBackground source={require('../../assets/images/login.jpg')} style={styles.background}>
                <Text style={styles.title}>Registro</Text>
                <View style={styles.container}>
                    <Text style={styles.subtitle}>Informe seus dados</Text>
                    <TextInput style={styles.input} placeholder='Nome'></TextInput>
                    <TextInput style={styles.input} placeholder='E-mail'></TextInput>
                    <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true}></TextInput>
                    <TextInput style={styles.input} placeholder='Confirme sua senha' secureTextEntry={true}></TextInput>
                </View>
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        
                            <Text style={styles.buttonText}>Registrar</Text>
                      
                    </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{color: '#FFF'}}>Já tem uma conta? Entre</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
        
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 70,
        color: '#FFF',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 10
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        height: 40,
        marginBottom: 10,
        paddingLeft: 15
    },
    button: {
        backgroundColor: '#080',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
})