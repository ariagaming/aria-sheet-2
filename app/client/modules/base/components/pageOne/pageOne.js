
import React, { Component } from 'react';
import { string, object } from 'prop-types';
import PageHeader from './../pageHeader/pageHeader';
import Skills from './../skills/skills';
import Professions from './../professions/professions';
import Resistances from './../resistances/resistances';
import Equipment from './../equipment/equipment';
import Weapons from './../weapons/weapons';
import Languages from './../language/language';
import Specials from './../specials/specials';
import Feats from './../feats/feats';
import Statistics from './../statistics/statistics';
import StatisticInfo from './../statisticInfo/statisticInfo';
import Page from './../page/page';
import { connect } from 'react-redux';


/**
 * This is the basic description of the PageOne component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class PageOne extends Component {
    render() {
        const { character } = this.props;
        return (
            <Page character={character}>
                {/* Character Information */}
                <PageHeader character={character} />

                {/* Statistics and extra information */}
                <Statistics character={character} />

                <StatisticInfo type="hp" value={character.hp.total} title="hp" />
                <StatisticInfo type="ap" value={character.ap} title="ap" />
                <StatisticInfo type="expertise" value={character.expertise.total} title="expertise" />
                <StatisticInfo type="movement" value={character.movement.total} title="movement" />
                <StatisticInfo type="initiative" value={character.initiative.total} title="initiative" />
                <StatisticInfo type="armor" value={character.armor.total} title="armor" />


                {/* Skills */}
                <Skills character={character} />
                <Professions character={character} />
                <Resistances character={character} />
                <Feats character={character} />
                <Equipment character={character} />
                <Weapons character={character} />
                <Languages character={character} />
                <Specials character={character} />
            </Page>
        );
    }

    static propTypes = {
        /**
         * Every component should at least have a name.
         */
        name: string
    }

    static defaultProps = {
        name: "component-pageOne"
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}
const __PageOne = connect(mapStateToProps)(PageOne);

export default __PageOne;

