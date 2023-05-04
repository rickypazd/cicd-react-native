import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SButtom, SForm, SHr, SIcon, SImage, SInput, SList, SLoad, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView, Upload } from 'servisofts-component';
import { BottomNavigator, Container, NavBar, Pedido, Restaurante, TopBar, Sucursal, BtnNavegar } from '../../Components';
import Model from '../../Model';
import SSocket from 'servisofts-socket'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handlePress = () => {
        let image = this.r_image.getValue();
        let descripcion = this.r_descripcion.getValue();
        if (!image) {
            SPopup.alert("Inserta una imagen");
            return;
        }
        if (!descripcion) {
            SPopup.alert("Inserta una descripcion");
            return;
        }
        let data = {
            descripcion,
            observacion: ""
        }
        Model.publicacion.Action.registro({
            data: data,
            key_usuario: Model.usuario.Action.getKey()
        }).then(resp => {
            Upload.sendPromise(image[0], SSocket.api.root + "upload/publicacion/" + resp.data.key).then(resp2 => {
                SNavigation.reset("/");
            }).catch(e => {
                SNavigation.reset("/");
            })
        }).catch(e => {
            console.error(e);
        })
    }
    render() {
        if (!Model.usuario.Action.getUsuarioLog()) {
            SNavigation.replace("/login");
            return null;
        }

        return (
            <SPage title={"Nueva publicación"}>
                < Container >
                    <SView col={"xs-12"} colSquare >
                        <SInput ref={r => this.r_image = r} type={"image"} style={{
                            width: "100%",
                            height: "100%",
                        }} />
                    </SView>
                    <SHr />
                    <SInput ref={r => this.r_descripcion = r} type='textArea' placeholder={"Write a caption"} style={{
                        backgroundColor: "#00000000",
                        borderWidth: 1,
                        borderColor: STheme.color.card,
                        borderRadius: 8,
                    }} />
                    <SHr />
                    <SView col={"xs-12"} card height={40} center onPress={this.handlePress.bind(this)}>
                        <SText>{"Continuar"}</SText>
                    </SView>
                </Container >
            </SPage >
        );
    }

}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(index);