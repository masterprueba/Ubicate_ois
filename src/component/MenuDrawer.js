import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import iconHome from '../resources/Image/007-tent.png'
import iconHotel from '../resources/Image/029-hotel.png'
import iconStart from '../resources/Image/Estrella.png'
import iconSite from '../resources/Image/037-direction.png'
import iconFastFood from '../resources/Image/034-fast-food.png'
import iconLoguin from '../resources/Image/019-lodging.png'
import styled from 'styled-components'

const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {
	navLink(nav, text, index) {
		let icon;
                            switch (index) {
                                case 1:
                                    // Alert.alert("66");
                                    icon = iconHome
                                    break
                                case 2:
                                    icon = iconStart
                                    break
                                case 3:
                                    icon = iconHotel
                                    break
                                case 4:
                                    icon = iconSite
                                    break
                                case 5:
                                    icon = iconFastFood
                                    break
                                case 6:
                                    icon = iconLoguin
                                    break
                                default:

                            }
		return(
			<TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<View style={styles.menuHead}>
					<View style={styles.menuIcon}>
						<Image style={styles.menuIconImg} source={icon} />
					</View>
					<View style={styles.menuText}>
						<Text style={styles.link}>{text}</Text>
					</View>
				</View>								
			</TouchableOpacity>
		)
	}

	render() {
		
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>				
								<ImageBackground source={require('../resources/Image/banner.jpg')} style={
                                        {
                                            width: '100%',
											height: '100%',
											flex:2,
											flexDirection:'row'
                                        }}>
											<View style={styles.profile}>
												<Image style={styles.img} source={require('../resources/Image/042-photo-camera.png')} />
											</View>
											<View style={styles.profileText}>
												<Text style={styles.name}>Guia De Cali</Text>
											</View>								
								</ImageBackground>	
					</View>
					<View style={styles.bottomLinks}>
						<View style={styles.textlink}>
							{this.navLink('inicio', 'Inicio',1)}
						</View>
						<View style={styles.textlink}>
							{this.navLink('favorito', 'Favoritos',2)}
						</View>
						<View style={styles.textlink}>
							{this.navLink('hotel', 'Hoteles',3)}
						</View>	
						<View style={styles.textlink}>
							{this.navLink('sitio', 'Sitios Turísticos',4)}
						</View>
						<View style={styles.textlink}>
							{this.navLink('comida', 'Comidas & Bebidas',5)}
						</View>	
						<View style={styles.textlink}>
							{this.navLink('gestion', 'Gestion Administrativa',6)}
						</View>				
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>Menu Iteria</Text>
					<Text style={styles.version}>v1.0</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: 'lightgray',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,

	},
	profileText: {
		flex: 1,
	},
	name: {
		fontSize: 30,		
		color:'green',
		fontWeight: 'bold',
		opacity: 1,
		marginTop:20,
		marginLeft: 0
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		
		height: 35,
		width: 35,	
		marginTop:10,
		marginLeft:10
	},
	topLinks:{
		height: 130,			
	},
	bottomLinks: {
		flex: 1,
		backgroundColor:'#C5CAE9',
		paddingTop: 10,
		paddingBottom: 450,
	},
	link: {
		fontSize: 18,
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 20,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 16,
	},
	textlink:{		
		height:60,
		borderWidth: 1,
		borderRadius: 20,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 20 },
		shadowOpacity: 0.8,
		shadowRadius: 10,		
		elevation: 1,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10		
	},
	menuIcon: {
		// tintColor: 'white',
		flex:1,
		left:5,
		margin: 0
	},
	menuHead:{
		width: '100%',
		height: '100%',
		flex:2,
		flexDirection:'row',		
	},
	menuText:{
		flex:1,
		left: -70,
		top:10
	},
	menuIconImg:{
		width:50,
		height:50
	}
})