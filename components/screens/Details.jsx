import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaskContext } from '../../context/TaskProvider';

export default function Details({navigation,route}) {

  const task = route.params.item;
  const {DeleteTask} = useContext(TaskContext)

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  
  return (
    <PaperProvider>
      <SafeAreaView>
        <Portal>
          <View style={styles.container}>

            <View style={styles.detailsBody}>
              <View style={styles.titleDiv}>
                <Text style={styles.taskTitle}>{task?.task_name}</Text>
              </View>
              <View style={styles.hr}></View>
              <View style={styles.detailsDiv}>
                <Text style={styles.dateTime}>{task.date + ", " + task.time}</Text>
                <Text style={styles.detailsTitle}>{task?.task_details}</Text>
              </View>
            </View>

          </View>

        </Portal>
    </SafeAreaView>

    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  detailsBody: {
    padding: 10,
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  titleDiv:{
    marginHorizontal: 10,
    marginTop: 10
  },
  taskTitle:{
    fontSize: 32,
    fontWeight: 'bold',
  },
  hr:{
    backgroundColor: '#C9C9C963',
    height: 1,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10
  },
  hr1:{
    backgroundColor: '#C9C9C963',
    height: 1,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10
  },
  detailsDiv:{
    marginHorizontal: 10,
    gap: 10
  },
  detailsTitle:{
    fontSize: 24
  },
  dateTime:{
    color: 'gray'
  },
  deleteBtn:{
    backgroundColor: "#ED4E54FF",
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginVertical: 20,
    
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  deleteText:{
    fontWeight: 'bold',
    color: 'white'
  },

  modalStyle:{
    backgroundColor: 'white',
    width: "80%",
    marginBottom: '60%' ,
    alignSelf: 'center',
    borderRadius: 10,
  },
  modalTop:{
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  modalBottom:{
    flexDirection: 'row'
  },
  cancelAltBtn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'teal',
    width: '100%',
    borderBottomLeftRadius: 10
  },
  deleteAltBtn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    // backgroundColor: '#ED4E54FF',
    width: '100%',
    borderBottomRightRadius: 10
  }
})