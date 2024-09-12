/*import { StyleSheet } from 'react-native';
import { Button, ButtonGroup } from '@mui/material';
import { Text, View } from '@/components/Themed';
import MenuButton from '@/components/MenuButton';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>hola</Text>
      <View>
      <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      </ButtonGroup>
      </View>
    </View>
  );
  return (
    <MenuButton/>
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
*/

import { StyleSheet } from 'react-native';
import MenuButton from '@/components/MenuButton';

export default function TabOneScreen() {
  return (
    <MenuButton/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
