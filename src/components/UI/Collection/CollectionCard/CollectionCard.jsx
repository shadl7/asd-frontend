import React, {useContext} from 'react';
import cl from './CollectionCard.module.css'
import CollectionService from "../../../../services/CollectionService";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";
import Editor from "../../Editor/Editor";
import AutoSaver from "../../../AutoSaver";
import CollectionName from "../CardName/CollectionName";

const CollectionCard = ({index}) => {
    const {store} = useContext(Context);
    /*const [showEditor, setShowEditor] = useState(false)
    let autoSaver = new AutoSaver((data) => {
        let script = {...store.scripts[index]}
        script.content = data
        ScriptService.UpdateScript(script)
    }, null)*/ // TODO: collection edit
    return (
        <div className={cl.card}>
            <div className={cl.header}>
                <CollectionName name={store.collections[index].name} index={index}/>
                <div className={cl.side}>
                    <img src={"./expand.png"} className={cl.icon} onClick={
                        (e) => {
                            /*setShowEditor(!showEditor)*/
                        }
                    }/>
                    <img src={"./settings.png"} className={cl.icon} onClick={
                        (e) => { // TODO: collection's settings
                        }
                    }/>
                    <img src={"./delete.png"} className={cl.icon} alt={"X"} onClick={
                        (e) => {
                            CollectionService.RemoveCollection(store.collections[index].id).then(r => {
                                store.setCollections(store.collections.filter(
                                    (el) => {return el.id !== store.collections[index].id}
                                ))
                            });
                        }
                    }/>
                </div>
            </div>
        </div>
    );
};

export default observer(CollectionCard);