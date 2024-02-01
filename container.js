import Router from './router/router';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';
import { useSelector } from "react-redux";
import Views from './router/index'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const CustomHeader = ({ title, navigation }) => (
  <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#3498db', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ color: 'white', fontSize: 16 }}>Back</Text>
    </TouchableOpacity>
    <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Text style={{ color: 'white', fontSize: 16 }}>Settings</Text>
    </TouchableOpacity>
  </View>
);

// Define your screen components
const HomeScreen = ({ navigation }) => (
  <View>
    {/* Use the custom header component with the title */}
    <CustomHeader title="Home" navigation={navigation} />
    {/* Rest of your screen content */}
    <Text>Home Screen Content</Text>
  </View>
);

const SettingsScreen = ({ navigation }) => (
  <View>
    {/* Use the custom header component with the title */}
    <CustomHeader title="Settings" navigation={navigation} />
    {/* Rest of your screen content */}
    <Text>Settings Screen Content</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const Route = () => {
  let login = true
  const isLogin = useSelector(({ AyoHotel}) => AyoHotel.isLogin);
  const navigation = useNavigation();

  useEffect(() => {
    if(!isLogin){
      navigation.navigate('login');
    }
  }, []);

  return (
    <>
               {isLogin ? 
            (
              <Stack.Navigator      
              screenOptions={{
                header: ({ scene, navigation }) => Views(scene, navigation)                
              }}
              >
                {Router.map((e, key) => {
                        return(
                          <Stack.Screen
                           name={e.name} key={key} component={e.component} options={{headerShown: true}}/>
                        )
                    })}
              </Stack.Navigator>
              )
            : (
              <Stack.Navigator>
                <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='register' component={Register} options={{headerShown: false}}/>
              </Stack.Navigator>
            )}</>
  )
}

const Container = () => {;
    return (
      <NavigationContainer>
        <Route/>
      </NavigationContainer>
    );
}

export default Container
