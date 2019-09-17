import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, ScrollView, } from 'react-native'
import ImagePicker from 'react-native-image-picker';

class Hotel extends Component {

    state = {
        imagen: { uri: 'content://com.ubicate.provider/root/storage/emulated/0/Pictures/images/image-65d6c49b-fa9c-4410-9b35-7f0a5d508f5f.jpg' }
    }

    render() {


        // More info on all the options is below in the API Reference... just some common use cases shown here
        const options = {
            title: 'Seleccione Foto',
            customButtons: [],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
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
                    imagen: source
                });
            }
        });

        // ImagePicker.launchCamera(options, (response) => {
        //     // Same code as in above section!
        //   });

        return (
            <Image source={this.state.imagen} style={{ height: 200 }} />
        )
    }
}
export default connect(null, null)(Hotel)