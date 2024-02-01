import React from "react";
import { Menu, HamburgerIcon, Pressable, Center , HStack,   Avatar, Box, StatusBar } from "native-base";
import { Image } from 'react-native';
import Images from '../assets/logo-baru.png';
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { isLogin } from "../config/action";
import { useEffect } from "react";


function Dropdown() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isLogins = useSelector(({ AyoHotel}) => AyoHotel.isLogin);
    const onLogout = () => {
        dispatch(isLogin(false))
    }

    useEffect(() => {
        if(!isLogins){
          navigation.navigate('login');
        }
    }, []);
    return <Box h="80%" w="90%" alignItems="flex-start">
        <Menu shadow={2} bg='#87ceeb' w="190" trigger={triggerProps => {
        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Avatar style={{margin:5}} bg='#87ceeb' source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>Profile</Avatar>
              </Pressable>;
            }}>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Pesanan Saya</Menu.Item>
          <Menu.Item>Riwayat Pesanan</Menu.Item>
          <Menu.Item onPress={()=> onLogout()}>Logout</Menu.Item>
        </Menu>
      </Box>;
  }

export default function Views() {
  return <>
      <StatusBar bg='#87ceeb' barStyle="light-content" />
      <Box safeAreaTop bg="#87ceeb" />
      <HStack bg='#87ceeb' px="1" py="3" alignItems="center" w="100%">
        <HStack  alignItems="center">
            <Dropdown/>
        </HStack>
        <HStack alignItems="center" w="100%" position='absolute' justifyContent='center'>
        <Image style={{alignContent:'center', justifyContent:'center', alignItems:'center'}} source={Images}/>
        </HStack>
      </HStack>
    </>;
}


    