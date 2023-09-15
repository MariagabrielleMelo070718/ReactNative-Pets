import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={require('../assets/aves.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  
  logo: {
    height: 210,
    width: 300,
  }
});
