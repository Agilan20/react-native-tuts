
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState("Agilan");
  const [age, setAge] = useState(19);
  const [showDesp, setShowDesp] = useState(false)

  const showDescription = () => {
    setShowDesp(true)
  }
  return (
    <View style={styles.container}>
      {
        showDesp &&
        <View style={styles.header}>
          <Text>I am {name} and I am {age} years old.</Text>
        </View>
      }
      <TextInput
        style={styles.input}
        placeholder='Name'
        multiline
        onChangeText={(val) => {
          if (showDesp) setShowDesp(false)
          setName(val)
        }
        }
      />
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='Age'
        onChangeText={
          (val) => {
            if (showDesp) setShowDesp(false)
            setAge(val)
          }
        }
      />
      <View style={styles.body}>
        {
          showDesp ?
            <Button
              title="Submit"
              disabled
            />
            :
            <Button
              title="Submit"
              onPress={showDescription}
            />
        }
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
  input: {
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderBottomColor: "black",
    width: 200,
    height: 40,
  },


});
