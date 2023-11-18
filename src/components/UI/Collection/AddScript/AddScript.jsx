import React, {useContext} from 'react';
import cl from './AddScript.module.css'
import CollectionService from "../../../../services/CollectionService";
import Popup from "reactjs-popup";
import {Context} from "../../../../index";
import {observer} from "mobx-react-lite";

const AddScript = ({index}) => {
    const {store} = useContext(Context);
    return (
        <Popup
            trigger=
                {
                    <img src={"./add.png"} className={cl.icon}/>
                }
            position="bottom center"
            on={"click"}
            onOpen={() => {
            }}
            onClose={() => {
            }}
        >
            <div className={cl.overlay}>
                {
                    store.scripts.map((el) => {
                        return (
                            <div key={el.id} className={cl.element} onClick={() => {
                                let updCollection = {...store.collections[index]}
                                updCollection.content = [...updCollection.content, el.id]
                                CollectionService.UpdateCollection(updCollection).then(r => {
                                    store.setCollections(store.collections.map((el, index2) => {
                                        if (index2 === index)
                                            return r.data
                                        return el
                                    }));
                                })
                            }}>
                                {el.name}
                            </div>
                        )
                    })
                }
            </div>
        </Popup>
    );
};

export default observer(AddScript);