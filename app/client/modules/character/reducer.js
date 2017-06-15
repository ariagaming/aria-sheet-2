
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

        case 'SHOW_ARMOR_DIALOG':
            newCharacter = JSON.parse(JSON.stringify(state.character));
            return { ...state, dialog: { ...state.dialog, armorDialogShown: true, index: 0 }, newCharacter };

        case 'TURN_PAGE':
            return { ...state, dialog: { ...state.dialog, index: action.payload } };

        case 'HIDE_DIALOG':
            return {
                ...state,
                dialog: {
                    ...state.dialog,
                    shown: false,
                    armorDialogShown: false,
                    raceDialogShown: false,
                    professionsDialogShown: false,
                    pages: []
                }
            };

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
                    armor: (action.payload.movement || 2)
                },
                equipment: state.newCharacter.equipment.map(eq => {
                    if (locations.indexOf(eq.location) > -1) {
                        eq.title = action.payload.title;
                    }
                    return eq;
                })
            }
            return { ...state, newCharacter };

        case 'SAVE_CHARACTER':
            localStorage.setItem('character', JSON.stringify(state.character));
            return state;

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
                        b.bought = (b.bought === source ? false : b.bought);
                        b.expertise = (b.expertise === source ? false : b.expertise);

                        if (!b.bought && b.expertise) {
                            b.bought = b.expertise;
                            b.expertise = false;
                        }
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


            newCharacter = {
                ...state.newCharacter,
                race: action.payload,
                statistics: newStatistics,
                skills: updateList("skills"),
                resistances: updateList("resistances"),
                professions: updateList("professions"),
                feats: newFeats,
                languages: action.payload.languages || []
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
                factor: (action.payload.HPFactor || 1)
            }


            newCharacter = {
                ...state.newCharacter,
                hp: hp,
                classes: newClasses,
                skills: newSkills
            };

            return { ...state, newCharacter };

        case 'PROFESSION_SPECIALIZATION':
            const { classTitle, specialization } = action.payload;
            newCharacter = {
                ...state.newCharacter,
                classes: state.newCharacter.classes.map(c => {
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
                })
            }

            return {
                ...state,
                newCharacter
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
            c.armor.stats = c.statistics.AGI.bonus;

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

            c.weapons = c.weapons.map(weapon => {
                if (weapon.isRanged) {
                    weapon.skill = c.expertise.bsExpertise + c.expertise.total;
                    weapon.dmgStat = c.statistics.AGI.bonus;
                }
                else {
                    weapon.skill = c.expertise.wsExpertise + c.expertise.total;
                    weapon.dmgStat = c.statistics.STR.bonus;
                }

                weapon.dmgTotal = weapon.constant + weapon.dmgFeat + (+weapon.dmgStat);

                return weapon;
            });

            c.skills = c.skills.map(s => {
                s.statModifier = c.statistics[s.stat].bonus;
                if (s.bought && s.expertise) {
                    if (s.title === "Weapon Skill") {
                        s.total = c.expertise.total + s.statModifier + c.expertise.wsExpertise;
                    }
                    else if (s.title === "Ballistic Skill") {
                        s.total = c.expertise.total + s.statModifier + c.expertise.bsExpertise;
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


            c.hp = {
                ...c.hp,
                total: (c.hp.rank + c.level + (c.statistics.STR.bonus * c.hp.factor)) * (c.hp.base + c.hp.feats)
            }

            let dialog = {
                ...state.dialog,
                shown: false,
                armorDialogShown: false,
                raceDialogShown: false,
                professionsDialogShown: false,
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