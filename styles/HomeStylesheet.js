import { StyleSheet } from 'react-native'

export default StyleSheet.create(
    {
        Header:{
            fontStyle:'normal',
            fontSize:20,
            color:'black'
        },
        ImageView: {

           // flex: 1,
            //flexGrow:true,
            flexDirection: "row",
            marginBottom:10
        },
        image: {
          flex:1,
          height:100,
           width:100
        },

        Text: {
            flex: 1
        },
        MainContainer: {
            flex: 1,
            flexDirection: "column",
            marginTop:10,
            padding:10
        }
    })