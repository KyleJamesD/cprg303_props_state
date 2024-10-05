/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { useState } from 'react';





function App() {

  const [tasks, settasks] = useState(['Do laundry','Go to gym','Walk dog']);


  return (
          <ScrollView>
            <ToDoList tasks={tasks}></ToDoList>
            <ToDoForm></ToDoForm> 
          </ScrollView>
  );
}


export default App;
