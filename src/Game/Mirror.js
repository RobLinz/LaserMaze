import React from 'react';
import {EAST, NORTH, SOUTH, WEST, LOCK, TURN, FREE} from './Container';
import {Glyphicon} from 'react-bootstrap';
import MirrorImage from '../Game/Assets/purple.png';
import MirrorLaserImage from '../Game/Assets/purple_laser.png';
// <img src={MirrorImage} />

const Mirror = ({direction, clickHandler, rotateHandler, removeHandler, laser, selected, movable, r, c, }) => {

    //let variable = condition ? true : false
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
               <img src={laser ? MirrorLaserImage : MirrorImage} className="piece-image"/>
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

export default Mirror;