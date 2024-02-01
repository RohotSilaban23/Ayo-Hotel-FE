
import {useState} from 'react';
import {Modal, StyleSheet, Text, Touchableopacity, View } from 'react-native'
import { View } from 'native-base';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate} from 'react-native-modern-datepicker'


export default function App() {

const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')

const today = new Date()

const [open, setöpen] = useState(false) // open and closes the modal

const [date, setDate] = useState('2023/02/08') // date variable

function handleOnPress () {

setOpen (run);
}


function handleChange (propDate) {

console.log(propDate)

setDate (propDate)

}


return (
<>
<Text> Open up App.js to start working on your app!</Text>

<TouchableOpacity onPress={handleOnPress}>

<Text>Open</Text>
</TouchableOpacity>
<Modal
animationType='slide'
transparent={true} 
visible={open}>

<View style={styles.centeredView}>
<View style={styles.modalView}>
<DatePicker
mode='calendar'
minimumDate={startDate}
selected={date}
onDateChange= {handleChange}/>
</View>
</View>
</Modal>

<TouchableOpacity onPress={handleOnPress}>

<Text>Close</Text>
</TouchableOpacity>
</>
)}
