import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SButtom, SForm, SHr, SIcon, SImage, SList, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import { BottomNavigator, Container, NavBar, Pedido, Restaurante, TopBar, Sucursal } from '../../Components';
import Model from '../../Model';
import SSocket from 'servisofts-socket'
import BtnSend from './components/BtnSend';
import BtnSend2 from './components/BtnSend2';
import BackButtom from '../../Components/BackButtom';
import BtnSend3 from './components/BtnSend3';
import CardUser from './components/CardUser';
import Header from './components/Header';
class coincidencia extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    clearData() {
        Model.pedido.Action.CLEAR();
        Model.horario.Action.CLEAR();
        Model.pack.Action.CLEAR();
        Model.restaurante.Action.CLEAR();
        Model.favorito.Action.CLEAR();
        Model.publicacion.Action.CLEAR();
    }

    navBar() {
        return <TopBar type={"home"} />
    }

    background() {
        return <>
            <SView
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 10,
                    // zIndex: 9
                }}
            >
                <SIcon name={"Ibackg1"} height={146} width={50} />
            </SView>
            <SView
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    zIndex: -9
                }}
            >
                <SIcon name={"Ibackg2"} height={185} width={50} />
            </SView>
        </>
    }

    render() {
        return (
            <SPage
                center
                hidden
                footer={<BackButtom />}
            >
                <SView col={"xs-11"} flex backgroundColor={STheme.color.primary} center >
                    <Container>
                        <SHr height={30} />
                        <Header
                            titulo={"¡Hemos encontrado coincidencia de datos!"}
                            icon={"Icoincidencia"}
                            descripcion={"Por favor, verifica y selecciona tu perfil para continuar."}
                        />
                        <SHr height={25} />
                        <CardUser />
                        <SHr height={10} />
                        <CardUser />
                        <SHr height={35} />
                        <BtnSend3
                            onPress={() => {
                                SNavigation.navigate("/cuenta/recuperar1");
                            }}
                            style={{ zIndex: 99999, position: "absolute" }}
                        >Crear nueva cuenta
                        </BtnSend3>
                        {/* <SHr height={55} /> */}
                        <SHr height={35} />
                    </Container>
                    {this.background()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(coincidencia);