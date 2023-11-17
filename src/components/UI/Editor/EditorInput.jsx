import React, {useState} from 'react';
import cl from './EditorInput.module.css'
import TextareaAutosize from 'react-textarea-autosize';

const EditorInput = (props) => {
    const [code, setCode] = useState('');
    return (
        <div>
            <TextareaAutosize
                className={cl.editor_input}
                type={"textArea"}
                onChange={e => {setCode(e.target.value)}}
                value={code}/>
        </div>
    );
};

export default EditorInput;