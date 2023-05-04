import { SStorage } from "servisofts-component";
import { SAction } from "servisofts-model";
import SSocket from 'servisofts-socket';
import Model from "../..";
export default class Action extends SAction {

    getCurrentLocation(){
        return this._getReducer().location
    }
    
    onChange(data) {
        var obj = {
            component: "background_location",
            type: "onChange",
            estado: "cargando",
            key_usuario: Model.usuario.Action.getKey(),
            data: data,
        }
        SSocket.sendHttpAsync(SSocket.api.root + "api", obj)
        this._dispatch(obj);
        return true;
    }

    getByKeyAsync(key_usuario){
        return new Promise((resolve,reject)=>{
            SSocket.sendPromise({
                ...this.model.info,
                type:"getByKey",
                key_usuario:key_usuario??Model.usuario.Action.getKey()
            }).then((resp)=>{
                resolve(resp)    
            }).catch(resp=>{
                reject(resp)
            })
        })
    }
}