import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Create from './components/screens/Create';
import Details from './components/screens/Details';
import Home from './components/screens/Home';
import TaskProvider from './context/TaskProvider';

const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer initialRouteName="Home">
      <TaskProvider>
        <Stack.Navigator>
          <Stack.Screen
            options={({ navigation }) => ({
              title: "Schedule",
              headerStyle:{
                backgroundColor: "teal"
              },
              headerTintColor: '#fff',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Create")
                  }}
                  style={styles.create}
                >
                  <MaterialIcons name="create" size={24} color="white" />
                  <Text style={{color: 'white'}}>Add</Text> 
                </TouchableOpacity>
              ),
            })}

            name="Home" 
            component={Home} />
            
          <Stack.Screen 
            name="Create" 
            component={Create} 
            options={{
              title: "Create",
              headerStyle:{
                backgroundColor: "teal"
              },
              headerTintColor: '#fff',
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen 
            name="Details" 
            component={Details} 
            options={{
              title: "Details",
              headerStyle:{
                backgroundColor: "teal"
              },
              headerTintColor: '#fff',
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </TaskProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  create:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
