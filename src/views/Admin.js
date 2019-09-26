import React, { Component } from 'react'
import { Text, View, Button, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'
import ic_menu from '../resources/Image/list.png'
import firebase from '../utli/Firesbase'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Header from '../component/menu_barra/header'
import iconCamara from '../resources/Image/042-photo-camera.png';
import ImagePicker from 'react-native-image-picker';
// import RNFetchBlob from 'react-native-fetch-blob'
// import { decode } from 'base-64';

// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob = Blob

class Admin extends Component {

    
    constructor(props) {

        super(props);
        this.state = {
            imagen: iconCamara,
            Nombre: '',
            Descripcion: '',
            Ciudad: '',
            imgBase64: '',
            uri: '',

        };

        console.log("Props:: ",this.props);
    }


    static navigationOptions = ({ navigation }) => {

        let dataHeader = {
            titulo: 'Gestión Administrativa'
        }
        return {

            headerTitle:
                (
                    <Header dataHeader={dataHeader} />
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

    getPicture() {

        const options = {
            title: 'Seleccione Foto',
            customButtons: [],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                //const source = { uri: response.uri };

                // You can also display the image using data:
                const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imagen: source,
                    imgBase64: response.data,
                    uri: response.uri
                });
            }
        });

    }

    guaradarSitio(e) {

        console.log("Imp state::: ", this.state);

        // let getSit = this.getSitiosTuristicos();

        this.setSitiosTuristicos();
    }

    async getSitiosTuristicos() {

        try {
            require('firebase/firestore');
            let db = firebase.firestore();
            require('firebase/storage');
            let st = firebase.storage();
            const sitiosTuri = await db
                .collection('sitiosTuristicos')
                .get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data()}`);
                        console.log("doc.data()=>", doc.data());
                        st.ref('imgSitios/nftVA2EvU6l35iS25pKl.txt')
                    });
                });

            console.log("Imp sitiosTuri::: ", sitiosTuri);
        } catch (error) {
            console.log("Error::: ", error)
        }
    }

    async setSitiosTuristicos() {

        try {

            let Nombre = this.state.Nombre;
            let Descripcion = this.state.Descripcion;
            let imagen = this.state.imagen;
            let imgBase64 = this.state.imgBase64;
            let pathImg = this.state.pathImg;

            if (Nombre == '') {
                Alert.alert("Por favor digite Nombre del sitio", "");
            }

            else if (Descripcion == '') {
                Alert.alert("Por favor digite Descripción del sitio");
            }

            else if (imagen == iconCamara) {
                Alert.alert("Por favor digite Precione la camara para tomar foto del sitio");
            }
            else {

                // console.log('Uploadedando stados',this.state);
                require('firebase/firestore');
                  

                 let db = firebase.firestore();
                // ----------------------------------------------------------------------
                
                // resp.putFile(this.state.uri);
                // let resp2 = resp.put(blob ,{
                //     contentType: 'image/jpeg'
                // });

                // ----------------------------------------------------------------------
                // console.log('imgBase64=>',imgBase64);
                // let resp =  firebase.storage().ref('imgSitios_string.jpg').putString(imgBase64, {
                //     contentType: 'image/jpeg'
                // });

                // console.log("resp:::>>> ",resp);

                

                // console.log("resp",resp);
                // const ref = firebase
                //     .storage()
                //     .ref()
                //     .child('imgSitios');
                // // const snapshot = await ref.put(imgBase64);
                // ref.putString(imgBase64, 'base64').then(function (snapshot) {
                //     console.log('Uploaded a base64 string!');
                // }).catch(function (error) {
                //     console.error("Error adding document: ", error);
                // });

                await db.collection("sitiosTuristicos").add({

                    title: Nombre,
                    description: Descripcion,
                    rating: 0,
                    img: '',
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    let baseString = imgBase64;
                    // console.log('Byte array loaded', bytes);               
                    var blob = new Blob([baseString], {type: 'text/plain'});
                    // console.log(pathImg);
                    var file = new File([blob], "filename2.jpg", {type: "text/plain"}) 
    
                    let resp =  firebase.storage().ref('imgSitios/'+docRef.id+'.txt').put(file);
                    resp.then((resp)=>{
                        if (resp.state == 'success') {
                            Alert.alert('Sitio guardado');
                        }
                    }).catch(function (error) {
                            console.error("Error adding document: ", error);
                    });

                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });



            }

        } catch (error) {
            console.log("Error::: ", error)
        }
    }

    // Convert from a base64 string to an array of bytes
    convertToByteArray(input) {        
        var base64 = require('base-64');

        let temp = base64.encode("hola");

        console.log("temp///>",temp);

        var binary_string = base64.decode(input);       
        // console.log("binary_string::=>",binary_string);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }

        return bytes;
    }

    render() {

        const sidebar = (

            <View style={styles.containerPadre}  >

                <View style={styles.containerLeft} >
                </View>

                <View style={styles.container} >
                    <View style={styles.uno}>
                        <Text style={styles.textTitle}>¡Agrega tu sitio!</Text>
                    </View>
                    <View style={styles.dos}>
                        <TouchableOpacity onPress={() => this.getPicture()} style={{ flex: 1 }}>
                            <Image source={this.state.imagen} style={styles.img}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tres}>
                        <Text style={styles.text}>Nombre</Text>
                        <TextInput style={styles.textInput}
                            onChangeText=
                            {
                                (tx) => { this.setState({ Nombre: tx }); }
                            }
                        />
                    </View>
                    <View style={styles.cinco}>
                        <Text style={styles.text}>Descripción</Text>
                        <TextInput style={styles.textInput}
                            onChangeText=
                            {
                                (tx) => { this.setState({ Descripcion: tx }); }
                            }
                        />
                    </View>
                    <View style={styles.seis}>
                        <Text style={styles.text}>Ciudad</Text>
                        <TextInput style={styles.textInput}
                            onChangeText=
                            {
                                (tx) => { this.setState({ Ciudad: tx }); }
                            }
                        />
                    </View>
                    <View style={styles.cuatro}>
                        <TouchableOpacity
                            onPress={(e) => { this.guaradarSitio(e) }}
                            style={styles.SubmitButtonStyle}
                            title="Red button!"
                            color="green"
                        >
                            <Text style={styles.textBtn}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.foot}>                        
                    </View> */}
                </View>

                <View style={styles.containerRigth} >
                </View>

            </View>

        )

        return (
            <View style={styles.containerPadre} >
                <ScrollView>
                    {sidebar}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerPadre: {
        flex: 100,
        flexDirection: 'row',
        backgroundColor: "#C5CAE9"
    },
    containerLeft: {
        flex: 20,
    },
    containerRigth: {
        flex: 20,
    },
    img: {
        height: 150,
        width: '100%',
        resizeMode: 'contain'
    },
    textTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#3B5998'
    },
    SubmitButtonStyle: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#3B5998',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    textBtn: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#3B5998',
    },
    textInput: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 20,
        margin: 2
    },
    container: {
        flex: 60,
        flexDirection: 'column'
    },
    uno: {
        // backgroundColor: 'blue',
        flex: 10
    },
    dos: {
        // backgroundColor: 'green',
        flex: 40
    },
    tres: {
        flex: 5,
        backgroundColor: 'white',
        borderRadius: 20
    },
    cinco: {
        flex: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 2
    },
    seis: {
        flex: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 2
    },
    cuatro: {
        // backgroundColor: 'green',
        flex: 20,
        borderRadius: 20
    },
    dos: {
        // backgroundColor: 'green',
        flex: 10
    },
})

// const mapStateToProps = state => {
//     return { correo: state.loginReducer }
// }

export default connect(null, actions)(Admin);