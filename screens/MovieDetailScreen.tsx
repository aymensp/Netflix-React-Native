import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import movie from '../assets/data/movie'
import EpisodItem from '../components/EpisodItem'

const MovieDetailScreen = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={{
                    uri: movie.seasons.items[0].episodes.items[0].poster
                }}
            />
            <View style={styles.movieDetail}>
                <Text style={styles.title}>Suits</Text>
                <View style={styles.subtitle}>
                    <Text style={{ color: '#05c405', fontSize: 15, fontWeight: '500' }}>98% match </Text>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}> {movie.year} </Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.ageText}>16+</Text>
                    </View>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>{movie.numberOfSeasons} seasons</Text>
                    <Text style={styles.HdText}>HD</Text>
                </View>
                <Button
                    title="Play"
                    icon={<Ionicons name='play' size={15} color='black' />}
                    titleStyle={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginLeft: 8 }}
                    buttonStyle={styles.button}
                />
                <Button
                    title="Download"
                    icon={<AntDesign name='download' size={15} color='white' />}
                    titleStyle={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft: 8 }}
                    buttonStyle={styles.buttonDownload}
                />
                <Text style={{ color: 'white', fontSize: 15, fontWeight: '500', marginBottom: 12 }}>{movie.plot}</Text>
                <Text style={{ color: 'gray', fontSize: 12, fontWeight: '500', marginBottom: 3 }}>Cast: {movie.cast}</Text>
                <Text style={{ color: 'gray', fontSize: 12, fontWeight: '500' }}>Creator: {movie.creator}</Text>
                <View style={styles.butons}>
                    <Button icon={<Ionicons name='add' size={28} color='white' />}
                        title='My list'
                        iconPosition='top'
                        titleStyle={{ fontWeight: "500", fontSize: 11, color: 'gray' }}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                    />
                    <Button icon={<Feather name='thumbs-up' size={25} color='white' />}
                        title='Like'
                        iconPosition='top'
                        titleStyle={{ fontWeight: "500", fontSize: 11, color: 'gray', marginTop: 6 }}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                    />
                    <Button icon={<FontAwesome name="send-o" size={22} color='white' />}
                        title='Share'
                        iconPosition='top'
                        titleStyle={{ fontWeight: "500", fontSize: 11, color: 'gray', marginTop: 9 }}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                    />
                </View>
                <View style={{ width: "15%", backgroundColor: 'red', height: 5 }} />
                <EpisodItem/>
            </View>
            
           
        </View>
    )
}

export default MovieDetailScreen

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 16 / 9,
        resizeMode: "cover"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginBottom: 10

    },
    movieDetail: {
        padding: 10,
        marginBottom: 2
    },
    subtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    ageContainer: {
        backgroundColor: '#474e47',
        paddingHorizontal: 3,
        borderRadius: 2,
        height: 14,
        width: 20,
        marginRight: 3,
        justifyContent: 'center'
    },
    ageText: {
        color: 'white',
        fontSize: 9,
        fontWeight: '500'
    },
    HdText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#bebdbd',
        borderWidth: 1.4,
        borderColor: '#474e47',
        height: 15,
        paddingTop: 1,
        marginTop: 1,
        marginLeft: 5,
        width: 20,
        textAlign: 'center',
        borderRadius: 2,
    },
    button: {
        backgroundColor: 'white',
        height: 35,
        marginBottom: 8,
        width: "100%",
        alignSelf: 'center'
    },
    buttonDownload: {
        backgroundColor: '#2B2B2B',
        height: 35,
        width: "100%",
        alignSelf: 'center',
        marginBottom: 15,
    },
    butons: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: "70%",
        alignItems: 'center',
        marginBottom: 5
    }
})
