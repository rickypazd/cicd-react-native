import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SImage, SList, SMath, SNavigation, SPage, SScroll, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import { Container } from '..';
import Model from '../../Model';
export type MapaListaButtomsPropsType = {
    url: any,
    data: any,
    onPress?: (obj) => {},
}
class index extends Component<MapaListaButtomsPropsType> {
    constructor(props) {
        super(props);
        this.state = {
            filtros: {

            }
        };
    }


    getButtom({ label, url, corner }) {
        var select = (this.props.url != url)
        const radius = 8;
        var extraStyle = {
            // borderRadius: 8,
        };
        if (corner == "left") {
            extraStyle = {
                borderTopLeftRadius: radius,
                borderBottomLeftRadius: radius
            }
        }
        if (corner == "right") {
            extraStyle = {
                borderTopRightRadius: radius,
                borderBottomRightRadius: radius
            }
        }
        return <SView col={"xs-6"} center height={50} style={{
            backgroundColor: !select ? STheme.color.primary : STheme.color.secondary,
            borderWidth: 2,
            borderColor: STheme.color.primary,
            ...extraStyle,

        }} onPress={() => {
            if (url) {
                SNavigation.navigate(url);
            }
        }}>
            <SText fontSize={18} color={!select ? STheme.color.secondary : STheme.color.primary}>{label}</SText>
        </SView>
    }
    render() {
        return (
            <SView col={"xs-12"} center height={50} row>
                {this.getButtom({ label: "LISTA", url: "/explorar", corner: "left" })}
                {this.getButtom({ label: "MAPA", url: "/mapa", corner: "right" })}
            </SView >
        );
    }
}
export default (index);