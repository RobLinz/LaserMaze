import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import {EAST, NORTH, SOUTH, WEST, LOCK, TURN, FREE} from './Container';
import LaserImage from '../Game/Assets/rojo.png';
import LaserLaserImage from './Assets/rojo_laser.png';

const Laser = ({direction, clickHandler, rotateHandler, removeHandler, laser, selected, movable, }) => {

    const turns = direction === EAST ? 0.25 : direction === WEST ? 0.75 : direction === SOUTH ? 0.5 : 0;

    return(
        <div
            onClick={clickHandler}
            style={{
                backgroundColor: selected ? '#ffff00' : 'floralwhite'
            }}
            className="square"
        >
            <div className ="piece-image"
                 style={{
                     transform: `rotate(${turns}turn)`,
                 }}
                 >
                <img src={laser ? LaserLaserImage : LaserImage} className="piece-image"/>
            </div>
            {
                movable === FREE && <div className="piece-menu">
                    <div className="menu-button"><Glyphicon glyph="repeat" onClick={()=> rotateHandler()} /></div>
                    <div className="menu-button"><Glyphicon glyph="remove" onClick={()=> removeHandler()} /></div>
                </div>
            }
            {
                movable === TURN && <div className="piece-menu">
                    <div className="menu-button"><Glyphicon glyph="repeat" onClick={()=> rotateHandler()} /></div>
                    <div className="menu-button"> </div>
                </div>
            }
        </div>
    );
};

export default Laser;