import { Text, SafeAreaView, StyleSheet, View, ScrollView,} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Aves from './components/aves';
import Gatos from './components/gatos';
import Roedores from './components/roedores';
import Botaoo from './components/botaoo';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
    
      <Card style={styles.card}>
        <Text style={styles.paragraph}> Pets Facéis  </Text>
        <Text style={styles.paragraphh}> para cuidar  </Text>
        <View style={styles.cardizinho}>
          <Aves />
          <Gatos />
          <Roedores />
          <Botaoo />
          <Text style={styles.paragraphhh}> Maria Gabrielle (3C)  </Text>
        </View>
      </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    margin: -10,
  },
  paragraph: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f1f1f1'
  },

  paragraphh: {
    marginTop: 5,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CC9F0',
  },

  card: {
    backgroundColor: '#4361ee',
    textAlign: 'center',
    height: 1100,
  },

  cardizinho: {
    backgroundColor: '#4361ee',
    height: '80%',
    paddingTop: 20,
    borderRadius: 25,
  },

  paragraphhh: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F1F1F1'
  },
});
