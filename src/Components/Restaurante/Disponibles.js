import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Model from '../../Model';
export type DisponiblesPropsType = {
    data: any
}
class index extends Component<DisponiblesPropsType> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    getNoDisponible2(cantidad) {
        if (cantidad) return null;
        return <SView style={{
            width: 14
        }}>
            <SIcon name={"NoDisponible"} />
        </SView>
    }
    render() {

        var { key, proximo_horario } = this.props.data;
        if (!proximo_horario) return null;
        var pack = proximo_horario.pack
        // if (!pack) return null;
        // var cantidad = pack.cantidad;
        var cantidad = pack?.cantidad_disponibles ?? 0;
        return <SView
            key={this.props.data.key}
            {...this.props}
            center
            style={{
                width: 110,
                height: 26,
                borderRadius: 4, overflow: 'hidden', backgroundColor: 'white',
                borderColor: "#AAAAAA22",
                borderWidth: 2,
                borderTopWidth: 0,
                borderBottomWidth: 3,
                // backgroundColor: "#FCBB3E",
                backgroundColor: cantidad ? STheme.color.accent : '#979797',
                ...this.props?.style
            }} row>
            {/* <SView height={13} /> */}
            <SText fontSize={9} color={STheme.color.secondary} ce>{`${cantidad ?? 0} disponible(s)`}</SText>
            <SView width={4} height />
            {this.getNoDisponible2(cantidad ?? 0)}

            {/* <SIcon name={"Favorite"} width={this.state.size * this.state.scale} height={this.state.size * this.state.scale} fill={!this.state.isFavorito ? "#ADB5BD" : '#FA4A0C'} /> */}
        </SView>
    }
}
export default (index);