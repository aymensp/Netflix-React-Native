import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import categories from '../assets/data/categories'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const PopoularOnNetflix = categories.items[0]
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View >
          <ImageBackground
          resizeMode='cover'
          imageStyle={{width:"100%" , height:'100%' , overflow:'hidden'}} 
          source={{
            uri: 'https://images.ctfassets.net/4cd45et68cgf/RcGuekGhRkHuzYRKu9jTr/b306b8c0e0cddbac04bce6ddb41f2c71/EN-US_SQdGame_Teaser_Coffin_Vertical_27x40_RGB_PRE.jpg'
          }}
            style={styles.backroundImage}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'transparent' , marginBottom:10}}>
              <Button icon={<Ionicons name='add' size={25} color='white' />}
              title='Add'
              iconPosition='top'
              titleStyle={{fontWeight:"600" ,fontSize:15 , marginTop:-3}}
              buttonStyle={{backgroundColor:'transparent'}}
              />

              <Button
                title="Lecture"
                icon={<Ionicons name='play' size={15} color='black' />}
                titleStyle={{ color: 'black', fontSize: 14, fontWeight: 'bold', marginLeft: 4 }}
                buttonStyle={styles.button}
              />
              <Button icon={<Ionicons name='information-circle-outline' size={25} color='white' />}
              title='Info'
              iconPosition='top'
              titleStyle={{fontWeight:"600" ,fontSize:15 , marginTop:-3}}
              buttonStyle={{backgroundColor:'transparent'}}
              />
            </View>
          </ImageBackground>


        </View>
        {categories.items.map((itemm, i) => (
          < >

            <Text
              key={i}
              style={styles.title}>{itemm.title}</Text>
            <FlatList
              key={itemm.id}
              showsHorizontalScrollIndicator={false}
              style={styles.list}
              horizontal
              data={itemm.movies}
              renderItem={({ item }) => (
                <Image
                  key={item.id}
                  style={styles.image}
                  source={{
                    uri: item.poster
                  }}
                />
              )}
            >
            </FlatList>
          </>
        ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 110,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 6,
    margin: 3,

  },
  list: {
    marginBottom: 10
  },
  title: {
    fontWeight: "800",
    fontSize: 17,
    marginLeft: 10,
    lineHeight: 25

  },
  backroundImage: {
    height: 530,
    justifyContent: "flex-end"
  },
  button: {
    backgroundColor: 'white',
    height: 30,
    width: 90
  }

});
