
import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditSpecials extends Component {
    render() {
        const { selectSpecial } = this.props;
        const specials = this.props.data.specials;
        const __selectSpecial = (special) => {
            return () => {
                const __special = { ...special, type: "bought" };
                selectSpecial(__special);
            }
        }
        return (
            <div>

                {
                    specials.map((special, i) => {
                        return (
                            <div className="row" key={i} onClick={__selectSpecial(special)}>
                                <span className="title">{special.title}</span>
                                <span>{special.description}</span>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => state;
const mapDispatcherToProps = (dispatcher, ownProps) => ({
    selectSpecial: (special) => {
        dispatcher({
            type: "BUY_SPECIAL",
            payload: special
        })
    }
});
const __EditSpecials = connect(mapStateToProps, mapDispatcherToProps)(EditSpecials);
export default __EditSpecials;


