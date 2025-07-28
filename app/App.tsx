import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { UsersProvaider } from './context/UserContext';

import ProductForm from './views/ProductForm';
import ProductList from './views/ProductsList';
import UserForm from './views/UserForm';
import UserLists from './views/UserList';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function UserList({ navigation, route }) {
  return (
    <View style={{ flex: 1 }}>
      <UserLists navigation={navigation} route={route} />
    </View>
  );
}

function UserProduct({navigation, route}) {
  return (
    <View style={{ flex: 1 }}>
      <UserForm navigation={navigation} route={route}/>
    </View>
  );
}

function ProductForms({navigation, route}){
  return (
    <View style={{flex: 1}}>
      <ProductForm navigation={navigation} route={route}></ProductForm>
    </View>
  )
}

function ProductLists() {
  return (
    <View style={{ flex: 1 }}>
     <ProductList/>
    </View>
  );
}

function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tab.Screen
        name="UserList"
        component={UserList}
        options={{
          title: 'Clientes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate('UserProduct')}
            >
              <Ionicons name="add" size={25} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={ProductLists}
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate('ProductForms')}
            >
              <Ionicons name="add" size={25} color="white" />
            </TouchableOpacity>
          ),
        }}
        
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UsersProvaider>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserProduct"
            component={UserProduct}
            options={{
              title: 'Cadastro de Cliente',
              headerStyle: { backgroundColor: '#f4511e' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' },
            }}
          />
          <Stack.Screen
           name="ProductForms"
            component={ProductForms}
            options={{
            title: 'Cadastro de Produto',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
  }}
/>

        </Stack.Navigator>
    </UsersProvaider>
  );
}
