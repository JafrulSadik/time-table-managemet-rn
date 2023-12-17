import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TaskContext } from '../../context/TaskProvider';
import Completed from './Completed';
import Pending from './Pending';

export default function Home({navigation}) {

  const {tasks} = useContext(TaskContext)

  const pendingTasks = tasks?.filter(task => task?.pending === 1)
  const completedTasks = tasks?.filter(task => task?.pending === 0)

  console.log(pendingTasks.length);
  
  return (
    <View style={styles.container}>
      <ScrollView 
      contentContainerStyle={styles.contentContainer}>
        {pendingTasks?.length ? <Pending navigation={navigation} tasks={pendingTasks}/> : ""}
        {completedTasks?.length ? <Completed navigation={navigation} tasks={completedTasks}/> : ""}
      </ScrollView>   
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 10,
        position: 'relative'
    },
    body:{
      marginVertical: 10,
      gap: 10,
    },
    contentContainer:{
      paddingHorizontal: 20,
      paddingVertical: 10,
      rowGap: 10
    }
})