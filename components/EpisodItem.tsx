import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

interface EpisodeProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration:string,
        plot:string,
        video:string
    }
}

const EpisodItem = (props: EpisodeProps) => {
    const {episode} =props;
    return (
        <View style={{marginTop:20}}>
            <View style={styles.EpisodContainer}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Image
                        style={styles.EpisodeImage}
                        source={{
                            uri: episode.poster
                        }}
                    />
                    <View>
                        <Text style={styles.EpisodTitle}>{episode.title}</Text>
                        <Text style={styles.EpisodTime}>1h 21m</Text>

                    </View>
                </View>
                <AntDesign name='download' size={24} color='white' />
            </View>
            <Text style={styles.EpisodPlot}>
                An open-and-shut case becomes anything but when Harvey is accused of an inappropriate dalliance with a married woman.
            </Text>
        </View>
    )
}

export default EpisodItem

const styles = StyleSheet.create({
    EpisodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    EpisodeImage: {
        height: 75,
        width: 130,
        borderRadius: 5,
        marginRight: 10
    },
    EpisodTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14
    },
    EpisodTime: {
        color: 'gray',
        fontWeight: '400',
        fontSize: 11
    },
    EpisodPlot: {
        fontSize: 15,
        color: '#bdc0bd',
        fontWeight: '400'
    }
})
