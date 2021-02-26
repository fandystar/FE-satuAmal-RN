import React from 'react'
import { Text,Image,View, TextInput ,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TextInputComponent = (props) => {
    
    let wi = 375
    let br = 0
    let bb = 1
    if (props.width == true) {wi ='100%' }
    if (props.borderRadius == true ) { br = 15 } 
    if (props.borderBottomWidth==false ) {bb = 0 }
    
    return (
        <View > 
            <TextInput 
                {...props}
                style = {[styles.textInput,
                    {borderRadius:br,borderBottomWidth:bb,
                    width:wi}]}
                placeholder = {props.ph} 
                onChangeText ={props.handleOnChangeText} 
                value = {props.input} 
            
            />
        </View>
    )
}
const styles = StyleSheet.create (
    {
        textInput : {
           
            fontSize:18,
            color : 'black',
            //width : 375,
            // borderBottomWidth :1,
            backgroundColor : 'white',
        }
    }
)
export default TextInputComponent