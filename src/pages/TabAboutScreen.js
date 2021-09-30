import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TabAboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de SOBRE do TAB</Text>
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

export default TabAboutScreen;
