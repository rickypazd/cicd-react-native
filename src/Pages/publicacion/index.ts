import { SPage, SPageListProps } from 'servisofts-component';
import root from './root';
import add from './add';
export const Parent = {
    name: "publicacion",
    path: `/publicacion`,
}
export default SPage.combinePages(Parent.name, {
    "": root,
    add,

});