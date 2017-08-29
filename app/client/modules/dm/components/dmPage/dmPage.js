
import React, { Component } from 'react';
import NumberSlate from "./../numberSlate/numberSlate";
import Boss from "./../boss/boss";

class DMPage extends Component {
    render() {

        const bosses = [
            { name: "Boss 01" },
            { name: "Boss 02" },
            { name: "Boss 03" }
        ];


        return (
            <div className="dm-page">
                {
                    bosses.map((boss, i) => {
                        return (<Boss boss={boss} />);
                    })
                }

                <NumberSlate />
            </div>
        );
    }
}


export default DMPage;

