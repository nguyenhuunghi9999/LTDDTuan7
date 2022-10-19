import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet
} from "react-native";
import { useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState('');
  const handleAddTask = ()=>{
    if(task.length === 0){
      alert("Bạn vui lòng nhập công việc");
      return;
    }
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      KeyboardAvoidingView = {10}
      style={styles.addTask}
    >
      <View style={{flexDirection:"row"}}>
      <TextInput style={styles.input} placeholder="Your title"
        onChangeText={(text) =>setTask(text)} value ={task}
      ></TextInput>
      {/* <TextInput style={styles.input} placeholder="Your link"
        onChangeText={(text) =>setTask(text)} value ={task}
      ></TextInput> */}
      </View>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.icon}>
          <Text style={styles.textIcon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default Form;

const styles = StyleSheet.create({
  addTask:{
      bottom:30,
      paddingHorizontal:20,
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  input:{
      height:45,
      width:'85%',
      backgroundColor: 'white',
      borderWidth:1,
      borderColor:'primary',
      borderRadius:10,
      paddingHorizontal:20,
      paddingVertical:10,
      color: "#000000"

  },
  icon:{
      width:45,
      height:45,
      backgroundColor:'#55f253',
      borderRadius:45,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:2,
      borderColor:"white",

  },
  textIcon:{
      fontSize:24,
      color:'white'

  }
});
