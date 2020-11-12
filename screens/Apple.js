import React, { Component } from 'react'
import { View, Text, Button, Image, SectionList, SafeAreaView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../styles/AppleStylesheet'
let fruit=''
export class Apple extends Component {

    harvestPage=()=>{
        console.warn(fruit)
        this.props.navigation.navigate('Harvest',{
            FruitToHarvest:fruit
          })
    }

    CollectionCenter=()=>{
        this.props.navigation.navigate('Collection',{
           // Fruitname:data
          })
    }
    render() {
        fruit = this.props.navigation.getParam('Fruitname')
        return (
            <ScrollView>
                <View style={styles.MainContainer}>
                    <View>
                        <Text
                            style={styles.Header}>Nutrition Chart for {fruit}
                        </Text>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />

                    <TouchableOpacity>

                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>Calories</Text>
                            <Text style={styles.Text}>86</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />

                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>Total Fat 0.3g</Text>
                            <Text style={styles.Text}>0%</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.ImageViewsub}>
                            <Text style={styles.Headersub}>Saturated Fat 0.1g</Text>
                            <Text style={styles.Textsub}>0%</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>Sodium 1mg</Text>
                            <Text style={styles.Text}>0%</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>Total Carbohydrate 23g</Text>
                            <Text style={styles.Text}>8%</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                    <TouchableOpacity>
                        <View style={styles.ImageViewsub}>
                            <Text style={styles.Headersub}>Dietary Fiber 2.6g</Text>
                            <Text style={styles.Textsub}>9%</Text>
                        </View>
                    </TouchableOpacity><TouchableOpacity>
                        <View style={styles.ImageViewsub}>
                            <Text style={styles.Headersub}>Sugar 12g</Text>
                            <Text style={styles.Textsub}></Text>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>VitaminD 0.0mcg</Text>
                            <Text style={styles.Text}>0</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>Calcium 5.00mg</Text>
                            <Text style={styles.Text}>86</Text>
                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>Iron 0.26mg</Text>
                            <Text style={styles.Text}>1%</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ImageView}>
                            <Text style={styles.Header}>Potassium 356mg</Text>
                            <Text style={styles.Text}>8%</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginBottom:10
                        }}
                    />

                    <View style={styles.ImageView}>
                       <Button
                            title="Harvest Time"
                            onPress={()=>this.harvestPage()}
                        />
                       <Button
                            title="Collection Center"
                            onPress={()=>this.CollectionCenter()}
                       />
                     </View>

                </View>
            </ScrollView>
        )
    }
}

export default Apple
