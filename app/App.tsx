import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import UserForm from './views/UserForm'
import UserList from './views/UserList'



const Stack = createNativeStackNavigator()


export default (_props: any) => {
    return (
            <Stack.Navigator initialRouteName='UserList'>
                <Stack.Screen name='UserList' component={UserList}></Stack.Screen>
                 <Stack.Screen name='UserForm' component={UserForm}></Stack.Screen>
            </Stack.Navigator>
    )
}