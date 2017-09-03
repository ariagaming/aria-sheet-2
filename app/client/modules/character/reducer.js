
import firebase from 'firebase';
import characterTemplate from './mocks/__character';
import * as helpers from './helpers';
/**
 * The default character reducer
 * @param {*} state 
 * @param {*} action 
 */
const characterReducer = (state = {}, action) => {
    const database = firebase.database();
    console.log('ACTION: %c ' + action.type, 'color:blue');
    let newCharacter;
    switch (action.type) {

        case "HASH_CHANGED":
            return { ...state };

        case "SET_USER":
            return { ...state, user: action.payload };

        case 'GET_USER_CHARACTERS':

            return { ...state };

        case "CHANGE_NAME":
            return { ...state, character: { ...state.character, name: action.payload } };

        case 'SHOW_DIALOG':
            const { pages } = action.value;
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return {
                ...state,
                dialog: {
                    ...state.dialog,
                    shown: true,
                    pages: pages,
                    index: 0
                },
                newCharacter
            };

        case 'SHOW_RACE_DIALOG':
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return { ...state, dialog: { ...state.dialog, raceDialogShown: true, index: 0 }, newCharacter };

        case 'SHOW_PROFESSION_DIALOG':
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return { ...state, dialog: { ...state.dialog, professionsDialogShown: true, index: 0 }, newCharacter };

        case 'SHOW_SELECT_CHARACTER_DIALOG':
            return {
                ...state,
                dialog: {
                    ...state.dialog,
                    selectCharacterDialogShown: true
                }
            }
        case 'SELECT_CHARACTER':
            localStorage.setItem('character', JSON.stringify(action.payload));
            return {
                ...state,
                newCharacter: { ...action.payload }
            }
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters: [...(action.payload || [])]
            }

        case 'SHOW_ARMOR_DIALOG':
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return { ...state, dialog: { ...state.dialog, armorDialogShown: true, index: 0 }, newCharacter };

        case 'TURN_PAGE':
            return { ...state, dialog: { ...state.dialog, index: action.payload } };

        case 'SET_CHARACTER_XP':
            const _xp = action.payload;
            const levelCaps = [0, 21, 33, 46, 60, 75, 91, 108, 126, 145, 165, 186, 208, 211];
            const level = levelCaps.reduce((acc, cap) => (cap < _xp ? acc + 1 : acc), 0);
            return {
                ...state,
                newCharacter: {
                    ...state.character,
                    level,
                    XP: {
                        ...state.character.XP,
                        source: action.payload
                    }
                }
            }

        case 'HIDE_DIALOG':
            return {
                ...state,
                dialog: {
                    ...state.dialog,
                    shown: false,
                    armorDialogShown: false,
                    raceDialogShown: false,
                    professionsDialogShown: false,
                    selectCharacterDialogShown: false,
                    pages: []
                }
            };

        case "SPELL_RANK_INCREASE":
            return (() => {
                const _spell = action.payload.spell;
                const _category = action.payload.category;
                const classes = state.newCharacter.classes.map(__class => {
                    if (__class.name === _category) {
                        const classSpells = __class.spells.map(__spell => {
                            if (__spell.title === _spell.title) {
                                return {
                                    ...__spell,
                                    rank: (__spell.rank === 0 || __spell.rank) ? (__spell.rank + 1) : 0
                                };
                            }
                            else {
                                return __spell;
                            }
                        });
                        return {
                            ...__class,
                            spells: classSpells
                        };
                    }
                    else {
                        return __class;
                    }
                });
                const spells = state.newCharacter.spells.map(__spellList => {
                    if (__spellList.title === _category) {
                        return {
                            ...__spellList,
                            spells: __spellList.spells.map(__spell => {
                                if (__spell.title === _spell.title) {
                                    return {
                                        ...__spell,
                                        rank: (__spell.rank === 0 || __spell.rank) ? (__spell.rank + 1) : 0
                                    };
                                }
                                else {
                                    return __spell;
                                }
                            })
                        };
                    }
                    return { ...__spellList };
                });

                return {
                    ...state,
                    newCharacter: {
                        ...state.newCharacter,
                        classes: classes,
                        spells: spells
                    }
                };
            })();
        case "SPELL_RANK_DECREASE":
            return (() => {
                const _spell = action.payload.spell;
                const _category = action.payload.category;
                const classes = state.newCharacter.classes.map(__class => {
                    if (__class.name === _category) {
                        const classSpells = __class.spells.map(__spell => {
                            if (__spell.title === _spell.title) {
                                let newRank = __spell.rank ? (__spell.rank - 1) : 0;
                                if (__spell.baseRank && newRank < __spell.baseRank) {
                                    newRank = __spell.baseRank;
                                }
                                return {
                                    ...__spell,
                                    rank: newRank
                                };
                            }
                            else {
                                return __spell;
                            }
                        });
                        return {
                            ...__class,
                            spells: classSpells
                        };
                    }
                    else {
                        return __class;
                    }
                });
                const spells = state.newCharacter.spells.map(__spellList => {
                    if (__spellList.title === _category) {
                        return {
                            ...__spellList,
                            spells: __spellList.spells.map(__spell => {
                                if (__spell.title === _spell.title) {
                                    const value = __spell.rank ? (__spell.rank - 1) : 0;
                                    return {
                                        ...__spell,
                                        rank: value < 0 ? 0 : value
                                    };
                                }
                                else {
                                    return __spell;
                                }
                            })
                        };
                    }
                    return { ...__spellList };
                });

                return {
                    ...state,
                    newCharacter: {
                        ...state.newCharacter,
                        classes: classes,
                        spells: spells
                    }
                };
            })();

        case 'SELECT_SPELL_CHOICE':
            const { spellIndex, choiceIndex, category, spellId } = action.payload;
            if (category === "General") {
                // the general category is at the root of the character

            }
            else {
                const classes = state.newCharacter.classes.map(__class => {
                    if (__class.title === category) {
                        __class.spells.forEach(spell => {
                            if (spell.id === spellId) {
                                spell.choices.forEach(choice => choice.selected = false);
                                spell.choices[choiceIndex].selected = true;
                            }
                        });
                    }
                    return __class;
                });
                return {
                    ...state,
                    newCharacter: {
                        ...state.newCharacter,
                        classes
                    }
                }
            }



            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter
                }
            }

        case 'TEMPLATE_WEAPON':
            const weapons = state.newCharacter.weapons.map(w => {
                const { template, weapon } = action.payload;

                if (w.title === weapon.title) {
                    w.title = template.title;
                    w.isRanged = template.ranged;
                    w.isShield = template.isShield;
                    w.initiative = template.initiative || 10;

                    if (template.damage) {
                        const [dmg, constant] = template.damage.split('+');
                        const [numberOfDice, diceSides] = dmg.split('d');
                        w.numberOfDice = numberOfDice;
                        w.diceSides = diceSides;
                        w.constant = +(constant || 0);
                    }
                    let desc = [];
                    // create a description from the statistics
                    const statistics = ["STR", "AGI", "INU", "PER"];
                    statistics.forEach(stat => {
                        if (w[stat] && w[stat] > 0) {
                            desc.push(stat + ":" + w[stat]);
                        }
                    });
                    state.newCharacter.feats.forEach(f => {
                        w[f.title] = template[f.title];
                        const value = w[f.title];
                        if (value && value > 0) {
                            desc.push(f.title + ":" + value);
                        }
                    });

                    w.description = desc.join(', ');
                }
                return w;
            });
            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    weapons: weapons
                }
            }

        case 'SET_ACTIVE_WEAPON':
            return {
                ...state,
                newCharacter: {
                    ...state.character,
                    weapons: state.character.weapons.map(w => {
                        if (w.title === action.payload.title) {
                            w.isActive = !w.isActive;
                        }
                        return w;
                    })
                }
            };

        case 'CHANGE_ARMOR':
            const locations = ["head", "shoulders", "body", "torso", "arms", "legs", "feet"];
            newCharacter = {
                ...state.newCharacter,
                armor: {
                    ...state.newCharacter.armor,
                    type: action.payload.title,
                    base: action.payload.armor
                },
                movement: {
                    ...state.newCharacter.movement,
                    armor: (action.payload.movement || 0)
                },
                equipment: state.newCharacter.equipment.map(eq => {
                    if (locations.indexOf(eq.location) > -1) {
                        eq.title = action.payload.title;
                    }
                    return eq;
                })
            }
            return { ...state, newCharacter };

        case "CLOSE_DEFAULT_DIALOG":
            return {
                ...state,
                dialog: {
                    title: "",
                    showDialog: false,
                    description: ""
                }
            }

        case 'SAVE_CHARACTER':
            const { name } = state.character;
            if (name && name.length > 2 && name.toLowerCase() !== "new character") {

                const characterKey = state.character.id || database.ref().child('characters').push().key;
                const character = {
                    ...state.character,
                    email: (state.character.email || state.user.email),
                    id: characterKey
                };
                const item = { id: character.id, user: character.email, name: character.name };
                let updates = {};
                updates['/characters/' + characterKey] = item;
                updates['/user-characters/' + character.email.replace('.', '&dot&') + '/' + characterKey] = character;

                setTimeout(() => {
                    firebase.database().ref().update(updates);
                });

                localStorage.setItem('character', JSON.stringify(state.character));

                return {
                    ...state,
                    character
                };
            } else {
                return {
                    ...state,
                    dialog: {
                        title: "No character name",
                        showDialog: true,
                        description: "Your character should have a name"
                    }
                };
            }

        case 'NEW_CHARACTER':
            localStorage.removeItem('character');
            return {
                ...state,
                character: { ...characterTemplate }
            }

        case 'ADD_LANGUAGE':
            newCharacter = state.newCharacter;
            const LanguageExists = state.newCharacter.languages.filter(l => l.title === action.payload).length > 0;
            if (!LanguageExists) {
                return {
                    ...state,
                    newCharacter: {
                        ...state.newCharacter,
                        languages: [...state.newCharacter.languages, { title: action.payload, bought: false, expertise: false, total: 0 }]
                    }
                }
            }
            else {
                return { ...state };
            }

        case 'REMOVE_LANGUAGE':
            /*
            Remove a language by title. action.payload should only be the title
            */
            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    languages: state.newCharacter.languages.filter(l => l.title !== action.payload)
                }
            };

        case 'RENAME_LANGUAGE':
            const result = {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    languages: state.newCharacter.languages.map((l, i) => {
                        if (i === action.payload.index) {
                            return { ...l, title: action.payload.title };
                        }
                        else {
                            return { ...l };
                        }
                    })
                }
            };
            return result;

        case 'BUY_LANGUAGE':
            const newLanguages = state.newCharacter.languages.map(l => {
                if (l.title === action.payload.title) {
                    if (l.expertise === "xp" && l.bought === "xp") {
                        return { ...l, bought: false, expertise: false };
                    }
                    else if (l.expertise === "xp" && l.bought) {
                        return { ...l, expertise: false };
                    }
                    else if (!l.expertise && l.bought) {
                        return { ...l, expertise: "xp" };
                    }
                    else if (!l.bought) {
                        return { ...l, bought: "xp" };
                    }
                }
                return l;
            });
            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    languages: newLanguages
                }
            }

        case 'BUY':
            const { source, prop, buyable, max = 999 } = action.payload;

            // if we already have 2 items of the same buyable in the list we'll remove all of them:
            const titlesInList = (state.newCharacter.buyables[prop][source] || []).filter(s => s === buyable.title).length;
            const currentNumberOfItems = (state.newCharacter.buyables[prop][source] || []).length;
            if (titlesInList >= 2 || currentNumberOfItems >= max) {
                state.newCharacter.buyables[prop][source] = (state.newCharacter.buyables[prop][source] || []).filter(s => s !== buyable.title);
            }
            else {
                state.newCharacter.buyables[prop][source] = [...(state.newCharacter.buyables[prop][source] || []), buyable.title];
            }
            state.newCharacter[prop] = helpers.calculatePropertyList(state.newCharacter, prop);
            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter
                }
            }


        case 'BUY_FEAT':
            const { feat, value } = action.payload;
            const feats = state.newCharacter.feats.map(f => {
                if (f.title === feat.title) {
                    f.bought = value;
                }
                return f;
            })

            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    feats
                }
            };

        case 'SELECT_RACE':

            return (() => {
                const newStatistics = {
                    ...state.newCharacter.statistics,
                    STR: { ...state.newCharacter.statistics.STR, race: action.payload.stats.STR },
                    AGI: { ...state.newCharacter.statistics.AGI, race: action.payload.stats.AGI },
                    INU: { ...state.newCharacter.statistics.INU, race: action.payload.stats.INU },
                    PER: { ...state.newCharacter.statistics.PER, race: action.payload.stats.PER }
                }

                const newFeats = state.newCharacter.feats.map(feat => ({
                    ...feat,
                    race: (action.payload.feats[feat.title] || 0)
                }));

                const newLanguages = state
                    .newCharacter
                    .languages
                    .filter(l => l.boughtFrom !== "race")
                    .concat((action.payload.languages || []).map(l => ({ ...l, boughtFrom: "race" })));

                let newState = {
                    ...state,
                    newCharacter: {
                        ...state.newCharacter,
                        race: action.payload,
                        statistics: newStatistics,
                        feats: newFeats,
                        languages: newLanguages,
                        weapons: state.newCharacter.weapons.concat(action.payload.weapons || []),
                        buyables: {
                            ...state.newCharacter.buyables,
                            skills: {
                                ...state.newCharacter.buyables.skills,
                                race: (action.payload.skills || [])
                            },
                            resistances: {
                                ...state.newCharacter.buyables.resistances,
                                race: (action.payload.resistances || [])
                            },
                            professions: {
                                ...state.newCharacter.buyables.professions,
                                race: (action.payload.professions || [])
                            }
                        }
                    }
                };
                newState.newCharacter.skills = helpers.calculatePropertyList(newState.newCharacter, "skills");
                newState.newCharacter.professions = helpers.calculatePropertyList(newState.newCharacter, "professions");
                return newState;
            })();

        case 'SELECT_PROFESSION':

            return (() => {

                //const filteredClasses = state.newCharacter.classes.filter(c => c.title !== action.payload.title);
                //const newClasses = [...filteredClasses, action.payload].filter(c => c.title !== "Unknown");

                newCharacter = {
                    ...state.newCharacter,
                    hp: {
                        ...state.newCharacter.hp,
                        STRFactor: (action.payload.HPFactor || 1)
                    },
                    weapons: state.newCharacter.weapons.concat(action.payload.weapons || []),
                    classes: [action.payload],
                    buyables: {
                        ...state.newCharacter.buyables,
                        skills: {
                            ...state.newCharacter.buyables.skills,
                            profession: (action.payload.skills || [])
                        },
                        resistances: {
                            ...state.newCharacter.buyables.resistances,
                            profession: (action.payload.resistances || [])
                        },
                        professions: {
                            ...state.newCharacter.buyables.professions,
                            profession: (action.payload.professions || [])
                        }
                    }
                };

                newCharacter = {
                    ...newCharacter,
                    skills: helpers.calculatePropertyList(newCharacter, "skills")
                };

                return { ...state, newCharacter };
            })();

        case 'REMOVE_PRFESSION':
            return { ...state };

        case 'PROFESSION_SPECIALIZATION':
            const { classTitle, specialization } = action.payload;
            const __specialization =
                state
                    .newCharacter
                    .classes
                    .filter(c => c.title === classTitle)[0]
                    .specializations
                    .filter(s => s.title === specialization)[0];

            const __classes = state.newCharacter.classes.map(c => {
                if (c.title === classTitle) {
                    return {
                        ...c,
                        specializations: c.specializations.map(s => {
                            if (s.title === specialization) {
                                return { ...s, selected: true };
                            }
                            else {
                                return { ...s, selected: false };
                            }
                        })
                    };
                } else {
                    return c;
                }
            });
            //const __spells = state.newCharacter.spells.concat(__specializationSpells);

            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    classes: __classes
                }
            };
        case "BUY_SPECIAL":

            const exists = state.newCharacter.specials.filter(special => special.title === action.payload.title).length > 0;
            if (exists) {
                return {
                    ...state,
                    newCharacter: {
                        ...state.newCharacter,
                        specials: state.newCharacter.specials.filter(special => special.title !== action.payload.title)
                    }
                }
            }
            else {

                const generalSpells = state.newCharacter.spells[0];
                generalSpells.spells = generalSpells.spells.concat(action.payload.spells || []);

                return {
                    ...state,
                    newCharacter: {
                        ...state.newCharacter,
                        spells: [generalSpells],
                        specials: [...state.newCharacter.specials, action.payload]
                    }
                }
            }
        case "CHANGE_CHARACTER_INFORMATION":
            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    information: action.payload
                }
            }

        case 'UPDATE_CHARACTER':

            const c = JSON.parse(JSON.stringify(state.newCharacter));
            if (!c) return state;
            const __spells = helpers.getSpells(c) || [];
            const __specials = helpers.getSpecials(c) || [];

            /* STATISTICS */
            c.statistics.STR.race = (c.race && c.race.stats) ? c.race.stats.STR : 0;
            c.statistics.STR.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.STR || 0), 0);
            c.statistics.STR.equipment = c.equipment.reduce((acc, eq) => acc + (eq.STR || 0), 0);
            c.statistics.STR.profession = c.classes.filter(c => c.title.toLowerCase() !== "unknown").map(c => c.stats.STR).reduce((acc, s) => acc + s, 0);
            c.statistics.STR.specials = c.specials.reduce((acc, special) => acc + (special.STR || 0), 0);
            c.statistics.STR.level = c.level * 2;
            c.statistics.STR.total =
                c.statistics.STR.race + c.statistics.STR.base + c.statistics.STR.equipment +
                c.statistics.STR.weapon + c.statistics.STR.profession + c.statistics.STR.specials +
                c.statistics.STR.level;
            c.statistics.STR.bonus = Math.floor(c.statistics.STR.total / 10);

            c.statistics.AGI.race = (c.race && c.race.stats) ? c.race.stats.AGI : 0;
            c.statistics.AGI.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.AGI || 0), 0);
            c.statistics.AGI.equipment = c.equipment.reduce((acc, eq) => acc + (eq.AGI || 0), 0);
            c.statistics.AGI.profession = c.classes.filter(c => c.title.toLowerCase() !== "unknown").map(c => c.stats.AGI).reduce((acc, s) => acc + s, 0);
            c.statistics.AGI.specials = c.specials.reduce((acc, special) => acc + (special.AGI || 0), 0);
            c.statistics.AGI.level = c.level * 2;
            c.statistics.AGI.total =
                c.statistics.AGI.race + c.statistics.AGI.base + c.statistics.AGI.equipment +
                c.statistics.AGI.weapon + c.statistics.AGI.profession + c.statistics.AGI.specials +
                c.statistics.AGI.level;
            c.statistics.AGI.bonus = Math.floor(c.statistics.AGI.total / 10);
            // 3 AGI bonus ranks you get 1 armor rank.
            c.armor.stats = Math.floor(c.statistics.AGI.bonus / 3);

            c.statistics.INU.race = (c.race && c.race.stats) ? c.race.stats.INU : 0;
            c.statistics.INU.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.INU || 0), 0);
            c.statistics.INU.equipment = c.equipment.reduce((acc, eq) => acc + (eq.INU || 0), 0);
            c.statistics.INU.profession = c.classes.filter(c => c.title.toLowerCase() !== "unknown").map(c => c.stats.INU).reduce((acc, s) => acc + s, 0);
            c.statistics.INU.specials = c.specials.reduce((acc, special) => acc + (special.INU || 0), 0);
            c.statistics.INU.level = c.level * 2;
            c.statistics.INU.total =
                c.statistics.INU.race + c.statistics.INU.base + c.statistics.INU.equipment +
                c.statistics.INU.weapon + c.statistics.INU.profession + c.statistics.INU.specials +
                c.statistics.INU.level;
            c.statistics.INU.bonus = Math.floor(c.statistics.INU.total / 10);
            c.magicArmor.stats = c.statistics.INU.bonus;

            c.statistics.PER.race = (c.race && c.race.stats) ? c.race.stats.PER : 0;
            c.statistics.PER.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.PER || 0), 0);
            c.statistics.PER.equipment = c.equipment.reduce((acc, eq) => acc + (eq.PER || 0), 0);
            c.statistics.PER.profession = c.classes.filter(c => c.title.toLowerCase() !== "unknown").map(c => c.stats.PER).reduce((acc, s) => acc + s, 0);
            c.statistics.PER.specials = c.specials.reduce((acc, special) => acc + (special.PER || 0), 0);
            c.statistics.PER.level = c.level * 2;
            c.statistics.PER.total =
                c.statistics.PER.race + c.statistics.PER.base + c.statistics.PER.equipment +
                c.statistics.PER.weapon + c.statistics.PER.profession + c.statistics.PER.specials +
                c.statistics.PER.level;
            c.statistics.PER.bonus = Math.floor(c.statistics.PER.total / 10);

            c.skills = helpers.calculatePropertyList(c, "skills");

            c.feats = c.feats.map(feat => {
                feat.weapon = c.weapons.filter(w => w.isActive).filter(w => w[feat.title]).reduce((acc, weapon) => acc + weapon[feat.title], 0);
                feat.equipment = c.equipment.filter(w => w[feat.title]).reduce((acc, equipment) => acc + equipment[feat.title], 0);
                feat.specials = helpers.getSpecials(c).filter(s => s[feat.title]).reduce((acc, special) => acc + special[feat.title], 0);

                feat.spells =
                    __spells.reduce((acc, category) => {
                        return acc + (category.spells || []).reduce((acc, spell) => {
                            const choiceValue = (spell.choices || []).filter(choice => choice.selected).reduce((acc, cs) => acc + (cs[feat.title] || 0), 0);
                            const spellValue = spell[feat.title] || 0;
                            return acc + choiceValue + spellValue;
                        }, 0);
                    }, 0);

                feat.race = feat.race || 0;
                feat.sum = feat.base + feat.bought + feat.weapon + feat.equipment + feat.specials + feat.race + feat.spells;
                feat.total = feat.sum * (feat.factor || 1);

                // here we'll update specific feats
                if (feat.title === "Movement") {
                    c.movement.feats = feat.sum;
                }
                else if (feat.title === "Expertise") {
                    c.expertise.feats = feat.total;
                }
                else if (feat.title === "Toughness") {
                    c.armor.feats = feat.sum;
                }
                else if (feat.title === "BS Expertise") {
                    c.expertise.bsExpertise = feat.total;
                }
                else if (feat.title === "WS Expertise") {
                    c.expertise.wsExpertise = feat.total;
                }
                else if (feat.title === "Defense Expertise") {
                    c.expertise.defenseExpertise = feat.total;
                }
                else if (feat.title === "Magic") {
                    c.expertise.magicExpertise = feat.total;
                }
                else if (feat.title === "DMG adjstm") {
                    c.weapons.forEach(w => {
                        w.dmgFeat = feat.total;
                    });
                }
                else if (feat.title === "Aura") {
                    c.magicArmor.feats = feat.sum;
                }
                else if (feat.title === "Stamina") {
                    c.hp.feats = feat.total;
                }
                else if (feat.title === 'Endurance') {
                    c.ap.feats = feat.total;
                }
                else if (feat.title === "Initiative") {
                    c.initiative.sum = feat.sum;
                    c.initiative.total = feat.total;
                }
                else if (feat.title === "Recuperate") {
                    c.ap.recovery = 4 + feat.total;
                }

                return feat;
            });

            c.expertise.level = c.level;
            c.expertise.total = c.expertise.feats + c.expertise.level;
            c.armor.sum = c.armor.feats + c.armor.base + c.armor.stats + c.armor.equipment + c.armor.armor;
            c.armor.total = Math.floor(c.armor.sum * c.armor.factor);
            c.armor.ac = Math.floor((c.expertise.total / 2) + (c.armor.total / 10));
            c.magicArmor.sum = c.magicArmor.feats + c.magicArmor.base + c.magicArmor.stats + c.magicArmor.equipment + c.magicArmor.armor;
            c.magicArmor.total = c.magicArmor.sum * 5;

            c.movement.sum = c.movement.base + c.movement.armor + c.movement.feats + c.movement.race + c.movement.profession;
            c.movement.total = c.movement.sum * 3;

            let weaponSkill = 0;
            let ballisticSkill = 0;
            c.skills = c.skills.map(s => {
                s.statModifier = c.statistics[s.stat].bonus;

                s.spells = __spells.reduce((acc, category) => {
                    category.spells.reduce((acc, spell) => {
                        if (spell.type === "choice") {
                            const choice = spell.choices.filter(choice => choice.selected)[0];
                            return choice ? acc + (choice[s.title] || 0) : acc;
                        }
                        else {
                            return spell ? acc + (spell[s.title] || 0) : acc;
                        }
                    }, 0);
                }, 0);

                s.weapons = c.weapons.reduce((acc, weapon) => acc + (weapon[s.title] || 0), 0);
                s.equipment = c.equipment.reduce((acc, eq) => acc + +(eq[s.title] || 0), 0);
                s.specials = __specials.reduce((acc, special) => acc + (special[s.title] || 0), 0);

                // set feats level for some skills
                if (s.title === "Weapon Skill") {
                    s.feats = c.expertise.wsExpertise || 0;
                }
                else if (s.title === "Ballistic Skill") {
                    s.feats = c.expertise.bsExpertise || 0;
                }
                else if (s.title === "Defense") {
                    s.feats = c.expertise.defenseExpertise || 0;
                }
                else if (s.title === "Magic") {
                    s.feats = c.expertise.magicExpertise || 0;
                }
                else {
                    s.feats = 0;
                }


                // check expertise
                if (s.bought && s.expertise) {
                    s.total = c.expertise.total + s.statModifier + s.feats + s.spells + s.specials + s.weapons + s.equipment;
                }
                else {
                    s.total = 0 + s.feats + s.spells + s.specials + s.weapons + s.equipment;
                }

                // set things
                if (s.title === "Weapon Skill") {
                    weaponSkill = s.total;
                }
                else if (s.title === "Ballistic Skill") {
                    ballisticSkill = s.total
                };
                return s;
            })

            c.weapons = c.weapons.map(weapon => {
                if (weapon.isRanged) {
                    weapon.skill = ballisticSkill;
                    weapon.dmgStat = c.statistics.AGI.bonus;
                }
                else {
                    weapon.skill = weaponSkill;
                    weapon.dmgStat = c.statistics.STR.bonus;
                }

                weapon.dmgTotal = weapon.constant + weapon.dmgFeat + (+weapon.dmgStat);
                weapon.initiative = weapon.initiative || 10;
                weapon.initiativeTotal = Math.ceil(weapon.initiative - (weapon.initiative / 100 * c.initiative.total));
                return weapon;
            });

            /*
            Setting the hitpoints of the character.
            */
            c.hp = {
                ...c.hp
            }

            // Stamina changes the hp factor from the base of 5 to a higher factor
            // feats are set in the feat calculations
            c.hp.weapon = c.weapons.filter(w => w.isActive).reduce((acc, w) => acc + (w["Stamina"] || 0), 0);
            c.hp.equipment = c.equipment.reduce((acc, w) => acc + (w["Stamina"] || 0), 0);

            // HP factors are scaled much harder than other things, we use the following pattern
            const factorPattern = [0, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9];
            const factor = factorPattern[c.hp.feats + c.hp.weapon + c.hp.equipment];
            c.hp.factor = factor;
            c.hp.str = c.statistics.STR.bonus * c.hp.STRFactor;
            c.hp.sum = c.level + c.hp.str;
            c.hp.total = c.hp.sum * (c.hp.base + c.hp.factor);

            c.resistances = helpers.calculatePropertyList(c, "resistances").map(resistance => {
                resistance.specials = __specials.reduce((acc, special) => acc + (special[resistance.title] || 0), 0);

                const ___spells = __spells.reduce((a, s) => a.concat(s.spells), []);
                resistance.spells = ___spells.reduce((acc, spell) => {
                    if (spell.type === "choice") {
                        return spell.choices.filter(choice => choice.selected).reduce((acc, choice) => acc + (choice[resistance.title] || 0), acc);
                    }
                    else {
                        return acc + (spell[resistance.title] || 0);
                    }
                }, 0);

                resistance.total = resistance.specials + resistance.spells;
                resistance.total += resistance.bought ? 5 : 0;
                resistance.total += resistance.expertise ? 10 : 0;
                return resistance;
            });
            c.professions = helpers.calculatePropertyList(c, "professions");

            /*
            Calculate the XP of the character.
            */
            let __xp = [3, 7, 12, 18, 25, 33, 42, 52, 63, 75, 88];
            let __xp2 = [0, ...__xp];
            let $xp =
                c.skills.reduce((acc, skill) => {
                    return acc + (skill.bought === "xp" ? 3 : 0) + (skill.expertise === "xp" ? 4 : 0);
                }, 0) +
                c.feats.reduce((acc, feat) => {
                    if (feat.bought === 0) return acc;
                    return acc + __xp[feat.bought + -1];
                }, 0) +
                c.professions.reduce((acc, prof) => {
                    return acc + (prof.bought === "xp" ? 3 : 0) + (prof.expertise === "xp" ? 4 : 0);
                }, 0) +
                c.resistances.reduce((acc, res) => {
                    return acc + (res.bought === "xp" ? 3 : 0) + (res.expertise === "xp" ? 4 : 0);
                }, 0) +
                (() => {
                    const numberOfClasses = c.classes.length;
                    if (numberOfClasses == 0) return 0;
                    if (numberOfClasses == 1) return 0;
                    if (numberOfClasses == 2) return 10;
                    if (numberOfClasses == 3) return 25;
                    if (numberOfClasses == 4) return 50;
                    return 100;
                })() +
                (() => {

                    const _xp = c.classes.reduce((acc, _class) => {
                        return acc + (_class.spells || []).reduce((acc, _spell) => {
                            if (_spell.rank === undefined) return acc;
                            const boughtRanks = _spell.rank - (_spell.baseRank || 0);
                            return acc + __xp2[boughtRanks];
                        }, 0);
                    }, 0);
                    const _spellsXP = c.spells.reduce((acc, spell) => {
                        return acc + (spell.spells || []).reduce((acc, _spell) => {
                            if (_spell.rank === undefined) return acc;
                            const boughtRanks = _spell.rank - (_spell.baseRank || 0);
                            return acc + __xp2[boughtRanks];
                        }, 0);
                    }, 0);
                    return _xp + _spellsXP;

                })();

            c.XP = {
                ...c.XP,
                filled: $xp
            };

            /*
            Calculate the AP of the character
            */
            const APPerLevel = [12, 15, 20, 24, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];
            c.ap.total = APPerLevel[c.level - 1];
            c.ap.weapons = c.weapons.reduce((acc, w) => acc + (w["Endurance"] || 0), 0);
            c.ap.equipment = c.equipment.reduce((acc, w) => acc + (w["Endurance"] || 0), 0);
            // c.ap.recovery is already set in the feats reducer

            let startAPOffense = 3;
            let startAPDefense = 3;
            __specials.forEach(special => {
                startAPOffense = startAPOffense + (special["AP Offense"] || 0);
                startAPDefense = startAPDefense + (special["AP Defense"] || 0);

                c.critDMG = special.critDMG || c.critDMG;
                c.splashDMG = special.splashDMG || c.splashDMG;
            });
            __spells.map(category => {
                category.spells.forEach(spell => {
                    if (spell.choices) {
                        spell.choices.forEach(choice => {
                            if (choice.selected) {
                                startAPOffense = startAPOffense + (choice["AP Offense"] || 0);
                                startAPDefense = startAPDefense + (choice["AP Defense"] || 0);
                            }
                        });
                    }
                });
            })
            c.ap.offense = startAPOffense;
            c.ap.defense = startAPDefense;

            let dialog = {
                ...state.dialog,
                shown: false,
                armorDialogShown: false,
                raceDialogShown: false,
                professionsDialogShown: false,
                selectCharacterDialogShown: false,
                pages: []
            };

            console.log(c);

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