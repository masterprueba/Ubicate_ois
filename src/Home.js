import React, { Component } from 'react';
import {
    Text,
    View, FlatList, TouchableOpacity,
    Image, SafeAreaView, ImageBackground, Alert
} from 'react-native';
import ic_menu from './resources/Image/list.png'
import ic_bandera from './resources/Image/banner.png'
import iconHome from './resources/Image/007-tent.png'
import Drawer from 'react-native-drawer'
import * as actions from './actions'
import { connect } from 'react-redux'




const menu = [
    { 'title': 'Guía de Cali', 'enlace':'guia' },
    { 'title': 'Inicio', 'enlace':'inicio' },
    { 'title': 'Favoritos', 'enlace':'favorito'},
    { 'title': 'Hoteles', 'enlace':'hotel' },
    { 'title': 'Sitios Turísticos', 'enlace':'sitio' },
    { 'title': 'Comidas & Bebidas', 'enlace':'comida' },
    { 'title': 'Gestion Administrativa', 'enlace':'gestion' }
]

class Home extends Component {

    // constructor(props) {
    //     super(props)

    // }

    static navigationOptions = {
        title: `¡Ubicate Oís!`,
    };

    renderDrawer() {
        //SlideMenu
        return (
            <View style={styles.menuContainer}>
                <FlatList
                    style={{ flex: 1.0 }}
                    data={menu}
                    extraData={this.state}
                    renderItem={({ item, index }) => {
                        console.log("index", index)
                        let icon = ic_menu;
                        switch(index){
                            case 1:
                                icon = iconHome
                            default:
                                null
                        }
                        if (index == 0) {
                            return (
                                <TouchableOpacity style={styles.menuTitleContainerHead}
                                onPress={this.openIcon.bind(this,index)}>
                                    <ImageBackground source={ic_bandera} style={
                                        {
                                             width: '100%', 
                                             height: '90%'
                                        }}> 
                                        <Text style={styles.menuHead}
                                            key={index}>
                                            {item.title}
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            )
                        } else {
                            return (
                                <TouchableOpacity style={styles.menuTitleContainer}
                                onPress={this.openIcon.bind(this,index)}>
                                    <Image style={styles.menuIcon} source={ic_menu} />
                                    <Text style={styles.menuSplit}>|</Text>
                                    <Text style={styles.menuTitle}
                                        key={index}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    }}
                />
            </View>
        )
    }

    openDrawer() {
        this.drawer.open()
    }

    closeDrawer() {
        this.drawer.close()
    }

    openIcon(index){                     
         this.props.navigation.navigate(menu[index].enlace); 
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        type='static'
                        tapToClose={true}
                        openDrawerOffset={0.35}
                        styles={drawerStyles}>
                        {/* //Main View */}
                        <View style={styles.headerContainer}>
                            <View style={styles.menuButton}>
                                <TouchableOpacity
                                    onPress={this.openDrawer.bind(this)}>
                                    <Image style={{ tintColor: 'white' }} source={ic_menu} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.headerTitle}>DRAWER</Text>
                            <View style={styles.menuButton} />
                        </View>
                    </Drawer>
                </View>
            </SafeAreaView>
        );
    }
}

// const mapStateToProps = state =>{
//     return {id: state.pruebaid}
// }

export default connect(null, actions)(Home)

const drawerStyles = {
    drawer: {
        flex: 1.0,
        backgroundColor: '#3B5998',
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white'
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
        backgroundColor: 'white'
    },
    safeAreaStyle: {
        flex: 1.0,
        backgroundColor: '#3B5998',
    },
    headerContainer: {
        height: 44,
        flexDirection: 'row',
        justifyContect: 'center',
        backgroundColor: '#3B5998',
    },
    headerTitle: {
        flex: 1.0,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    menuButton: {
        marginLeft: 8,
        marginRight: 8,
        alignSelf: 'center',
        tintColor: 'white'
    },
    menuContainer: {
        flex: 1.0,
        backgroundColor: '#3B5998',
    },
    menuTitleContainer: {
        alignItem: 'center',
        height: 60,
        width: '100%',
        flexDirection: 'row',
    },
    menuTitle: {
        // width: '100%',
        color: 'white',
        flex: 8,
        // textAlign: 'center',
        fontSize: 17,
        // alignSelf: 'center',
    },
    menuIcon: {
        tintColor: 'white',
        flex: 1
    },
    menuSplit: {
        color: '#3B5998',
        fontSize: 17,
        flex: 1
    },
    menuHead: {
        width: '100%',
        color: 'white',
        textAlign: 'center',
        fontSize: 45,
        alignSelf: 'center',
        fontWeight: 'bold',        
        opacity:0.6,
        backgroundColor: 'rgb(59,89,152)',
    },
    menuTitleContainerHead: {
        alignItem: 'center',
        height: 120,
        width: '100%',
        flexDirection: 'row',        
        // backgroundColor: 'rgba(212,228,239,1)'        
    }
}