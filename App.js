
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState("Agilan");
  const [showDesp, setShowDesp] = useState(false)

  const changeDescription = () => {
    setShowDesp(!showDesp)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hello {name}</Text>
      </View>
      {
        showDesp &&
        <View style={styles.header}>
          <Text>Enthusiastic student fro IST dept</Text>
        </View>
      }
      <View style={styles.body}>
        <Button title={!showDesp ? "Show Description" : "Hide Description"} onPress={changeDescription} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    marginTop: 20,
  },


});
