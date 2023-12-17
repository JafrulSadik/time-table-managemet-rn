import { AntDesign } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TaskContext } from '../../context/TaskProvider';

export default function Create({navigation}) {

  const [date, setDate] = useState(new Date(1598051730000));
  const [taskName, settaskName] = useState("");
  const [taskDetails, settaskDetails] = useState("")

  const {CreateTask} = useContext(TaskContext)

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: false,
      });
    };

  
    const showDatepicker = () => {
      showMode('date')
    };

    const showTimepicker = () => {
      showMode('time')
    };


  return (
    <ScrollView style={styles.container}>
        <Text style={styles.titleLabel}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          placeholder='Title'
          onChangeText={(text) => settaskName(text)}
        />
        <Text style={styles.titleLabel}>Enter details:</Text>
        <TextInput
          style={styles.inputDetails}
          placeholder='Title'
          editable
          multiline
          numberOfLines={5}
          maxLength={100}
          onChangeText={(text) => settaskDetails(text)}
        />
        <Text style={styles.titleLabel}>Select Date & Time :</Text>

        <View style={{marginHorizontal: 10, marginVertical: 10, gap : 10}}>
          <View style={styles.dateTime}>
            <TouchableOpacity 
              onPress={showDatepicker} 
              style={styles.calender}
            >
              <AntDesign name="calendar" size={24} color="teal" />
            </TouchableOpacity>
            
            <Text style={{color:'gray'}}>16-06-2023</Text>

          </View>

          <View style={styles.dateTime}>
            <TouchableOpacity 
              onPress={showTimepicker} 
            >
              <AntDesign name="clockcircleo" size={24} color="teal"/>
            </TouchableOpacity>

            <Text style={{color:'gray'}}>1:45 PM</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.saveBtn}
          onPress={() => CreateTask({navigation,taskName, taskDetails})}
          >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 20,
        flex: 1
    },
    titleLabel:{
      color: "teal",
      fontWeight: 'bold',
      fontSize: 18,
      marginHorizontal: 5,
      marginVertical: 10
    },
    input:{
      borderBottomColor: '#dddedf',
      borderBottomWidth: 1,
      marginVertical: 5,
      paddingVertical: 15,
      paddingHorizontal: 8,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#555858'
    },
    inputDetails:{
      borderBottomColor: '#dddedf',
      borderBottomWidth: 1,
      paddingHorizontal: 8,
      color: '#555858',
    },
    dateTime:{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
    saveBtn:{
      backgroundColor: "teal",
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 10,
      marginVertical: 20,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 3,
    },
    saveText:{
      fontWeight: 'bold',
      color: 'white'
    }

})