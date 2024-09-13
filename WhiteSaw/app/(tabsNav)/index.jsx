import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Inicio</Text>
      <View style={StyleSheet.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
