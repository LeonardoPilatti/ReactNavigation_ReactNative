import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSobreClick = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela HOME</Text>
      <Button title="Ir para a tela SOBRE" onPress={handleSobreClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    marginBottom: 15,
    fontSize: 18,
  },
});

export default HomeScreen;
