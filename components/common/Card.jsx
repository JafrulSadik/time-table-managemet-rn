import { AntDesign } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TaskContext } from '../../context/TaskProvider';


export default function Card(props) {
    const {item, navigation} = props;
    const [checked, setChecked] = useState(false);
    const {DeleteTask, CompletedTask} = useContext(TaskContext)
    return (
        <View style={styles.cardBody}>
            <View style={styles.date}>
                <Text style={{color:'coral', fontSize: 18}}>12</Text>
                <Text style={{color:'gray', fontSize: 12}}>Jul</Text>
            </View>

            <View style={styles.details}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Details', {item})}
                >
                    <Text style={[styles.task_name, !item.pending && styles.completed]}>{item?.task_name}</Text>
                </TouchableOpacity>
                <View>
                    <Text style={[{fontSize:12, color:'gray'}, !item.pending && styles.completed]}>Today at 1:27 AM - 4:00 PM</Text>
                </View>
            </View>

            <View style={styles.navigation}>
                {item?.pending ?<RadioButton
                    value="first"
                    color= "teal"
                    uncheckedColor= "teal"

                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => CompletedTask(item?.id)}
                /> : ""}
                <View>
                    <TouchableOpacity
                        onPress={() => DeleteTask({task:item})}
                    >
                        <AntDesign name="delete" size={22} color="#686868" />
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardBody: {
        width: '100%',
        flexDirection: 'row' ,
        backgroundColor: '#f8f8f8',
        borderRadius: 15,
        shadowColor: "#000",
        height: 80,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    date:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    details:{
        flex:6,
        gap: 3,
        justifyContent: 'center'
    },
    navigation:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    task_name:{
        fontWeight: 'bold', 
        fontSize:15, 
        color:'teal'
    },
    completed:{
        textDecorationLine: 'line-through'
    }

})