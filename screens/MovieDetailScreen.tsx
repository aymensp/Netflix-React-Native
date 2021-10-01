import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import movie from '../assets/data/movie'

const MovieDetailScreen = () => {
    return (
        <View>
            <Image 
            style={styles.image}
            source={{
                uri: movie.seasons.items[0].episodes.items[0].poster 
            }}
            />
        </View>
    )
}

export default MovieDetailScreen

const styles = StyleSheet.create({
    image:{
        width:"100%",
    }
})
