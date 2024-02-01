import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import logo from '../../assets/logo-6.png'
import desc from '../../assets/logo-11.png'
import { SafeAreaView } from 'react-native';
import { Input, Stack, Icon, Pressable,} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "native-base";
import { connect, useDispatch, useSelector } from "react-redux";
import { isLogin } from '../../config/action';


  const Field = ({navigation}) => {
    const [show, setShow] = React.useState(false);
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const light = {
        bg: "coolGray.900",
        _hover: {
          bg: "coolGray.900"
        },
        _focus: {
          bg: "coolGray.900:alpha.900"
        }
      }
      const dark = {
        bg: "coolGray.100",
        _hover: {
          bg: "coolGray.100"
        },
        _focus: {
          bg: "coolGray.100:alpha.900"
        }
      }

      const onSubmit = () => {
        navigation.navigate('login')
      }
    return (
    <View>
    <Stack space={4} w="100%" alignItems="center">
        <Input w={{
        base: "75%",
        md: "25%"
      }} _light={light} style={{color:'black'}} _dark={dark} name='name' onChange={onChangeEmail} value={email} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
        <Input w={{
        base: "75%",
        md: "25%"
      }} _light={light} style={{color:'black'}} _dark={dark} name='email' onChange={onChangeEmail} value={email} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Email" />

        <Input w={{
        base: "75%",
        md: "25%"
      }} _light={light} style={{color:'black'}} _dark={dark}  name='password' onChange={onChangePassword} value={password} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Password" />
         <Input w={{
        base: "75%",
        md: "25%"
      }} _light={light} style={{color:'black'}} _dark={dark}  name='confirmPassword' onChange={onChangePassword} value={password} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Confirm Password" />
        <Input w={{
        base: "75%",
        md: "25%"
      }} _light={light} style={{color:'black'}} _dark={dark} name='noKtp' onChange={onChangeEmail} value={email} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="No.KTP" />

      </Stack>
      <Stack space={4} w="100%" alignItems="center"  style={{marginTop:20}}> 
        <Button w={{
        base: "75%",
        md: "25%"
        }} onPress={()=>onSubmit()}>
            Register
        </Button>
      </Stack>
      </View>)
  };

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Image source={desc} style={styles.desc} />
            <View style={{ flex: 1 }}>
                <Stack style={styles.input} space={4} w="75%" maxW="300px" mx="auto">
                    <Field navigation={navigation}/>
                </Stack>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#87ceeb',
    },
    logo: {
        marginTop: 100,
        height: '20%',
        position: 'absolute'
    },
    desc: {
        marginTop: 230,
        height: 30
    },
    input: {
        padding: 10,
        color: 'black',
        width: 350
    },
});

export default Register;