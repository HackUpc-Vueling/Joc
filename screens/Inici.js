import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text, TouchableOpacity, Image } from 'react-native';

export default function Inici(props) {
  const [username, setUsername] = useState('');

  const handleTextChangeUsername = (text) => {
    setUsername(text);
  };

  const handleJocPress = () => {
    navigation.navigate('joc');
  };

  return (
    <View>
        <Image source={require('./images/logo.png')} />
        <View style={{ position: 'absolute', bottom: 50, right: 50 }}>
            <TouchableOpacity
              style={{ backgroundColor: '#FBDB5C', padding: 16, borderRadius: 8 }}
              onPress={() => console.log('Clicked button')}
            >
              <Text style={{ color: '#757574', fontWeight: 'bold' }}> Play</Text>
            </TouchableOpacity>
          </View>
          <View style={{ position: 'absolute', bottom: 70, right: 50 }}>
            <TouchableOpacity
              style={{ backgroundColor: '#FBDB5C', padding: 16, borderRadius: 8 }}
              onPress={() => console.log('Clicked button')}
            >
              <Text style={{ color: '#757574', fontWeight: 'bold' }}> Attack</Text>
            </TouchableOpacity>
          </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  inputUser: {
    height: 40,
    marginTop: '15%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
