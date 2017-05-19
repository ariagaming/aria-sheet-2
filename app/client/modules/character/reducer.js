
/**
 * The default character reducer
 * @param {*} state 
 * @param {*} action 
 */
const characterReducer = (state = {}, action) => {
    let newCharacter;
    switch (action.type) {
        case 'SHOW_DIALOG':
            const { pages } = action.value;
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return { ...state, dialog: { ...state.dialog, shown: true, pages: pages }, newCharacter };

        case 'HIDE_DIALOG':
            return { ...state, dialog: { ...state.dialog, shown: false, pages: [] } };

        case 'BUY':
            const { prop, buyable, source } = action.payload;
            const n = state.newCharacter[prop].map(b => {
                if (b.title === buyable.title) {
                    if (b.expertise) {
                        b.bought = (b.bought === source ? false : b.bought);
                        b.expertise = (b.expertise === source ? false : b.expertise);
                    }
                    else if (b.bought) {
                        b.expertise = source;
                    }
                    else {
                        b.bought = source;
                    }
                }
                return b;
            })
            newCharacter = { ...state.newCharacter, [prop]: n };
            return { ...state, newCharacter: newCharacter };

        case 'UPDATE_CHARACTER':
            return { ...state, dialog: { ...state.dialog, shown: false, pages: [] }, character: JSON.parse(JSON.stringify(state.newCharacter)), newCharacter: null };

        default:
            return state

    }
}

export default characterReducer;