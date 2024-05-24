import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://wireworldmpa.azurewebsites.net/users/test') 
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{data ? JSON.stringify(data) : 'Loading...'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
