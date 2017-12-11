import React from 'react';
//import MirrorImage from '../Assets/nMirror.png'; <img src={MirrorImage} />

const Lvl1 = ({title, completed, clickHandler }) => {


    return(
            <div className ="piece-image" onClick = {clickHandler}>
                {title}
            </div>
    );


};

export default Lvl1;

