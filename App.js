
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [name, setName] = useState([
    { person: "Agilan", key: 1 },
    { person: "Agilan", key: 2 },
    { person: "Agilan", key: 3 },
    { person: "Agilan", key: 4 },
    { person: "Agilan", key: 5 },
    { person: "Agilan", key: 6 },
    { person: "Agilan", key: 7 },
    { person: "Agilan", key: 8 },
  ]);

  const showDescription = () => {
    setShowDesp(true)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>List of names</Text>
        </View>
        <View style={styles.body}>
          {
            name.map((item) => {
              return (
                <View style={styles.nameBox} key={item.key}>
                  <Text style={styles.title}>{item.person}</Text>
                </View>
              )
            }
            )
          }
        </View>
      </View>
    </ScrollView>

//  <FlatList
// data={people}
// renderItem=[(1) item }) => (
//    <Text style=(styles. item}>{item. name)</Text> 
//   )
//   />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:10,
  },
  body: {
    padding: 20,
  },
  nameBox: {
    padding: 30,
    backgroundColor: "pink",
    marginTop: 24,

  }

});
