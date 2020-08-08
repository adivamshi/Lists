import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.header}>
        <Text style={styles.title}>Shopping List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'teal',
  },
  title: {
    height: 60,
    paddingTop: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
