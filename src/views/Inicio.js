import React, { Component } from 'react'
import { Text, View, FlatList, Platform, TouchableOpacity, Image, StyleSheet, Dimensions, Animated, ImageBackground } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import ic_menu from '../resources/Image/list.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import iconMapa from '../resources/Image/mapa.png'
import Autocomplete from 'react-native-autocomplete-input';
// import Header from '../component/menu_barra/header';



const { width, height } = Dimensions.get('screen')

const db = [{
  id: 1,
  title: 'San Andres y Providencia..',
  description: 'El jardín de la reina, la del mar de 7 colores',
  img: 'https://www.elespectador.com/sites/default/files/11octubre_tema%2Cph01_1539208503.jpg',
  rating: 4.7,  
},
{
  id: 2,
  title: 'Santa Marta',
  description: 'El balcón de América,la perla de América',
  img: 'https://encolombia.com/wp-content/uploads/2014/01/Turismo-en-Santa-Marta.png',
  rating: 4.8,  
},
{
  id: 3,
  title: 'Cartagena',
  description: 'La ciudad heróica, el corralito de piedra',
  img: 'https://www.ahstatic.com/photos/8600_ho_00_p_1024x768.jpg',
  rating: 4.5,
  
}
]

const listaSitios = [
  {
    id:1,
    title:'Parque de la caña'
  },
  {
    id:2,
    title:'Ermita'
  },
  {
    id:3,
    title:'Parque de el perro'
  }
]

// const documentSnapshot =  firestore()
//   .collection('users')
//   .doc('alovelace')
//   .get();

// console.log('User data', documentSnapshot.data());

class Inicio extends Component {

  constructor(props) {
    super(props);
    //Initialization of state
    //films will contain the array of suggestion
    //query will have the input from the autocomplete input
    this.state = {
      sitios: listaSitios,
      query: '',
    };
  }


  buscaSitios(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }
 
    const { sitios } = this.state;    
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return sitios.filter(sitio => sitio.title.search(regex) >= 0);
  }

  scrollX = new Animated.Value(0);

  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle:
        (
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 25 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 25 }}>Ubicate </Text>
            </View>
            <View style={{ flex: 25, marginLeft: 30 }}>
              {/* <Text style={{color: 'white', fontSize: 15, marginTop: 30}}>Cerca A Ti :</Text> */}
            </View>
            <View style={{ flex: 25 }}>
              <TouchableOpacity
                onPress={(e) => { navigation.navigate("mapasitiocercano"); }}
              >
                <Image source={iconMapa} style={{ height: '85%', width: '50%', marginTop: 9, marginLeft: 40 }} />
              </TouchableOpacity>
            </View>
          </View>
        ),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#3B5998',
      },
      headerLeft: (
        <TouchableOpacity
          onPress={(e) => { navigation.openDrawer() }}>
          <Image style={{ tintColor: 'white', width: 30, marginLeft: 10 }} source={ic_menu} />
        </TouchableOpacity>
      ),
    };
  }

  renderDots() {
    const { ciudades } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={[
        styles.flex, styles.row,
        { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
      ]}>
        {ciudades.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp'
          } 
          );          
          return (
            
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth }]}
            >                
            </Animated.View>
          )
        })}
        
      </View>
    )
  }

  renderCiudades = () => {
    return (<View style={[styles.column]}>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={{ overflow: 'visible', height: 370 }}
        data={this.props.ciudades}
        keyExtractor={(item, index) => `${item.id}`}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
        renderItem={({ item }) => this.renderCiudad(item)}
      />
      {this.renderDots()}
    </View>)
  }

  renderCiudad = (item) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => {
        this.props.navigation.navigate("detalleSitio",
        {
            idSitio:item.id
        });  
      }}>
        <ImageBackground
          style={[styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: item.img }}
        >
          <View style={[styles.flex, styles.row]}>
            <View style={[styles.flex, styles.row]}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 14 * 1.25 }}>{item.rating}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.destinationInfo, styles.shadow]}>
          <Text style={{ fontSize: 14 * 1.25, fontWeight: '500', paddingBottom: 8, }}>
            {item.title}
          </Text>
          <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
            <Text style={{ color: '#BCCCD4' }}>
              {item.description.split('').slice(0, 50)}...
              </Text>
            <FontAwesome
              name="chevron-right"
              size={14 * 0.75}
              color={'#BCCCD4'}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _autocomplete(item){
    this.setState({ query: item.title })
    this.props.navigation.navigate("detalleSitio",
        {
            idSitio:item.id
        }); 
  }
  
  render() {
    const { query } = this.state;
    const sitios = this.buscaSitios(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    const header = (<View style={
      [styles.flex, styles.row, styles.header
      ]}>
      <View style={styles.containerAuto}>
        <Autocomplete
            ref={'autositios'}
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.autocompleteContainer}
            //data to show in suggestion
            data={sitios.length === 1 && comp(query, sitios[0].title) ? [] : sitios}
            //default value if you want to set something in input
            defaultValue={query}
            /*onchange of the text changing the state of the query which will trigger
            the findFilm method to show the suggestions*/
            onChangeText={text => this.setState({ query: text })}
            
            renderItem={({ item }) => (
              //you can change the view you want to show in suggestion from here
              <TouchableOpacity onPress={() => this._autocomplete(item)}>
                <Text key={item.id} style={styles.itemText}>
                  {item.title} 
                </Text>
              </TouchableOpacity>
            )}
          />
        <View style={styles.descriptionContainer}>
          {sitios.length > 0 ? (
            <Text style={styles.infoText}>{this.state.query}</Text>
          ) : (
            <Text style={styles.infoText}>Buscar sitio</Text>
          )}
        </View>
      </View>
      <View style={{flexDirection:"row-reverse",flex:1,marginTop:15,right:10}}>
      <TouchableOpacity onPress={() => this.refs.autositios.focus()}>
        <Image style={styles.avatar} source={{ uri: 'https://img.icons8.com/cotton/2x/search--v2.png' }} />
        </TouchableOpacity>
      </View>
    </View>)


    return (
      <View style={styles.container}>
        {header}
        <View style={[styles.articulos]}>
          {this.renderCiudades()}
        </View>
        
      </View>

    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {    
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 6,
    paddingTop: 6,    
    marginBottom:30,
    flexDirection:"row",
  },
  articulos: {
    flex: 12,    
  },
  ciudades: {
    width: (width - (36 * 2)),
    borderRadius: 12,
    backgroundColor: 'blue',
    marginHorizontal: 36,
    padding: 36
  },
  container: {
    flex: 13
  },  
  destination: {
    width: width - (36 * 2),
    height: 300,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 36 * 0.66,
    borderRadius: 12,
  },  
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 36,
    },
    shadowOpacity: 4,
    shadowRadius: 10,
    elevation: 5,
  },  
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,    
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 36 / 12,
    bottom: 10,
    left: (width - (36 * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: '#FFF',
    width: width - (36 * 4),
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: '#DCE0E9',
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: '#007BFA',
  },
  rating: {
    left: 40
  },
  containerAuto: {
    position:"absolute",
    zIndex:1,
    padding: 16,
    marginTop: 0, 
    marginLeft:36,  
    borderRadius:50     
  },
  autocompleteContainer: {    
    width:220,
    borderRadius:50
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
    borderRadius:52
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    borderRadius:50
  },
})

const mapStateToProps = state => {
  return {
    id: state,
    ciudades: db

  }
}

export default connect(mapStateToProps, actions)(Inicio)