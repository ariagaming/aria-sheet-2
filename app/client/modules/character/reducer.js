
import firebase from 'firebase';
import characterTemplate from './mocks/__character';

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

        case "SET_USER":
            return { ...state, user: action.payload };

        case 'GET_USER_CHARACTERS':

            return { ...state };

        case "CHANGE_NAME":
            return { ...state, character: { ...state.character, name: action.payload } };

        case 'SHOW_DIALOG':
            const { pages } = action.value;
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return { ...state, dialog: { ...state.dialog, shown: true, pages: pages, index: 0 }, newCharacter };

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

        case 'SELECT_SPELL_CHOICE':
            const { spellIndex, choiceIndex } = action.payload;


            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    spells: state.newCharacter.spells.map((spell, i) => {
                        if (i === spellIndex) {
                            return {
                                ...spell,
                                choices: spell.choices.map((c, j) => {
                                    return { ...c, selected: (j === choiceIndex) }
                                })
                            }
                        }
                        else {
                            return { ...spell };
                        }
                    })
                }
            }

        case 'TEMPLATE_WEAPON':
            const weapons = state.newCharacter.weapons.map(w => {
                const { template, weapon } = action.payload;

                if (w.title === weapon.title) {
                    w.title = template.title;
                    w.isRanged = template.ranged;
                    const [numberOfDice, diceSides] = template.damage.split('d');
                    w.numberOfDice = numberOfDice;
                    w.diceSides = diceSides;
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
            console.log(action.payload);
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
            //debugger;
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
            newCharacter = state.newCharacter;
            let remaining = 1000;
            const { prop, buyable, source, max } = action.payload;
            if (max) {
                remaining = newCharacter[prop].reduce((acc, l) => {
                    let total = 0;
                    if (l.bought === source) {
                        total++;
                    }
                    if (l.expertise === source) {
                        total++;
                    }
                    return acc - total;
                }, max);
            }
            const n = newCharacter[prop].map(b => {
                if (b.title === buyable.title) {
                    if (b.expertise === source && b.bought === source) {
                        return { ...b, bought: false, expertise: false };
                    }
                    else if (b.expertise === source && b.bought) {
                        return { ...b, expertise: false };
                    }
                    else if (!b.expertise && b.bought) {
                        return { ...b, expertise: source };
                    }
                    else if (!b.bought) {
                        return { ...b, bought: source };
                    }
                }
                return b;
            });
            newCharacter = { ...newCharacter, [prop]: n };
            return { ...state, newCharacter: newCharacter };

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

            const newStatistics = {
                ...state.newCharacter.statistics,
                STR: { ...state.newCharacter.statistics.STR, race: action.payload.stats.STR },
                AGI: { ...state.newCharacter.statistics.AGI, race: action.payload.stats.AGI },
                INU: { ...state.newCharacter.statistics.INU, race: action.payload.stats.INU },
                PER: { ...state.newCharacter.statistics.PER, race: action.payload.stats.PER }
            }

            const updateList = (list) => {
                const uppercaseList = action.payload[list].map(s => s.toUpperCase());
                const __list = state.newCharacter[list].map(s => {
                    if (s.expertise === "race") {
                        s.expertise = false;
                    }
                    if (s.bought === "race") {
                        s.bought = s.expertise;
                    }
                    if (uppercaseList.indexOf(s.title.toUpperCase()) > -1) {
                        if (s.bought && s.expertise) { }
                        else if (s.bought && !s.expertise) { s.expertise = "race"; }
                        else if (!s.bought) { s.bought = "race"; }
                    }
                    return s;
                });
                return __list;
            }

            /*
            Let's run through the feats.
            */
            const __feats = action.payload.feats;
            const newFeats = state.newCharacter.feats.map(feat => {
                const target = __feats.filter(f => f.title === feat.title)[0];
                if (target) {
                    feat.race = target.value;
                }
                else {
                    feat.race = 0;
                }
                return feat;
            });

            const raceSpells = [...state.newCharacter.spells].concat(action.payload.spells || []);

            newCharacter = {
                ...state.newCharacter,
                race: action.payload,
                statistics: newStatistics,
                skills: updateList("skills"),
                resistances: updateList("resistances"),
                professions: updateList("professions"),
                feats: newFeats,
                spells: raceSpells,
                languages: state.newCharacter.languages.concat(action.payload.languages || [])
            };

            return { ...state, newCharacter };

        case 'SELECT_PROFESSION':

            const filteredClasses = state.newCharacter.classes.filter(c => c.title !== action.payload.title);
            const newClasses = [...filteredClasses, action.payload].filter(c => c.title !== "Unknown");

            for (let key in action.payload.stats) {
                state.newCharacter.statistics[key].profession = action.payload.stats[key];
            }

            const newSkills = state.newCharacter.skills.map(s => {
                if (action.payload.skills.indexOf(s.title) > -1) {
                    if (!s.bought) {
                        return { ...s, bought: 'profession' };
                    }
                    else if (s.bought && !s.expertise) {
                        return { ...s, expertise: 'profession' };
                    }
                }
                return { ...s };
            });

            const hp = {
                ...state.newCharacter.hp,
                STRFactor: (action.payload.HPFactor || 1)
            }


            const spells = {
                ...state.newCharacter.spells,
                [action.payload.title]: {
                    title: action.payload.title,
                    spells: action.payload.spells
                }
            }
            //const __profSpells = (action.payload.spells || []).map(s => ({ ...s, source: "professions" }));


            newCharacter = {
                ...state.newCharacter,
                hp: hp,
                classes: newClasses,
                skills: newSkills,
                spells: spells,//state.newCharacter.spells.concat(__profSpells),
                languages: state.newCharacter.languages.concat(action.payload.languages || [])
            };

            return { ...state, newCharacter };

        case 'PROFESSION_SPECIALIZATION':
            const { classTitle, specialization } = action.payload;
            const __specialization =
                state
                    .newCharacter
                    .classes
                    .filter(c => c.title === classTitle)[0]
                    .specializations
                    .filter(s => s.title === specialization)[0];
            const __specializationSpells = (__specialization.spells || []).map(s => ({ ...s, source: "profession" }));
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
            const __spells = state.newCharacter.spells.concat(__specializationSpells);

            return {
                ...state,
                newCharacter: {
                    ...state.newCharacter,
                    classes: __classes,
                    spells: __spells
                }
            };

        case 'UPDATE_CHARACTER':

            const c = JSON.parse(JSON.stringify(state.newCharacter));

            /* STATISTICS */
            c.statistics.STR.race = c.race.stats ? c.race.stats.STR : 0;
            c.statistics.STR.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.STR || 0), 0);
            c.statistics.STR.equipment = c.equipment.reduce((acc, eq) => acc + (eq.STR || 0), 0);
            c.statistics.STR.total =
                c.statistics.STR.race + c.statistics.STR.base + c.statistics.STR.equipment +
                c.statistics.STR.weapon + c.statistics.STR.profession;
            c.statistics.STR.bonus = Math.floor(c.statistics.STR.total / 10);

            c.statistics.AGI.race = c.race.stats ? c.race.stats.AGI : 0;
            c.statistics.AGI.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.AGI || 0), 0);
            c.statistics.AGI.equipment = c.equipment.reduce((acc, eq) => acc + (eq.AGI || 0), 0);
            c.statistics.AGI.total =
                c.statistics.AGI.race + c.statistics.AGI.base + c.statistics.AGI.equipment +
                c.statistics.AGI.weapon + c.statistics.AGI.profession;
            c.statistics.AGI.bonus = Math.floor(c.statistics.AGI.total / 10);
            // 3 AGI bonus ranks you get 1 armor rank.
            c.armor.stats = Math.floor(c.statistics.AGI.bonus / 3);

            c.statistics.INU.race = c.race.stats ? c.race.stats.INU : 0;
            c.statistics.INU.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.INU || 0), 0);
            c.statistics.INU.equipment = c.equipment.reduce((acc, eq) => acc + (eq.INU || 0), 0);
            c.statistics.INU.total =
                c.statistics.INU.race + c.statistics.INU.base + c.statistics.INU.equipment +
                c.statistics.INU.weapon + c.statistics.INU.profession;
            c.statistics.INU.bonus = Math.floor(c.statistics.INU.total / 10);
            c.magicArmor.stats = c.statistics.INU.bonus;

            c.statistics.PER.race = c.race.stats ? c.race.stats.PER : 0;
            c.statistics.PER.weapon = c.weapons.filter(w => w.isActive).reduce((acc, weapon) => acc + (weapon.PER || 0), 0);
            c.statistics.PER.equipment = c.equipment.reduce((acc, eq) => acc + (eq.PER || 0), 0);
            c.statistics.PER.total =
                c.statistics.PER.race + c.statistics.PER.base + c.statistics.PER.equipment +
                c.statistics.PER.weapon + c.statistics.PER.profession;
            c.statistics.PER.bonus = Math.floor(c.statistics.PER.total / 10);


            c.feats = c.feats.map(feat => {
                feat.weapon = c.weapons.filter(w => w.isActive).filter(w => w[feat.title]).reduce((acc, weapon) => acc + weapon[feat.title], 0);
                feat.equipment = c.equipment.filter(w => w[feat.title]).reduce((acc, equipment) => acc + equipment[feat.title], 0);
                feat.race = feat.race || 0;
                feat.sum = feat.base + feat.bought + feat.weapon + feat.equipment + feat.race;
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
                else if (feat.title === "DMG adjstm.") {
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

                return feat;
            });


            c.expertise.level = c.level;
            c.expertise.total = c.expertise.feats + c.expertise.level;
            c.armor.sum = c.armor.feats + c.armor.base + c.armor.stats + c.armor.equipment + c.armor.armor;
            c.armor.total = c.armor.sum * 3;
            c.magicArmor.sum = c.magicArmor.feats + c.magicArmor.base + c.magicArmor.stats + c.magicArmor.equipment + c.magicArmor.armor;
            c.magicArmor.total = c.magicArmor.sum * 5;


            c.movement.sum = c.movement.base + c.movement.armor + c.movement.feats + c.movement.race + c.movement.profession;
            c.movement.total = c.movement.sum * 3;

            let weaponSkill = 0;
            let ballisticSkill = 0;
            c.skills = c.skills.map(s => {
                s.statModifier = c.statistics[s.stat].bonus;
                if (s.bought && s.expertise) {
                    if (s.title === "Weapon Skill") {
                        s.total = c.expertise.total + s.statModifier + c.expertise.wsExpertise;
                        weaponSkill = s.total;
                    }
                    else if (s.title === "Ballistic Skill") {
                        s.total = c.expertise.total + s.statModifier + c.expertise.bsExpertise;
                        ballisticSkill = s.total;
                    }
                    else {
                        s.total = c.expertise.total + s.statModifier;
                    }
                }
                else {
                    s.total = 0;
                }
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
            c.hp.factor = c.hp.base + c.hp.feats + c.hp.weapon + c.hp.equipment;

            // Str calculations
            c.hp.str = c.statistics.STR.bonus * c.hp.STRFactor;

            // Sum the total points which are going to be multiplied by the factor, this is your level + strength bonus
            c.hp.sum = c.level + c.hp.str;

            c.hp.total = c.hp.sum * c.hp.factor;


            /*
            Calculate the XP of the character.
            */
            let __xp = [3, 7, 12, 18, 25, 33, 42, 52, 63, 75, 88];
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
                (() => {
                    const numberOfClasses = (Object.keys(c.classes).length);
                    if (numberOfClasses == 1) return 0;
                    if (numberOfClasses == 2) return 10;
                    if (numberOfClasses == 3) return 25;
                    if (numberOfClasses == 4) return 50;
                })()

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
            c.ap.recovery = 4 + c.ap.feats;

            console.log(c);

            let dialog = {
                ...state.dialog,
                shown: false,
                armorDialogShown: false,
                raceDialogShown: false,
                professionsDialogShown: false,
                selectCharacterDialogShown: false,
                pages: []
            };

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