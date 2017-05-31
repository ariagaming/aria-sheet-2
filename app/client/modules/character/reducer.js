
/**
 * The default character reducer
 * @param {*} state 
 * @param {*} action 
 */
const characterReducer = (state = {}, action) => {
    //debugger;
    //console.log(state.character.race);
    console.log('ACTION: %c ' + action.type, 'color:blue');
    let newCharacter;
    switch (action.type) {
        case 'SHOW_DIALOG':
            const { pages } = action.value;
            newCharacter = JSON.parse(JSON.stringify(state.character));
            newCharacter.race = { title: "none" };
            return { ...state, dialog: { ...state.dialog, shown: true, pages: pages, index: 0 }, newCharacter };

        case 'SHOW_RACE_DIALOG':
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return { ...state, dialog: { ...state.dialog, raceDialogShown: true, index: 0 }, newCharacter };

        case 'TURN_PAGE':
            return { ...state, dialog: { ...state.dialog, index: action.payload } };

        case 'HIDE_DIALOG':
            return { ...state, dialog: { ...state.dialog, shown: false, raceDialogShown: false, pages: [] } };

        case 'BUY':
            newCharacter = state.newCharacter;

            const { prop, buyable, source, max } = action.payload;
            const remaining = newCharacter[prop].reduce((acc, l) => {
                let total = 0;
                if (l.bought === source) {
                    total++;
                }
                if (l.expertise === source) {
                    total++;
                }
                return acc - total;
            }, max);
            const n = newCharacter[prop].map(b => {
                if (b.title === buyable.title) {
                    if (remaining > 0) {
                        if (b.expertise) {
                            b.bought = (b.bought === source ? false : b.bought);
                            b.expertise = (b.expertise === source ? false : b.expertise);

                            if (!b.bought && b.expertise) {
                                b.bought = b.expertise;
                                b.expertise = false;
                            }
                        }
                        else if (b.bought) {
                            b.expertise = source;
                        }
                        else {
                            b.bought = source;
                        }
                    }
                    else {
                        b.bought = false;
                        b.expertise = false;
                    }
                }
                return b;
            })
            newCharacter = { ...newCharacter, [prop]: n };
            return { ...state, newCharacter: newCharacter };

        case 'SELECT_RACE':

            const newStatistics = {
                ...state.newCharacter.statistics,
                STR: { ...state.newCharacter.statistics.STR, race: action.payload.stats.STR },
                AGI: { ...state.newCharacter.statistics.AGI, race: action.payload.stats.AGI },
                INU: { ...state.newCharacter.statistics.INU, race: action.payload.stats.INU },
                PER: { ...state.newCharacter.statistics.PER, race: action.payload.stats.PER }
            }

            const skills = state.newCharacter.skills.map(skill => {
                let bought = false;
                if (state.newCharacter.skills.indexOf(skill.title) > -1) {
                    bought = "race";
                }
                return {
                    ...skill,
                    bought: (skill.bought === "race" ? bought : skill.bought),
                    expertise: (skill.expertise === "race" ? false : skill.expertise)
                }
            });



            newCharacter = {
                ...state.newCharacter,
                race: action.payload,
                statistics: newStatistics,
                skills: skills
            };

            return { ...state, newCharacter };

        case 'UPDATE_CHARACTER':

            const c = JSON.parse(JSON.stringify(state.newCharacter));
            c.statistics.STR.total = c.statistics.STR.race + c.statistics.STR.base;
            c.statistics.AGI.total = c.statistics.AGI.race + c.statistics.AGI.base;
            c.statistics.INU.total = c.statistics.INU.race + c.statistics.INU.base;
            c.statistics.PER.total = c.statistics.PER.race + c.statistics.PER.base;

            let dialog = { ...state.dialog, shown: false, raceDialogShown: false, pages: [] };
            return { ...state, dialog, character: c, newCharacter: null };

        default:
            return state

    }
}

const wrapperReducer = (state = {}, action) => {
    const result = characterReducer(state, action);
    //localStorage.setItem('state', JSON.stringify(result));
    return result;
}

export default wrapperReducer;