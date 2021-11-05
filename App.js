import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'
import Weather from './Weather'

const API_KEY = '897a4db4b621bc3bd90d1de8f13d290a'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [temp, setTemp] = useState()
  const [condition, setCondition] = useState()
  //   [
  //   'Thunderstorm',
  //   'Drizzle',
  //   'Rain',
  //   'Snow',
  //   'Atmosphere',
  //   'Clear',
  //   'Clouds',
  // ]

  const getWeather = async (latitude, longitude) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      )
      setTemp(Math.round(data.main.temp))
      setCondition(data.weather[0].main)
      setIsLoading(false)
    } catch (error) {
      Alert.alert('We can not get the weather', 'Try again!')
    }
  }

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert('We can not use your position', 'it is very bad!')
    }
  }
  useEffect(() => {
    getLocation()
  }, [])

  const loading = (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  )

  return isLoading ? loading : <Weather temp={temp} condition={condition} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
