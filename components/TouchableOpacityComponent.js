import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const TouchableOpacityComponent = (props) => {
    return (
        <View>
            <TouchableOpacity 
                // {...props}
                style= {styles.cssTouchableOpacity}
                onPress = {props.handleOnPress}
            >  
            <Text style={styles.cssText}>{props.caption}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
         cssTouchableOpacity : {
            borderRadius : 40/2,
            height : 50,
            width : 110 ,
            alignItems: 'center',
            justifyContent : 'center',
            //color :'white',
            backgroundColor: '#34ace0',
            marginRight : 4,
            marginTop : 10,
            marginBottom: 10,             
         },
        cssText : {
            fontWeight :'bold',
            color :'white',
            fontSize: 15,
        }               
    }
)


export default TouchableOpacityComponent
