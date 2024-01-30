import Router from './router/router';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Auth/login';
import { useSelector } from "react-redux";



const Stack = createNativeStackNavigator();
const Container = () => {
    let login = true
    const isLogin = useSelector(({ AyoHotel}) => AyoHotel.isLogin);

    return (
      <NavigationContainer>
        <Stack.Navigator>
            {isLogin ? 
                (
                    Router.map((e, key) => {
                        return(
                          <Stack.Screen
                           name={e.name} key={key} component={e.component}
                           options={{headerShown: false}}/>
                        )
                    })
                )
            : (
              <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
            )}
            </Stack.Navigator>
            </NavigationContainer>
    );
}

export default Container
