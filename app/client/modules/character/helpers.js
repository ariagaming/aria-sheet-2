
export const getSpells = (character) => {
    /**
     * We'll need to mold all the types of spells into the following form:
     * { title: string, spells: [] }
     *  A spell can have either a rank or a level. 
     *  A spell can be either a choice or a set spell.
     * 
     * Oh, and spells can be a combination of the specialisation and the class itself.
     */
    const __spells =
        character
            .classes
            .filter(__class => __class.title.toLowerCase() !== "unknown")
            .map(__class => {

                if (__class.specializations) {
                    const selectedSpecs = __class.specializations.filter(s => s.selected === true);
                    if (selectedSpecs.length > 0) {
                        const selectedSpec = selectedSpecs[0];
                        return { title: selectedSpec.title, spells: (__class.spells || []).concat(selectedSpec.spells || []) };
                    }
                }

                return ({ title: __class.title, spells: (__class.spells || []) });
            })
            .reduce((acc, spells) => acc.concat(spells), character.spells);

    return __spells;
}

export const getSpecialisations = (character, includeClasses) => {
    return character
        .classes
        .map(__class => {
            if (__class.specializations) {
                const specialisation = __class.specializations.filter(s => s.selected === true)[0];
                return { ...(specialisation || __class), level: __class.level };
            }
            else {
                if (includeClasses) {
                    return { ...__class };
                }
                else {
                    null
                }
            }
        })
        .filter(s => s);
}

export const getSpecials = (character) => {
    let specials =
        [...character.specials || []]
            .concat(flatten(character.classes.map(__class => __class.specials)))
            .concat(flatten(getSpecialisations(character).map(s => s.specials || [])));

    return specials.filter(special => special && (!special.level ? true : (special.level <= character.level)));
}


export const calculateSkills = (character) => {

    const newSkills = character.skills.map(skill => {
        skill.bought = false;
        skill.expertise = false;
        let numberInRace = character.buyables.race.filter(s => skill.title === s).length;
        let numberInProf = character.buyables.profession.filter(s => skill.title === s).length;
        let numberInXP = character.buyables.xp.filter(s => skill.title === s).length;

        //console.log(numberInRace, numberInProf, numberInXP);

        const iterate = (flow, key) => {
            while (flow > 0) {
                if (!skill.bought) skill.bought = key;
                else if (skill.bought && !skill.expertise) skill.expertise = key;
                flow = flow - 1;
            }
        }
        iterate(numberInRace, "race");
        iterate(numberInProf, "profession");
        iterate(numberInXP, "xp");

        return skill;
    });

    return [...newSkills];
}



function flatten(array) {
    return array.reduce((acc, a) => {
        if (Array.isArray(a)) {
            return acc.concat(a);
        }
        else {
            return [...acc, a];
        }
    }, []);
}