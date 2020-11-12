import { StyleSheet } from 'react-native'

export default StyleSheet.create(
    {
      
        Header:{
            fontStyle:'normal',
            fontSize:20,
            color:'black'
        },
        Headersub:{
            fontStyle:'normal',
            fontSize:15,
            color:'black'
        },
        ImageView: {

        //    flex: 2,
        //     flexGrow:2,
            flexDirection: "row",
            marginBottom:10,
            justifyContent:'space-between'
            
        },

        ImageViewsub:{
            flexDirection: "row",
            marginLeft:15,
            marginBottom:10,
            justifyContent:'space-between'
        },
        // image: {
        //   flex:1,
        //   height:100,
        //    width:100,
        //    justifyContent:'space-between'
        // },

        Text: {
           //  flex: 1,
            fontSize:20,
            justifyContent:'space-between'
            
        },
        Textsub: {
            //  flex: 1,
             fontSize:15,
             justifyContent:'space-between'
             
         },
        MainContainer: {
            flex: 1,
            flexDirection: "column",
            marginTop:10,
            padding:10
        }
    })