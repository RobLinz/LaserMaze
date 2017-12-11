import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import {EAST, NORTH, SOUTH, WEST, LOCK, TURN, FREE} from './Container';
import MirrorImage from '../Game/Assets/blue.png';
// <img src={MirrorImage} />

const Splitter = ({direction, clickHandler, rotateHandler, removeHandler, laser, selected, movable}) => {

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
                 }}>
            S
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
                </div>
            }
        </div>
    );
};

export default Splitter;