import { useReducer, useState } from "react";
import Reducer from "./reducer";


const UseReducer = () => {
    const [text, setText] = useState('');
    const [state, dispatch] = useReducer(Reducer, [])

    const savePhrases = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_ITEM', text})
    }

    const excludeItem = (text) => {
        dispatch({type: 'REMOVE_ITEM', text})
    }

    return (<>
        <h1>UseReducer</h1>
        <form onSubmit={savePhrases}>
            <textarea required value={text}
            onChange={event => setText(event.target.value)}
            placeholder="Text here"
            ></textarea>
            <br /><br />
            <button>Save</button>
        </form>
        {state.map((item, index) => <p key={index}>{item} - <button onClick={() => excludeItem(item)}>X</button></p>)}
    </>)
}

export default UseReducer