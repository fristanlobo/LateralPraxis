import React, { Component } from 'react'
import { View, Text, Button, Image, SectionList, SafeAreaView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../styles/HarvestStylesheet'
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
let fruit=''
export class Harvest extends Component {
   
    
   
    render() {
        fruit = this.props.navigation.getParam('FruitToHarvest')
        return (
         <ScrollView>
           <View style={styles.Maincontainer}>
               <Text style={styles.Header}>Harvest Stage</Text>


                <View style={styles.ImageView}>
                    <Text style={styles.right}>Product Name</Text>
                    <Text style={styles.Text}> :{fruit}</Text>
                </View>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                    }}
                />

                <View style={styles.ImageView}>
                    <Text style={styles.right}>Product Name</Text>
                    <Text style={styles.Text}> :fruit</Text>
                </View>

                <Text style={{fontSize :20, }}>Farmer Details</Text>
                
                <View style={styles.ImageView}>
                    <Image
                        source={require('../Images/1.jpg')}
                    />
                    <View>
                        <Text style={styles.Text}> Ajay Kumar</Text>
                        <Text style={styles.Text}> Uttar Pradesh</Text>
                    </View>  
                </View>

                    <MapView
                        style={styles.mapStyle}
                        showsUserLocation={false}
                        zoomEnabled={true}
                        zoomControlEnabled={true}
                        initialRegion={{
                            latitude: 28.579660,
                            longitude: 77.321110,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>

                        <Marker
                            coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
                            title={"JavaTpoint"}
                            description={"Java Training Institute"}
                        />
                    </MapView>  

           </View>
           </ScrollView>
        )
    }
}

export default Harvest
