import { SStorage } from "servisofts-component";
import { SAction } from "servisofts-model";
import SSocket from 'servisofts-socket'
import Model from "../..";

export default class Action extends SAction {

    getAll(extra?: {}) {
        return this.getAllActivos();
    }
    getAllActivos(extra?: {}) {
        var reducer = this._getReducer();
        const data = reducer?.data_activos;
        if (!data) {
            if (reducer.estado == "cargando") return null;
            const petition = {
                ...this.model.info,
                type: "getAllActivos",
                estado: "cargando",
                ...extra
            }
            SSocket.send(petition);
            return null;
        }
        return data;
    }
    getEnCurso() {
        const data = this.getAllActivos()
        if (!data) return null;
        var key_usuario = Model.usuario.Action.getKey();
        if (!key_usuario) return null;
        var objFinal = Object.values(data).filter((a: any) => key_usuario == a.key_usuario
            && a.state != "entregado"
            && a.state != "pendiente_pago"
            && a.state != "timeout_pago"
        )
        return objFinal;
    }
    getDetalle(key, reload) {
        var reducer = this._getReducer();
        if (reload) {
            reducer.data_activos = null;
        }
        var data = reducer.data_activos;

        if (data) {
            if (data[key]) {
                return data[key];
            }
        }
        if (reducer.estado == "cargando") return null;
        const petition = {
            ...this.model.info,
            type: "getDetalle",
            estado: "cargando",
            key_pedido: key,
            key_usuario: Model.usuario.Action.getKey()
        }
        SSocket.send(petition)
    }

    action({ key_pedido, action }) {
        return SSocket.sendPromise({
            "component": "pedido",
            "type": "action",
            "key_pedido": key_pedido,
            "action": action
        })
    }
}