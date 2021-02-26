//import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import React, { useState } from 'react';
import { Image,View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { onChange } from 'react-native-reanimated';
import TextInputComponent from '../components/TextInputComponent';
import TouchableOpacityComponent from '../components/TouchableOpacityComponent';
import fb from './../sample/images/fb.png'
import gmail from './../sample/images/gmail.png'
import link from './../sample/images/link.png'
import movie from './../sample/images/movie.png'


const LoginScreen = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    
    const OnLogin =async() =>{
          
       const r = await Axios.post('https://satuamal.herokuapp.com/api/user/login',
                   {
                       email ,
                       password
                   }  )
      
                //AsyncStorage.setItem('userToken',r.data.access_token)
             
                console.log(r)
                props.navigation.navigate('Tabs')    
     }
        
       
        return (
        <View style={styles.container}>
            
            <View style ={{ alignItems :'center',marginBottom:20 }}>
                <Image 
                    source={movie}
                    style={{height:200,width:200,marginBottom:10}}     
                />
                {/* <Text style={styles.titleText}>Movies Review</Text> */}
            </View>
           
            <View style={styles.ContainerTextInput}>
                    <View>
                        <TextInputComponent
                            ph='Email'
                            input = {email}
                            handleOnChangeText = { (input) =>setEmail(input)}
                        />
                    </View>
                    <View>
                        <TextInputComponent
                           ph='Password'
                           input = {password}
                           handleOnChangeText = { (input) =>setPassword(input)}
                        />
                    </View>
                            {/* secureTextEntry={false} */}
                </View>
                <Text 
                    onPress={()=> props.navigation.navigate('Testing')}
                    style={styles.textForgot}>Forgot Your Password ?                                 
                </Text>
                <View style ={{ alignItems :'center' }}>
                    <TouchableOpacityComponent 
                        caption={'SIGN IN'}
                        handleOnPress ={ OnLogin }
                    />
                </View>
               
                <View  style={styles.textSignUp}>    
                    <Text>Don’t have an account ? </Text>
                    <Text
                        style={{color:'blue',marginLeft:3}} 
                        onPress={()=> props.navigation.navigate('Register')} > 
                        Sign Up  
                    </Text>
                </View>
                {/* <View style={styles.arrangeLine}>
                    <View style={styles.line}/>
                    <Text>  or  </Text>
                    <View style={styles.line}/>
                 </View> */}
                {/* <View style={styles.arrangeIcon}>
                    <View>
                        <Image source = {fb} style={{width:50,height:50}} />
                    </View>
                    <View>
                        <Image source = {gmail} style={{width:50,height:50}} />       
                    </View>      
                    <View>
                        <Image source = {link} style={{width:50,height:50}} />   
                    </View>
                    
                </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    // arrangeIcon :{
    //     marginTop :20,
    //     flexDirection:'row',
    //     justifyContent:'space-evenly' 
    // },
    arrangeLine : {
       flexDirection:'row',
       justifyContent : 'center', 
    },
    line : {
        width: 134,
        height: 12,
        borderBottomWidth :2,
    },
    textSignUp : {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:20,
    },
    textForgot : {
        marginTop : 20,
        color : 'blue',
        textAlign : 'right',
       
    },
    container: {
        flex: 1,
        marginTop:70,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    titleText: {
        marginBottom : 20, 
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple',
        textAlign: 'center',
    },
    ContainerTextInput: {
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 16
    },
});

export default LoginScreen

