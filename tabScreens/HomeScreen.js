
import Axios from 'axios'
import React, { useEffect, useState ,Component}  from 'react'
import { Text,View,StyleSheet,TouchableOpacity, FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListGenreMovieComponent from '../components/ListGenreMovieComponent'  
import ListMovieComponent from '../components/ListMovieComponent'
import TextInputComponent from '../components/TextInputComponent'
const link1MoviesByCategory = 'https://api.themoviedb.org/3/movie/'
const link2MoviesByCategory= '?api_key=a5560efa6ad4fd8537b91dcd4763ee78'
const linkGenresMovie = 'https://api.themoviedb.org/3/genre/movie/list?api_key=da06bc5bd57ed7dfd2653656d7890fbc&language=en-US'
const linkMoviesBySearch='https://api.themoviedb.org/3/search/movie?api_key=a5560efa6ad4fd8537b91dcd4763ee78&query=,'

const HomeScreen = (props) => {
    const [search, setSearch] = useState(null)
    const [moviesBySearch,setMoviesBySearch] = useState([]) 
    const [genresMovie,setGenresMovie] = useState([]) 
    const [moviesByCategory,setmoviesByCategory] = useState([])
    
    useEffect(() => {
        getGenresMovie(linkGenresMovie)
        getMoviesByCategory(link1MoviesByCategory,'popular',link2MoviesByCategory) 
        
     },[])
   
    // ambil data film  berdasarkan search  textinput
    const getMoviesBySearch  =  (url,search) => {
        Axios.get(url+search)
        .then(r =>  setMoviesBySearch(r.data.results))
    } 
     
    // ambil film berdasarkan genre 
    const getMoviesByGenre  =  (url,id) => {
        Axios.get(url+id)
        .then(r =>  setMovieByGenre(r.data.results))
    }
    
    //ambil data genre films
    const getGenresMovie  =  (url) => {
        Axios.get(url)
        .then(r=> setGenresMovie(r.data.genres))
    }       
    
    // ambil data film berdasarkan kategori= 'popular,now_playing ,dll'
    const getMoviesByCategory  =  (url1,category,url2) => {
        Axios.get(url1+category+url2)
        .then(r=> setmoviesByCategory(r.data.results))
    }
    
    //console.log('almero')   
    return (
        
        <View style ={styles.container}>
            <ScrollView>
            <View>
                <TextInputComponent  
                    width = {true}
                    borderRadius = {true}
                    borderBottomWidth = {false}
                    ph='name'
                    input ={search}
                    handleOnChangeText = { (input) => {
                                            setSearch(input)  
                                             getMoviesBySearch(linkMoviesBySearch ,input) }
                                         }
                />
            </View>
            <View style ={styles.header}>
                <Text style={{fontWeight:'bold',fontSize :20,marginRight:50}} >Cities</Text>
                <TouchableOpacity
                    onPress={()=>props.navigation.navigate('Donations')}
                
                
                >
                    <Text style={{marginLeft:170,color:'blue',fontSize:20,}}>donations..</Text>
                </TouchableOpacity>
            </View>
            <View >
                {/* // tampilkan data gendre di home screen dengan komponen ListGenreMovieComponent  */}
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    //numColumns='1'
                    keyExtractor={ (key) => key.id }
                    data={genresMovie}
                    renderItem={ ({item}) => <ListGenreMovieComponent 
                      go={props.navigation.navigate}  genre ={item}  />}
                />
                
            </View>
            <Text style ={{fontSize:20,marginRight:200,marginBottom:10}}>
                Recipients
            </Text>
            <View>
                 {/* // tampilkan data movie( pada saat masuk home,filter & search
                 ) di home screen dengan komponen ListMovieComponent  */}
                <FlatList
                    horizontal
                    keyExtractor={ key => key.id }
                     data={ 
                           // props.route.params.movies
                           //props.route.params && props.route.params.moviesBygenre ? 
                           //props.route.params.moviesBygenre : []
                              search ? moviesBySearch : props.route.params ?
                             props.route.params.movies : moviesByCategory
                    }                        
                    renderItem={ ({item}) => 
                    <ListMovieComponent  go={props.navigation.navigate}   movie={item} />}
                />
            </View>
            </ScrollView>                        
        </View>
    ) 
    }

const styles = StyleSheet.create (
    {
        container : {
            flex :1,
            //justifyContent :'center',
            alignItems: 'center',
        } ,
        containerTouchOpacity : {
            justifyContent: 'center',
            display: 'flex',
            flexDirection :'row',
        },
        header : {
            margin :5,
            flexDirection :'row',
            alignItems:'center'
        }
    }
)
export default HomeScreen
