import { SModel } from "servisofts-model";
import Usuario from "servisofts-rn-usuario";
import Roles_permisos from "servisofts-rn-roles_permisos";
import Geolocation from "servisofts-rn-geolocation"
import Chat from 'servisofts-rn-chat'
import calistenia from "./calistenia";


const Model = {
    ...Usuario.Model,
    ...Roles_permisos.Model,
    ...Geolocation.Model,
    ...Chat.Model,
    ...calistenia,
}

Usuario.init({
    cabecera: "registro_administrador",
    Columns: {
        "key": { type: "text", pk: true },
        "Nombres": { type: "text", notNull: true, editable: true },
        "Apellidos": { type: "text", notNull: true, editable: true },
        "CI": { type: "text", notNull: true, editable: true },
        "Correo": { type: "text", notNull: true, editable: true },
        "FechaNacimiento": { type: "text", notNull: true, editable: true },
        "Telefono": { type: "text", notNull: true, editable: true },
        "Password": { type: "text", notNull: true, editable: true },
    },
});
Roles_permisos.init({});
Geolocation.init({});
Chat.init({});

export default {
    ...Model,
    ...SModel.declare(Model)
}