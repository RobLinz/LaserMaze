import React from 'react';
import EmptyLaserImage from '../Game/Assets/empty_laser.png';
import {EAST, NORTH, SOUTH, WEST, LOCK, TURN, FREE} from './Container';

const Empty = ({direction, clickHandler, laser,  r, c,}) => {
    const turns = laser === EAST ? 0.0 : laser === WEST ? 0.5 : laser === SOUTH ? 0.25 : 0.75;

    return(
        <div
            onClick={clickHandler}
            className="square"
        >
            {
                laser && <img src={EmptyLaserImage} className="piece-image" style={{
                    transform: `rotate(${turns}turn)`,
                }} />
            }
        </div>

    );


};

export default Empty;