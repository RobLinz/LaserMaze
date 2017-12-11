import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './Container.css';
import {
    EAST, NORTH, SOUTH, WEST, LOCK, TURN, FREE, MIRROR, DOUBM, CHECK, LASER,
    TARGET,
} from '../Game/Container';

export const LVL1 = 'Level 1';
export const LVL2 = 'Level 2';
export const LVL3 = 'Level 3';
export const LVL4 = 'Level 4';
export const LVL5 = 'Level 5';
export const LVL6 = 'Level 6';
export const LVL7 = 'Level 7';
export const LVL8 = 'Level 8';
export const LVL9 = 'Level 9';
export const LVL10 = 'Level 10';
export const LVL11 = 'Level 11';
export const LVL12 = 'Level 12';
export const LVL13 = 'Level 13';

class Container extends Component {
    constructor(props) {
        super(props);

        this.state ={
            levels: [
                {title: LVL1, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: SOUTH, movable: LOCK}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: EAST, laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: DOUBM, direction: NORTH, movable: FREE},
                    ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: SOUTH, movable: LOCK}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: DOUBM, direction: NORTH, movable: FREE}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: EAST, laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                    ]
                },
                {title: LVL2, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable:LOCK,  laser: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: MIRROR, direction: EAST, movable:LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: LASER, direction: WEST, movable:TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                    {type: MIRROR, direction: NORTH, movable:FREE,  laser: null}
                ],
                    solution: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable:LOCK,  laser: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: MIRROR, direction: EAST, movable:LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null},  {type: MIRROR, direction: WEST, movable:FREE,  laser: null}],
                    [{type: LASER, direction: NORTH, movable:TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                {title: LVL3, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: SOUTH, movable:LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: CHECK, direction: NORTH, movable:LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: MIRROR, direction: EAST, movable:TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: TARGET, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: TARGET, direction: NORTH, movable: FREE,  laser: null}, {type: LASER, direction: SOUTH, movable:LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: CHECK, direction: NORTH, movable:LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: MIRROR, direction: NORTH, movable:TURN,  laser: null}, {type: MIRROR, direction: WEST, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                {title: LVL4, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable: TURN, laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: EAST, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: DOUBM, direction: NORTH, movable: FREE,  laser: null},
                        {type: LASER, direction: NORTH, movable: FREE,  laser: null}
                    ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable: TURN, laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: DOUBM, direction: NORTH, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: EAST, movable: LOCK,  laser: null}, {type: LASER, direction: WEST, movable: FREE,  laser: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                    ]
                },
                {title: LVL5, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: LASER, direction: EAST, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: SOUTH, movable: LOCK,  laser: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: WEST, movable: LOCK,  laser: null}]
                ],
                    pieces: [
                        {type: DOUBM, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: LASER, direction: EAST, movable: LOCK,  laser: null}, {type: DOUBM, direction: NORTH, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: SOUTH, movable: LOCK,  laser: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: WEST, movable: LOCK,  laser: null}]
                ]
                },
                {title: LVL6, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable: TURN, laser: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: DOUBM, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: LASER, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [

                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: EAST, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: EAST, movable: TURN, laser: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: MIRROR, direction: EAST, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: DOUBM, direction: EAST || WEST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: LASER, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                {title: LVL7, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: SOUTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: NORTH, movable: TURN,  laser: null}, {type: DOUBM, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: LASER, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: EAST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: SOUTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: WEST, movable: TURN,  laser: null}, {type: DOUBM, direction: NORTH, movable: LOCK,  laser: null}, {type: LASER, direction: WEST, movable: FREE,  laser: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: WEST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                {title: LVL8, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: SOUTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: LOCK,  laser: null}, {type: DOUBM, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: LASER, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: SOUTH, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: EAST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: EAST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: LOCK,  laser: null}, {type: DOUBM, direction: NORTH || SOUTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: WEST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                {title: LVL9, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null},{type: CHECK, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: TARGET, direction: NORTH, movable: TURN,  laser: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: LASER, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: SOUTH, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null},{type: CHECK, direction: NORTH || SOUTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: EAST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: SOUTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: TARGET, direction: WEST, movable: TURN,  laser: null}, {type: MIRROR, direction: WEST, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                {title: LVL10, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: WEST, movable: LOCK,  laser: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: TARGET, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: EAST, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: MIRROR, direction: EAST, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: WEST, movable: LOCK,  laser: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: TARGET, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: SOUTH, movable: FREE,  laser: null},],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: EAST, movable: LOCK,  laser: null}, {type: MIRROR, direction: WEST, movable: FREE,  laser: null},]
                ]
                },
                {title: LVL11, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: SOUTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: EAST, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: DOUBM, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, direction: SOUTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: MIRROR, direction: EAST, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: EAST, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: FREE,  laser: null}, {type: CHECK, direction: EAST || WEST, movable: TURN,  laser: null}, {type: MIRROR, direction: SOUTH, movable: FREE,  laser: null}],
                        [{type: DOUBM, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: WEST, movable: FREE,  laser: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                {title: LVL12, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: WEST, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: DOUBM, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                        {type: LASER, direction: NORTH, movable: FREE,  laser: null}
                ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: TARGET, direction: WEST, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: SOUTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: EAST, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: DOUBM, direction: EAST || WEST, movable: TURN,  laser: null},{type: LASER, direction: WEST, movable: FREE,  laser: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: CHECK, direction: NORTH, movable: LOCK,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: MIRROR, direction: NORTH, movable: TURN,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null},  {type: MIRROR, direction: WEST, movable: FREE,  laser: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ]
                },
                /*
                {title: LVL13, completed: false, board: [
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, laser: null, direction: NORTH, movable: FREE}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                ],
                    pieces: [
                        {type: MIRROR, direction: NORTH, movable: FREE,  laser: null},
                    ],
                    solution: [
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: LASER, laser: null, direction: NORTH, movable: FREE}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
                        [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
                    ]
                },
                */
            ],
        };
    }


    render() {
        let title = "Challenges Available";

        return(
            <div className="challenges">

            <div> {title} </div>

                <ListGroup>
                    {
                        this.state.levels.map((lvl, l) => <ListGroupItem key={l} onClick={() => this.props.setLevel(lvl)}>{lvl.title}</ListGroupItem>)
                    }
                </ListGroup>
            </div>
        )

    }

}

export default Container;