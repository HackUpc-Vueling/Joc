import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';

function Usuaris() {
    const [users, setUsers] = useState([
      { id: 1, name: 'Javi', km: 3000 },
      { id: 2, name: 'Tania', km: 8000 },
      { id: 3, name: 'Eric', km: 2500 },
      { id: 4, name: 'Nuria', km: 7000 }
    ]);

    const handleUserPress = (user) => {
        console.log('El usuario', user.name, 'fue clicado');
    };


    return (
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>
            Available target list
          </Text>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleUserPress(item)}>
                <Text style={{ fontSize: 18, marginHorizontal: 16 }}>
                  {item.name} {item.km}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={{ position: 'absolute', bottom: 70, right: 70 }}>
            <TouchableOpacity
              style={{ backgroundColor: '#FBDB5C', padding: 16, borderRadius: 8 }}
              onPress={() => console.log('Botón clicado')}
            >
              <Text style={{ color: '#757574', fontWeight: 'bold' }}>Attack</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    
export default Usuaris;