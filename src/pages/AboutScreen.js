import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    // navigation.navigate('Home');
    // ou
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Telinha de SOBRE</Text>
      <Button title="Voltar" onPress={handleBackButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutScreen;
