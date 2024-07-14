


const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if(state.includes(action.text)) {
                alert('Oops...The sentence cannot be duplicated')
                return state;
            }

            if(action.text.length < 20) {
                alert('Oops...The sentence must be longer than 20 characters')
                return state;
            }          

            return [...state, action.text]

        case 'REMOVE_ITEM':
            return state.filter(item => item !== action.text)
        default:
            return state.filter(action.text)
    }
}

export default Reducer