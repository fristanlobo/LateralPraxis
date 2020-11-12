import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export default StyleSheet.create(
    {
          
        MainContainer: {
            flex: 1,
            flexDirection: "column",
            marginTop:30,
            padding:10
        },

        ImageView: {

            // flex: 1,
             //flexGrow:true,
             marginTop:10,
             flexDirection: "row",
             marginBottom:10,
             padding:5,
             alignItems:'center',
            // justifyContent:'center'
             //justifyContent:'space-around='
         },

         Header:{
             fontSize:20,
             color:'black'
         },

         right:{
            fontStyle:'normal',
            fontSize:15,
            color:'black'
        },

        Text: {
            //  flex: 1,
             fontSize:15,
             justifyContent:'space-between'
             
         },
    })