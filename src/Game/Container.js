import React, {Component} from 'react';

/*
*
*
*
* */

class Container extends Component {
    constructor() {
        super();
        //setting the initial state
        this.state = {
            history: [
                //inital state of all squares as null
                [
                    [null, null, null, null, null],
                    [null, 'L', null, null, null],
                    [null, null, null, '/', null],
                    [null, null, null, null, null],
                    [null, null, null, null, null]
                ]
            ],
            stepNumber: 0,
        };
    }


    render() {
        console.log(this.state.history);

        const cells = this.state.history[this.state.history.length-1].forEach((row, r) => {
            return(
                <div>
                    {
                        row.forEach((cell, c) => {
                            return (
                                <div>a</div>
                            );
                        })
                    }
                </div>
            );
        });

        return (
            <div>
                game
                {
                    // nested for loops, arrow fxns
                    cells

                }
            </div>
        )
    }

}


export default Container;