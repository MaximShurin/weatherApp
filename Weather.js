import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#141E30', '#243B55'],
    title: 'Stay at home!',
    subtitle: 'Do you see what is happening outside?',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#3a7bd5', '#3a6073'],
    title: 'Take the umbrella!',
    subtitle: 'Perhaps the rain will soon intensify ',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#000046', '#1CB5E0'],
    title: 'It is raining outside',
    subtitle: 'There is a possibility to see a rainbow!',
  },
  Snow: {
    iconName: 'snowflake',
    gradient: ['#83a4d4', '#b6fbff'],
    title: 'It is snowing outside!',
    subtitle: 'Dress warmly, make snowmen',
  },
  Dust: {
    iconName: 'weather-windy-variant',
    gradient: ['#B79891', '#94716B'],
    title: 'Dusty',
    subtitle: 'You better close the windows',
  },
  Smoke: {
    iconName: 'weather-windy',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'There is smoke outside',
    subtitle: 'I do not advise you to go out unnecessarily',
  },
  Haze: {
    iconName: 'weather-hazy',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'It is snowing outside!',
    subtitle: 'Dress warmly, make snowmen',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#606c88', '#3f4c6b'],
    title: 'Poor visibility',
    subtitle: 'Keep your distance',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#56CCF2', '#2F80ED'],
    title: 'It is a nice weather',
    subtitle: 'Everyone go for a walk',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#757F9A', '#D7DDE8'],
    title: 'Cloudly',
    subtitle: 'There is no sun in the sky',
  },
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.textCond}>{condition}</Text>
        <Text style={styles.temp}>{temp} °C</Text>
      </View>
      <View style={styles.halfcontainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
  },
  textCond: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 40,
    textAlign: 'left',
  },
  textContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})
