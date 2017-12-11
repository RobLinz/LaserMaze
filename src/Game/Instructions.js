import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
import './Container.css';
import MirrorImage from '../Game/Assets/purple.png';
import CheckImage from '../Game/Assets/yellow.png';
import SplitImage from '../Game/Assets/blue.png';
import DoubImage from '../Game/Assets/green.png';
import LaserLaserImage from '../Game/Assets/rojo_laser.png';
import SplitLaserImage from '../Game/Assets/blue_laser.png';
import MirrorLaserImage from '../Game/Assets/purple_laser.png';
import CheckLaserImage from '../Game/Assets/yellow_laser.png';
import DoubLaserImage from '../Game/Assets/green_laser.png';
import LaserImage from '../Game/Assets/rojo.png';
import TargetImage from '../Game/Assets/purple_laser_alt.png';

class Instructions extends Component {

    render() {
        return(
            <div className="popup-instructions">
                <div className="popup-overlay" onClick={this.props.closePopup} />
                <div className="popup_inner">
                    <h1 className="instructions-title">INSTRUCTIONS </h1>
                    <h2 className="sub-title"> Setup </h2>
                    <ol className="instructions-setup">
                        <li>Select a Challenge Level.</li>
                        <li>On the board you will see some pieces already placed! Hover over these
                            pieces. Some you can rotate while others are locked in position.</li>
                        <li>Below you will see your game pieces listed, place them on the board by selecting the piece you with to place and the location you want to place it at.</li>
                        <li>To solve the puzzle you must orient the laser and mirror pieces available to hit the target! Game pieces are explained below.</li>
                        <li>Have fun and go! go! go!</li>
                    </ol>

                    <h3 className="sub-title">Game Pieces </h3>
                    <p className="instructions-image-desc"><img src={MirrorImage} className="instructions-image"/> <strong> Mirror/Target: </strong> Can be used as a target (red side), a mirror (diagonal face), or both. </p>
                    <p className="instructions-image-desc"><img src={TargetImage} className="instructions-image"/> <strong> Mirror/Target: </strong> This mirror MUST be used as a target (red side). </p>
                    <p className="instructions-image-desc"><img src={CheckImage} className="instructions-image"/> <strong>Checkpoint:</strong> The laser beam must pass through before hitting the target.  </p>
                    <p className="instructions-image-desc"><img src={DoubImage} className="instructions-image"/> <strong> Double-Mirror:</strong> Both sides of this piece reflect the laser 90 degrees. </p>
                    <p className="instructions-image-desc"><img src={LaserImage} className="instructions-image"/> <strong>Laser:</strong> Starting point for every laser beam! Push the laser button below to engage. </p>

                    <h3 className="sub-title">Laser Interactions Examples </h3>
                    <p className="instructions-laser-desc">
                        <img src={LaserLaserImage} className="instructions-image"/>
                        <img src={MirrorLaserImage} className="instructions-image"/>
                        <img src={CheckLaserImage} className="instructions-image"/>
                        <img src={DoubLaserImage} className="instructions-image"/>
                    </p>
                </div>
            </div>
        );
    }

}


export default Instructions;