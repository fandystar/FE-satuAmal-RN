import React, { useEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet,TouchableOpacity } from 'react-native'

import back from './../sample/images/back.png'
import Vector from './../sample/images/Vector.png'
//import { GET_USER_URL } from '../Redux/constants/general'
//import Axios from 'axios'
//import { useSelector, useDispatch } from 'react-redux'
import TouchableOpacityComponent from '../components/TouchableOpacityComponent';



export default function ProfileScreen(props) {
  const [data, setData] = useState([])
  const [avatar, setAvatar] = useState(null)


//   const dispatch = useDispatch()
//   const token = useSelector((state) => state.UserAuthReducers.token)
//   const isOut = useSelector((state) => state.UserAuthReducers.isOut)
 
  //console.log('token : ', token)
  //console.log('isOut : ', isOut)
//   useEffect(() => {
//     //getDataUser(token, GET_USER_URL)
//     //console.log('useEfect')
//   }, [isOut])

  const getDataUser = (key, url) => {
    Axios.get(url, {
      headers: { token: key }
    })
      .then(r => {setData(r.data) 
        console.log('hai:', r.data)})
  }

//  console.log('tes:', data)
  
  return (

    <View style={{marginTop:200}}>
      {/* <View style={styles.imgBackground1}>
        <View>
          <Image source={Vector} style={styles.logoImage} />
        </View>
      </View> */}

      <View style={styles.imgBackground2}>
        {/* <Image source={data.length !== 0 && { uri: data.data.profile_image }} style={styles.imageRobert} /> */}
        {/* <Text>{data.length !== 0 && data.data.full_name}</Text> */}
      </View>

      {/* <View style={styles.divider} /> */}

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
        //   onPress={() => props.navigation.navigate('TransactionHistory')}
          style={{ margin: 6 }}>
          <Text>Donations History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          style={{ margin: 6 }}>
          <Text
            onPress={()=>props.navigation.navigate('Recipient')}
          
          >Submit Recipient</Text>
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={() => props.navigation.navigate('EditProfile')}
          style={{ margin: 6 }}>
          <Text style={styles.toProfile}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity 
            onPress={()=>props.navigation.navigate('Home')}
            style={{ margin: 5 }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Browse</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}
          style={styles.buttonLogIn}> */}
          {/* {isOut ?   */}
          {/* <Text style={{ textAlign: 'center', color: 'white' }}>Log Out</Text>
          :   <Text style={{ textAlign: 'center', color: 'white' }}>Log In</Text>
            }
         */}
                      {/* <Text style={{ textAlign: 'center', color: 'white',fontWeight:'bold',fontSize:15 }}>Sign In</Text>
            
          </TouchableOpacity> */}

        {/* <TouchableOpacity
          style={styles.buttonLogOut}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Log Out</Text>
        </TouchableOpacity> */}
        <TouchableOpacityComponent
           caption={'SIGN OUT'}
           handleOnPress={()=>props.navigation.navigate('Login')}
        
        />
           
       
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  imgBackground1: {
    marginTop: '3%',
    marginLeft: '3%'
  },

  imgBackground2: {
    width: '100%',
    height: '85%',
  },

  logoBack: {
    height: 20,
    width: 20,
    marginLeft: '5%'
  },

  logoImage: {
    height: 30,
    width: 32,
  },

  imgBackground2: {
    alignItems: 'center',
    alignSelf: 'center',

  },

  imageRobert: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 10
  },

  divider: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    margin: 20,
    borderBottomColor: 'black'
  },

  toProfile: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 15,
    height: 40,
    width: 110,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    color: 'orange'
  },

  buttonLogIn: {
    alignSelf: 'center',
    //fontWeight : 'bold',
    backgroundColor: '#34ace0',
    padding: 10,
    marginTop: '30%',
    height: 40,
    width: 120,
    borderRadius: 50,
    textAlign: 'center'
  },

  buttonLogOut: {
    alignSelf: 'center',
    backgroundColor: '#D65445',
    padding: 10,
    marginTop: '1%',
    height: 40,
    width: 250,
    borderRadius: 50,
    textAlign: 'center'
  },


})