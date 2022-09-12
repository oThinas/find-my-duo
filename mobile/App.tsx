import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello, World!
      </Text>
      <Button title='Enviar 1' />
      <Button title='Enviar 2' />
      <Button title='Enviar 3' />
      <StatusBar style="light" />
    </View>
  );
}

interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }
});
