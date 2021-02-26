import React from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from "react-native";
import shareImage from './../sample/images/shareImage.png'
import commentImage from './../sample/images/commentImage.png'

const link = 'https://image.tmdb.org/t/p/w500'
const ListMovieComponent = (props) => {
     
    
    return (
        <View style={styles.itemContainer} >
                <TouchableOpacity 
                    
                    style={styles.card} 
                    onPress = { () =>{
                                props.go('Details',{movie :props.movie}) 
                               // props.go('ListDetails',{id:props.movie.id})
                                }
                        }>
                    <Image
                        source={shareImage}
                        style={styles.itemImage}
                    /> 
                    <Text style={styles.itemTitle}>Recipient's Name</Text>
                    {/* <Text style={styles.itemYear}>{props.movie.release_date}</Text> */}
                    <View style= {styles.line}/>
                    <View style={styles.allignFooterImage}>
                        {/* <Image source={commentImage} style={styles.commentImage} /> */}
                        <Text style={styles.sumOfComment}>Description</Text>
                        {/* <Image source={shareImage} style={styles.shareImage} /> */}
                        
                    </View>
                </TouchableOpacity>
                
            
        </View>
    )
}


const styles = StyleSheet.create({
    allignFooterImage : {
        flexDirection :'row'
    },
    commentImage :{
        marginRight : 10,
        top : 324,
        left : 10,
        width:40,
        height : 40,
    },
    sumOfComment : {
        top : 324,
        left : 10,
        marginTop :5,
        marginRight : 65,
        height :40,
        fontSize : 20,
        fontWeight :'bold',
    },
    shareImage :{
        top : 324,
        left : 0,
        width:40,
        height : 40,
    },
    itemContainer: {
        margin: 5,
        //width: DEVICE.width * 0.8,
        justifyContent: 'center',
    },
    card : {
        position : 'relative',
        backgroundColor:'#DDDDDD',
        height:485,
        width: 200,
        borderRadius : 15,
        marginBottom : 15,
    },
    itemImage: {
        position :'absolute',
        top : 10,
        left :10,
        justifyContent :'center',
        height: 290,
        width: 180,
    },
    itemTitle: {
        //position :'absolute',
        top : 304,
        left : 0,
        height : 24,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    itemYear: {
        //position :'absolute',
        top : 280,
        left : 0,
        height : 24,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    
    line : {
        //position :'absolute',
         top : 314,
         left :10,
         width : 180,
         height:0 ,
         borderBottomWidth :1,

    }
    
})

export default ListMovieComponent
