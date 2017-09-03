
import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * This is the basic description of the Dialog component. This will be shown in the
 * documentation of the component in the StyleGuilde.
 */
class Dialog extends Component {

    render() {
        const { dialog, show, hideDialog, updateCharacter, turnPage, newCharacter } = this.props;
        const pages = (() => {
            if (this.props.children && this.props.children.length > 0) return null;
            else {
                return dialog ? (dialog.pages ? dialog.pages : null) : null;
            }
        })();
        const index = dialog ? dialog.index : 0;
        const onInforPageClick = (index) => {
            return () => turnPage(index);
        };
        const getContent = () => {
            // return nothing if there are no pages
            if (!pages || pages.length === 0) return <div>No Content</div>;
            // return the first page
            return React.cloneElement(pages[index].content, { newCharacter: this.props.newCharacter });
        };
        const getTitle = () => {
            // return nothing if there are no pages
            if (!pages || pages.length === 0) return "Dialog";
            else return pages[index].title;
        };

        let $xp = 0;
        let sourceXP = (newCharacter ? newCharacter.XP.source : 0);
        let c = newCharacter;
        if (c) {
            /*
            Calculate the XP of the character.
            */
            let __xp = [3, 7, 12, 18, 25, 33, 42, 52, 63, 75, 88];
            let __xp2 = [0, 3, 7, 12, 18, 25, 33, 42, 52, 63, 75, 88];
            const skillXP = c.skills.reduce((acc, skill) => {
                return acc + (skill.bought === "xp" ? 3 : 0) + (skill.expertise === "xp" ? 4 : 0);
            }, 0);
            const featsXP = c.feats.reduce((acc, feat) => {
                if (feat.bought === 0) return acc;
                return acc + __xp[feat.bought + -1];
            }, 0);
            const professionsXP = c.professions.reduce((acc, prof) => {
                return acc + (prof.bought === "xp" ? 3 : 0) + (prof.expertise === "xp" ? 4 : 0);
            }, 0);
            const classesXP = (() => {
                const numberOfClasses = c.classes ? c.classes.length : 0;
                if (numberOfClasses == 0) return 0;
                if (numberOfClasses == 1) return 0;
                if (numberOfClasses == 2) return 10;
                if (numberOfClasses == 3) return 25;
                if (numberOfClasses == 4) return 50;

                return 100;
            })();
            const spellsXP = (() => {
                const _xp = c.classes.reduce((acc, _class) => {
                    return acc + (_class.spells || []).reduce((acc, _spell) => {
                        if (!_spell.rank) return acc;
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
            $xp = skillXP + featsXP + professionsXP + classesXP + spellsXP;
        }

        return (
            <div className={"dialog-container " + (show ? "show" : "")}>
                <div className={"dialog-container__xp" + ($xp > sourceXP ? " too-much" : "")}>{$xp}/{sourceXP} XP</div>
                <div className="dialog">
                    <div className="dialog__header">
                        <span>{getTitle() || "Dialog"}</span>
                    </div>
                    <div className="dialog__content">
                        {
                            this.props.children ? this.props.children : getContent()
                        }
                    </div>
                    <div className="dialog__footer">

                        <div className="dialog__footer__pages">
                            {
                                (pages || (this.props.children ? (this.props.children.map ? this.props.children : [this.props.children]) : []) || []).map((p, i) => {
                                    return (
                                        <div key={i} className={"info-page " + (index === i ? "selected" : "")} onClick={onInforPageClick(i)}>
                                            <span>{i + 1}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="dialog__footer__buttons">
                            <RaisedButton onClick={updateCharacter} style={{ marginRight: "5px" }}>
                                <i className="fa fa-check"></i>OK
                            </RaisedButton>
                            <RaisedButton onClick={hideDialog} style={{ marginRight: "5px" }}>
                                <i className="fa fa-remove"></i>Cancel
                            </RaisedButton>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


Dialog.propTypes = {
    /**
     * Every component should at least have a name.
     */
    name: string,
    title: string,
    pages: arrayOf(shape({
        title: string.isRequired
    }))
}

Dialog.defaultProps = {
    name: 'component-dialog'
}


const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatcherToProps = (dispatcher, ownProps) => {
    return {
        hideDialog: () => {
            dispatcher({
                type: 'HIDE_DIALOG'
            });
        },
        updateCharacter: () => {
            dispatcher({
                type: 'UPDATE_CHARACTER'
            });
        },
        turnPage: (index) => {
            dispatcher({
                type: 'TURN_PAGE',
                payload: index
            });
        }
    }
}
const __Dialog = connect(mapStateToProps, mapDispatcherToProps)(Dialog);

export default __Dialog;


