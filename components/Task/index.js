import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import styles from "./style";

const Task = (props) => {
  const { number } = props;
  const numberText = number < 10 ? `0${number}` : number;
  return (
    // <TouchableOpacity onPress={props.onDeleteTask}>
    //   <View style={styles.item}>
    //     <View style={[styles.square, styles.even]}>
    //       <Text style={styles.number}>{numberText}</Text>
    //     </View>
    //     <Text style={styles.content}>{props.title}</Text>
    //     <Text style={styles.content}>{props.url}</Text>
    //   </View>
    // </TouchableOpacity>

    <View style={styles.item}>
      <View style={[styles.square, styles.even]}>
        <Text style={styles.number}>{numberText}</Text>
      </View>
      <View >
      <Text style ={{fontSize:15, fontWeight:"bold"}} >{props.title}</Text>
      <Text style ={{fontSize:15, fontWeight:"bold"}} >{props.link}</Text>
      </View>
      <TouchableOpacity style={{
                        backgroundColor: "#55f253",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                      }}
                      // onPress={props.onUpdateTask}
                    >
                      <Text style={{ color: "black" }}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
                        backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                      }}
                      onPress={props.onDeleteTask}
                    >
                      <Text style={{ color: "white" }}>X</Text>
      </TouchableOpacity>

    </View>

  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  even: {
    backgroundColor: "#55f253",
  },
  number: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  content: {
    width: "50%",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Task;
