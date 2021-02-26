import React,{useState} from 'react'
import { Text,Image,View, TextInput ,StyleSheet,TouchableOpacity} from 'react-native'
import TextInputComponent from '../components/TextInputComponent';
import TouchableOpacityComponent from '../components/TouchableOpacityComponent';
//import ImagePicker from 'react-native-image-picker';
import userImage from './../sample/images/userImage.png'
import editImage from './../sample/images/editImage.png'
//import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Axios from 'axios';

const SignUpScreen = (props) => {
    var ImagePicker = require('react-native-image-picker');
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)
    const [image, setImage] = useState(null)
    const [alias, setAlias] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [role, setRole] = useState(null)
    const [status, setStatus] = useState(null)
    const [city, setCity] = useState(null)

    
    
    const [uri, setUri] = useState('')
    const [type, setType] = useState('')
    const [fileName, setFileName] = useState('')
     


    return (
        <View >
           <View style= {styles.containerGambar}>
                  <View>
                     {/* <Image source={userImage} style={styles.userImage}  />   */}
                     { image!==null ? <Image source={image} style={styles.userImage}/> : 
                       <Image source={userImage} style={styles.userImage} /> }
                  </View>
                  
                  <View>
                  <TouchableOpacity  onPress={()=>{ 
                      const options = {
                        title: 'Select Avatar',
                        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
                        storageOptions: {
                          skipBackup: true,
                          path: 'images',
                        },
                      };
                      //  launchImageLibrary
                      // launchCamera
                      // showImagePicker
                      ImagePicker.launchCamera(options, (response) => {
                        console.log('Response = ', response);
                                
                                    if (response.didCancel) {
                                    console.log('User cancelled image picker');
                
                                } else if (response.error) {
                                    console.log('ImagePicker Error: ', response.error);
                                    } else if (response.customButton) {
                                    console.log('User tapped custom button: ', response.customButton);
                                    } else {
                                    const source = { uri: response.uri };
                            setImage(source)

                        }
                      })
                     }}
                     >
                <Image source={editImage} style={styles.editImage}/>
                     {/* <Text>klik sini</Text> */}
                </TouchableOpacity>
                        {/* { image!==null && <Image source={image} style={styles.userImage} /> } */}
                </View>
            </View>
           
            <View style = {styles.container}>
                <View style={styles.containerText}>
                    <TextInputComponent
                            ph='Name'
                            //input = {name}
                            handleOnChangeText = {input=>setName(input)}
                    />
                    <TextInputComponent
                            ph='Email'
                           // input = {email}
                           handleOnChangeText = {input=>setEmail(input)}
                    />    
                     <TextInputComponent
                            ph='Password'
                            //input = {password}
                           handleOnChangeText = {input=>setPassword(input)}
                    />
                    <TextInputComponent
                            ph='Alias'
                            //input = {alias}
                            handleOnChangeText = {input=>setAlias(input)}
                    />
                    <TextInputComponent
                            ph='Phone Number'
                            //input = {phoneNumber}
                           handleOnChangeText = {input=>setPhoneNumber(input)}
                    />
                     <TextInputComponent
                            ph='Role'
                            //input = {phoneNumber}
                           handleOnChangeText = {input=>setRole(input)}
                    />
                    <TextInputComponent
                            ph='Status'
                            //input = {city}
                            handleOnChangeText = {input=>setStatus(input)}
                    />    
                    <TextInputComponent
                            ph='City'
                            //input = {city}
                            handleOnChangeText = {input=>setCity(input)}
                    />
                </View>
                <View>
                    <TouchableOpacityComponent 
                        caption = {'SIGN UP'} 
                        handleOnPress = {async()=> {
                            const r = await Axios.post('https://satuamal.herokuapp.com/api/user/register',
                                        {
                                            name,
                                            email ,
                                            password,
                                            alias,
                                            phoneNumber,
                                            role,
                                            status,
                                            city

                                        }  )
      
                //AsyncStorage.setItem('userToken',r.data.access_token)
             
                console.log(r.data)
                //props.navigation.navigate('Home')    
                            props.navigation.navigate('Login')
                        
                        
                        }}
                    />
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <Text >Already have an account  </Text>
                        <Text 
                            style={{color:'blue',marginLeft:3}} onPress={()=> props.navigation.navigate('Login')}>  
                            Sign In
                        </Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ( 
    {
        userImage : {
            top:25,
            //left :100,
            //position : 'relative',
            alignItems:'center',
            height:150,
            width:150,     
        },
        
        editImage : {
            //position:'absolute',

            //top:0,
            //left:30,
            height:40,
            width:40,     
        },
        
        container : {
            //flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
        },
        containerText : {
            //marginBottom : 20,
        },
        containerGambar : {
            //flexDirection : 'row',
          justifyContent:'center',
           alignItems:'center',
            //marginBottom : 20 ,
        },
    }
)

export default SignUpScreen
