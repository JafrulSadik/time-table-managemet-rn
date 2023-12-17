import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../common/Card'

export default function Pending({navigation, tasks}) {

  return (
      <View style={styles.cards}>
        <View>
          <Text style={styles.completedTxt}>Pending</Text>
        </View>
        {
          tasks.map((item, index) =><Card key={index} item={item} navigation={navigation}/>)
        } 
      </View>
  )
}

const styles = StyleSheet.create({
  cards:{
    gap: 10
  },
  completedTxt:{
    color: 'teal',
    fontWeight: '900',
    fontSize: 16,
    borderBottomColor: '#f2dcdc',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginVertical: 10
  }
})