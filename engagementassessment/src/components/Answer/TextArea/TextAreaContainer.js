import React, {useState} from 'react';


export default function TextAreaContainer(props){
    const [text, setText] = useState('');

    return(
        <React.Fragment>
            <div >
            <textarea value={text} onChange={e => setText(e.target.value)} />
            </div>
        </React.Fragment>
    )
}
