import { Ionicons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { UsersProvaider } from './context/UserContext'
import UserForm from './views/UserForm'
import UserList from './views/UserList'

const Stack = createNativeStackNavigator()

export default (_props: any) => {
    return (
        <UsersProvaider>
            <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>
            <Stack.Screen
                name='UserList'
                component={UserList}
                options={({ navigation }) => ({
                    title: 'Lista de Usuários',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.navigate('UserForm')}
                        >
                            <Ionicons name='add' size={25} color='white' />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name='UserForm'
                component={UserForm}
                options={{
                    title: 'Formulário de Usuários',
                }}
            />
        </Stack.Navigator>
        </UsersProvaider>
        
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}
