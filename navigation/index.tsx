/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Touchable, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Avatar, Icon } from 'react-native-elements';
import MovieDetailScreen from '../screens/MovieDetailScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerTitle: '',
          headerTransparent: true,
          headerBackgroundContainerStyle: {
            opacity: 0.6,
            backgroundColor: 'black',
            shadowOffset: {
              width: -10,
              height: 20
            },
            shadowColor: 'black',
            shadowOpacity: 1,
            shadowRadius: 10
          },
          tabBarStyle: { backgroundColor: 'black', height: 90, borderTopWidth: 0 },
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={24} />,
          headerLeft: () => (
            <Image
              style={{ width: 35, height: 35, marginLeft: 12 }}
              source={{
                uri: 'https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico'
              }} />
          ),
          headerRight: () => (

            <TouchableOpacity style={{ flexDirection: 'row', width: 70, alignItems: 'center', justifyContent: 'space-between', marginRight: 20 }}>
              <Ionicons name='notifications' size={25} color='white' />
              <Avatar size={25} source={{ uri: 'https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYo-77w9gFw_bfvYXpqLi1OrTW3u_MQ3JRXXeXnOqz74mgOhPdElhW0zuVDBSMSx1-5IY97zLiQPDNx2_2iq2CI.png?r=a30' }} />
            </TouchableOpacity>
          ),
        })}
      />
      <BottomTab.Screen
        name="ComingSoon"
        component={MovieDetailScreen}
        options={{
          tabBarStyle: { backgroundColor: 'black', height: 90, borderTopWidth: 0 },
          title: 'Coming Soon',
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={ComingSoonScreen}
        options={{
          tabBarStyle: { backgroundColor: 'black', height: 90, borderTopWidth: 0 },
          title: 'Search',
          tabBarIcon: ({ color }) => <Ionicons name="search" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={ComingSoonScreen}
        options={{
          tabBarStyle: { backgroundColor: 'black', height: 90, borderTopWidth: 0 },
          title: 'Downloads',
          tabBarIcon: ({ color }) => <AntDesign name="download" color={color} size={24} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


