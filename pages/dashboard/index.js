import {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { View } from 'native-base';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate} from 'react-native-modern-datepicker'
import { Flex, Spacer,Center } from "native-base";
import { Box, Card, Input, Stack, FormControl, Button} from "native-base";
import { Select ,CheckIcon} from "native-base";



function DatePickers() {
const today = new Date()
const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')
const [openCheckin, setOpenCheckin] = useState(false) // open and closes the modal
const [openCheckout, setOpenCheckout] = useState(false) // open and closes the modal
const [date, setDate] = useState('') // date variable
const [dateOut, setDateOut] = useState('')

function handleOnPress () {
    setOpenCheckin(!openCheckin);
}

function handleOnPressCheckout () {
if(date){
    setOpenCheckout(!openCheckout);
}else{
    window.alert('please select checkin')
}
}

function handleChange (propDate) {
setDate (propDate)
setOpenCheckin(false)
}

function handleChangeCheckout (propDate) {

    setDateOut (propDate)
    setOpenCheckout(false)

}

return (
<>
    <Stack>
    <TouchableOpacity onPress={handleOnPress} >
    <Flex direction="row" mb="2.5" mt="1.5">
        <Center size="8" w='20'bg="primary.100" _text={{
            color: "coolGray.800",
          }}>
        <Text>Checkin</Text>
        </Center>
        <TextInput value={date} editable={false} style={styles.input}></TextInput>
    </Flex>
    </TouchableOpacity>
    </Stack>
    <Stack>
    <TouchableOpacity onPress={handleOnPressCheckout} >
    <Flex direction="row" mb="2.5" mt="1.5">
        <Center size="8" w='20'bg="primary.100" _text={{
            color: "coolGray.800",
          }}>
        <Text>Checkout</Text>
        </Center>
        <TextInput value={dateOut} editable={false} style={styles.input}></TextInput>
    </Flex>
    </TouchableOpacity>
    </Stack>
    <Modal
    animationType='slide'
    transparent={true} 
    visible={openCheckin}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <DatePicker
                mode='calendar'
                minimumDate={startDate}
                selected={date}
                onDateChange= {handleChange}/>
                    <TouchableOpacity onPress={handleOnPress} style={styles.closeModal}>
                        <Button onPress={handleOnPress}>Close</Button>
                    </TouchableOpacity>
            </View>
        </View>
    </Modal>
    <Modal
    animationType='slide'
    transparent={true} 
    visible={openCheckout}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <DatePicker
                mode='calendar'
                minimumDate={date}
                selected={dateOut}
                onDateChange= {handleChangeCheckout}/>
                    <TouchableOpacity onPress={handleOnPressCheckout} style={styles.closeModal}>
                        <Button onPress={handleOnPressCheckout}>Close</Button>
                    </TouchableOpacity>
            </View>
        </View>
    </Modal>
</>
)}

const dashboard = () => {
    const [selectedCategory, setSelectedCategory]= useState('')
    const [selectedRoom, setSelectedRoom] = useState('')
    return (
        <View style={styles.container}>
            <Box>
                <Card style={styles.card} justifyContent='center' alignItems='center'> 
                    <Text style={styles.title}>
                        Cari Kamar            
                    </Text>
                    <FormControl>
                        <Stack space={5}>
                            <Stack>
                            <FormControl.Label>Categori kamar</FormControl.Label>
                            <Select style={{color:'black'}} selectedValue={selectedCategory} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setSelectedCategory(itemValue)}>
                                <Select.Item label="Suit Room" value="suit" />
                                <Select.Item label="Naratama Room" value="naratama" />
                                <Select.Item label="Standart Room" value="standart" />
                                </Select>
                            </Stack>
                            <Stack>
                                <FormControl.Label>No kamar</FormControl.Label>
                                <Select isDisabled={!selectedCategory} style={{color:'black'}} selectedValue={selectedRoom} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setSelectedRoom(itemValue)}>
                                <Select.Item label="101" value="101" />
                                <Select.Item label="102" value="102" />
                                <Select.Item label="103" value="103" />
                                </Select>
                            </Stack>
                            <Stack>
                                <FormControl.Label>Lama inap</FormControl.Label>
                                {DatePickers()}
                            </Stack>
                            <Stack>
                            <FormControl.Label>Total harga</FormControl.Label>
                                <Input size="lg" isDisabled={true} style={{color:'black'}} value='Rp.2.000.000' placeholder="Total harga" w="100%" />
                            </Stack>

                            <Stack>
                                <Button>Pesan</Button>
                            </Stack>
                        </Stack>
                    </FormControl>
                </Card>
            </Box>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      color:'black'
    },
    card:{
        backgroundColor:'#F8F7F9',
        margin:30
    },
    title:{
        alignContent:'center',
    },
    containers: {
        flex: 1,
        backgroundColor: 'afff',
        alignItems: 'center',
        justifyContent: 'center',
        },
        centeredView:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 22,
        },
        modalView :{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '98%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        },
        shadowOffset: {
        width: 8,
        height: 2,
        shadowOpacity: 0.25, 
        shadowRadius: 4,
        elevation: 5,
    },
    input:{
       borderColor:'black',
       borderWidth:1,
       width:200,
       color:'black',
       paddingLeft:10,
    },
    close:{
        alignItems:'left'
    }
  });

export default dashboard;