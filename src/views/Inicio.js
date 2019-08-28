import React, { Component } from 'react'
import { Text, View, FlatList, Platform, TouchableOpacity, Image, StyleSheet, Dimensions, Animated, ImageBackground } from 'react-native'
import * as actions from '../actions'
import { connect } from 'react-redux'
import ic_menu from '../resources/Image/list.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import iconMapa from '../resources/Image/mapa.png'
// import Header from '../component/menu_barra/header';

const { width, height } = Dimensions.get('screen')

const db = [{
  id: 1,
  title: 'San Andres y Providencia',
  description: 'El jardín de la reina, la del mar de 7 colores',
  img: 'https://www.elespectador.com/sites/default/files/11octubre_tema%2Cph01_1539208503.jpg',
  rating: 4.7,
  recomendaded: [
    'https://i.ytimg.com/vi/Yow_NXYINiU/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNoKa73et9ptoJqpTj3630vdefvkM7-B3u3Gv623KZpi5nz_e_g',
    'https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2019/03/01/5c799b6704f63.jpeg'
  ]
},
{
  id: 2,
  title: 'Santa Marta',
  description: 'El balcón de América,la perla de América',
  img: 'https://encolombia.com/wp-content/uploads/2014/01/Turismo-en-Santa-Marta.png',
  rating: 4.8
},
{
  id: 3,
  title: 'Cartagena',
  description: 'La ciudad heróica, el corralito de piedra',
  img: 'https://www.ahstatic.com/photos/8600_ho_00_p_1024x768.jpg',
  rating: 4.5
}
]

class Inicio extends Component {
  
  scrollX = new Animated.Value(0);  

  static navigationOptions = ({ navigation }) => {    

    return {
      headerTitle:
        (
          <View style={{ flexDirection: 'row' }}>
            <View style={{flex: 25}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',marginTop: 25}}>Ubicate </Text>
            </View>
            <View style={{flex: 25,marginLeft: 30}}>
              {/* <Text style={{color: 'white', fontSize: 15, marginTop: 30}}>Cerca A Ti :</Text> */}
            </View>
            <View style={{flex: 25}}>
              <TouchableOpacity
              onPress={(e) => { navigation.navigate("mapasitiocercano"); }}
              >
                <Image source={iconMapa} style={{height: '85%', width: '50%', marginTop: 9, marginLeft: 40}} />
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
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth }]}
            />
          )
        })}
      </View>
    )
  }

  renderCiudades = () => {
    return (<View style={[styles.destinations, styles.column]}>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={{ overflow: 'visible', height: 280 }}
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
      <TouchableOpacity activeOpacity={0.8} onPress={() => console.log('tocuhable')}>
        <ImageBackground
          style={[styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: item.img }}
        >
          <View style={[styles.flex, styles.ciudad, styles.row]}>
            <View style={[styles.flex, styles.row]}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 14 * 1.25 }}>{item.rating}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
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

  renderRecomendados = () => {
    return (<View style={[styles.flex, styles.column]}>
      <Text>Recomendados</Text>
    </View>)
  }

  render() {

    const header = (<View style={
      [styles.flex, styles.row, styles.header,
      { justifyContent: 'space-between', alingItems: 'center' }
      ]}>
      <View>
        <Text>Buscador por ciudad</Text>
      </View>
      <View>
        <Image style={styles.avatar} source={{ uri: 'https://img.icons8.com/cotton/2x/search--v2.png' }} />
      </View>
    </View>)


    return (
      <View style={styles.container}>
        {header}
        <View style={[styles.articulos]}>
          {this.renderCiudades()}
        </View>
        <View style={styles.recomendados}>
          {this.renderRecomendados()}
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
    paddingTop: 6
  },
  articulos: {
    flex: 5,
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
  recomendados: {
    flex: 7,
    marginHorizontal: 36,
    top: 110
  },
  destination: {
    width: width - (36 * 2),
    height: 200,
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
    paddingVertical: 36 / 2,
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
  }
})

const mapStateToProps = state => {
  return {
    id: state,
    ciudades: db

  }
}

export default connect(mapStateToProps, actions)(Inicio)