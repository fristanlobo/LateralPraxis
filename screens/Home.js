import React, { Component } from 'react'
import { View, Text, Button, Image, SectionList, SafeAreaView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../styles/HomeStylesheet'
export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Apple:'Apple',
      Orange:'Orange',
      Watermelon:'Watermelon'
    }
    
  }

  Navgatetoapple=(data)=>{
    this.props.navigation.navigate('Apple',{
      Fruitname:data
    })
  }

  render() {
    return (
      
        <View style={styles.MainContainer}>

          <TouchableOpacity onPress={()=>this.Navgatetoapple("Apple")}>
            <View>
              <Text
               style={styles.Header}>Apple</Text>
            </View>
            <View style={styles.ImageView}>
              <Image
                styles={styles.image}
                source={require('../Images/1.jpg')}
              />
              <Text style={styles.Text}>The apple is a pome (fleshy) fruit, in which the ripened ovary and surrounding tissue both become fleshy and edible.
              When harvested, apples are usually roundish, 5–10 cm (2–4 inches) in diameter, and some shade of red, green, or yellow in colour; they vary in size, 
              shape, and acidity depending on the variety.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.Navgatetoapple("Orange")}>
          <View>
              <Text 
              style={styles.Header}>Orange</Text>
            </View>
            <View style={styles.ImageView}>
              <Image
                styles={styles.image}
                source={require('../Images/2.jpg')}
              />
              <Text style={styles.Text}>Oranges are round orange-coloured fruit that grow on a tree which can reach 10 metres (33 ft) high.
              Orange trees have dark green shiny leaves and small white flowers with five petals.
              The flowers smell very sweet which attracts many bees.
                         Orange skin is often called "orange peel".</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.Navgatetoapple("Watermelon")}>
          <View>
              <Text 
              style={styles.Header}>Watermelon</Text>
            </View>
            <View style={styles.ImageView}>
              <Image
                styles={styles.image}
                source={require('../Images/3.jpg')}
              />
              <Text style={styles.Text}>A large oblong or roundish fruit with a hard green or white rind often striped or variegated, a sweet watery pink, yellowish, or red pulp, and usually many seeds.
                      A widely cultivated African vine (Citrullus lanatus synonym C. vulgaris) of the gourd family that bears watermelons.</Text>
            </View>
          </TouchableOpacity>
        </View>
      
    )
  }
}

export default Home

/** */