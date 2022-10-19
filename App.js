import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Task from "./components/Task";
import Form from "./components/Form";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const handleAddTask = (task) => {
    fetch("https://633fa94dd1fcddf69ca6fc28.mockapi.io/api/todoapp/books", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: task }),
    });
  };

  const getListTodos = () => {
    const apiUrl = "https://633fa94dd1fcddf69ca6fc28.mockapi.io/api/todoapp/books";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((resJson) => {
        setTaskList(resJson);
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
      .finally(() => setisLoading(false));
  };
  useEffect(() => {
    getListTodos();
    return () => {};
  }, []);

  const handleDeleteTask = (index) => {
    Alert.alert("Thông báo !", "Bạn có chắc chắn muốn xóa?", [
      {
        text: "OK",
        onPress: () => {
          fetch(
            "https://633fa94dd1fcddf69ca6fc28.mockapi.io/api/todoapp/books/" + index,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
        },
      },
      { text: "Cancel", onPress: () => {} },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List api Mockapi</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={taskList}
            renderItem={({ item }) => (
              <Task
                key={taskList.indexOf(item)}
                title={item.item}
                link = {item.link}
                number={taskList.indexOf(item) + 1}
                // onUpdateTask={() => handleUpdateTask(item.id)}
                onDeleteTask={() => handleDeleteTask(item.id)}
              />
            )}
          />
        )}
      </View>
      <Form onAddTask={handleAddTask} />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#eff7f8",
    },
    body: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 24,
      color: "#21a3d0",
      fontWeight: "bold",
    },
    items: {
      marginTop: 25,
    }
})


