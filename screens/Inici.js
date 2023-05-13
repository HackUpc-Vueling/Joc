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
      <Image source={require('../images/logo.png')}  style={styles.perfilimg} />
            <TouchableOpacity
              style={{ backgroundColor: '#FBDB5C', padding: 16, borderRadius: 8 }}
              onPress={() => console.log('Clicked button')}
            >
              <Text style={{ color: '#757574', fontWeight: 'bold' }}> Play</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: '#FBDB5C', padding: 16, borderRadius: 8 }}
              onPress={() => console.log('Clicked button')}
            >
              <Text style={{ color: '#757574', fontWeight: 'bold' }}> Attack</Text>
            </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  perfilimg: {
      width: 58,
      height: 58,
  }
});