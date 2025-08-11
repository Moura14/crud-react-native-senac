import { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';






const initialState = {
    email: '',
    password: ''
}


export default class Login extends Component{




    state = {...initialState}

    render(){
        return (
            <ImageBackground source={require('../../assets/images/login.jpg')} style={styles.background}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.container}>
                    <Text style={styles.subtitle}>Informe seus dados</Text>
                    <TextInput style={styles.input} placeholder='E-mail' value={this.state.email} onChangeText={(email) => this.setState({email})}></TextInput>
                    <TextInput style={styles.input} placeholder='Senha' value={this.state.password} onChangeText={(password) => this.setState({password})} secureTextEntry={true}></TextInput>
                </View>
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Tabs')}>
                        
                            <Text style={styles.buttonText}>{this.state.stateNew ? 'Registrar' : 'Entrar'}</Text>
                      
                    </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={{color: '#FFF'}}>Não tem uma conta? Cadastre-se</Text>
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