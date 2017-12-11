import React from 'react';
import {EAST, NORTH, SOUTH, WEST, LOCK, TURN, FREE} from './Container';
import LaserLaserImage from '../Game/Assets/rojo_laser.png';

const LaserLaser = ({r, c, direction}) => {

    const turns = direction === EAST ? 0.25 : direction === WEST ? 0.75 : direction === SOUTH ? 0.5 : 0;

    return(
        <div className="square" >
            <div className ="piece-image">
                <img src={LaserLaserImage} className="piece-image"/>
            </div>
        </div>
    );
};

export default LaserLaser;