import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';

const rankingScreen =() => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Javi', km: 3000 },
        { id: 2, name: 'Tania', km: 8000 },
        { id: 3, name: 'Eric', km: 2500 },
        { id: 4, name: 'Nuria', km: 7000 }
      ]);

      return(
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 16 }}>
            User Ranking
            </Text>
            <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Text style={{ fontSize: 18, marginHorizontal: 16 }}>
                  {item.name} {item.km}
                </Text>
            )}
          />
          <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
            <TouchableOpacity
              style={{ backgroundColor: '#FBDB5C', padding: 16, borderRadius: 8 }}
              onPress={() => console.log('Clicked button')}
            >
              <Text style={{ color: '#757574', fontWeight: 'bold' }}> Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

export default Ranking;