import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import Challenges from '../Challenges/Container';
import Mirror from './Mirror';
import Target from './Target';
import DoubleMirror from './DoubleMirror';
import Splitter from './Splitter';
import Check from './Check.js';
import Laser from './Laser.js';
import Empty from './Empty.js';
import Instructions from './Instructions.js';
import './Container.css';
import LaserLaser from'./LaserLaser';

//piece types
export const MIRROR = 'mirror';
export const DOUBM = 'doublemirror';
export const SPLITTER = 'splitter';
export const CHECK = 'check';
export const LASER = 'laser';
export const TARGET = 'target';
export const EMPTY = 'empty';

//directions
export const NORTH = 'north';
export const EAST = 'east';
export const SOUTH = 'south';
export const WEST = 'west';

//movable
export const LOCK = 'locked';
export const TURN = 'turn';
export const FREE = 'free';

//game states
const EDIT = 'edit';
const RUN = 'run';
const WIN = 'win';

const emptyBoard = [
    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}],
    [{type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}, {type: 'empty', laser: null, direction: null, movable: null}]
];

class Container extends Component {
    constructor(props) {
        super(props);
        this.setLevel = this.setLevel.bind(this);
        this.rotatePiece = this.rotatePiece.bind(this);
        this.selectPiece = this.selectPiece.bind(this);
        this.boardClick = this.boardClick.bind(this);
        this.removePiece = this.removePiece.bind(this);
        this.testSolution= this.testSolution.bind(this);
        this.emptyBoard= this.emptyBoard.bind(this);
        this.toggleInstructions = this.toggleInstructions.bind(this);
        this.undoMove = this.undoMove.bind(this);
        this.showSolution = this.showSolution.bind(this);
        this.testLaser = this.testLaser.bind(this);
        this.stepLaser = this.stepLaser.bind(this);

        //setting the initial state
        this.state = {
            history: [
                //initial state of all squares
                emptyBoard
            ],
            //these are pieces available to place on grid
            pieces: [[],],
            selected: null,
            solution: emptyBoard,
            showInstructions: false,
            stepNumber: 0,
            gameState: EDIT,
            laserPos: {
                row: null,
                col: null,
                orientation: null,
            }
        };
    }

    showSolution = () => {
        let history = [...this.state.history];
        let curBoard = this.state.solution;

        history.push(curBoard);

        this.setState({
            history,
            pieces: [[],],
            stepNumber: history.length,

        });
    };

    setLevel = levelData => {

        this.emptyBoard();

        //clear history
        let history = [emptyBoard];
        let pieces = [[]];

        //reset history
        history.push(levelData.board);
        pieces.push(levelData.pieces);

        this.setState({
            history,
            pieces,
            solution: [...levelData.solution],

        });
    };

    emptyBoard = () => {
        this.setState({
            history: [
                //initial state of all squares
                emptyBoard
            ],
            //these are pieces available to place on grid
            pieces: [[],],
            selected: null,
            solution: emptyBoard,
        });
    };

    undoMove = () => {
        let history = [...this.state.history];
        let curBoard = [...history[history.length-1].map(row => [...row.map(cell => {
            return {...cell};
        })])];
        let pieces = [...this.state.pieces];
        let curPieces = [...this.state.pieces[this.state.pieces.length-1]];

        if((this.state.history.length <3)||(this.state.pieces.length <3)){
        }
        else{
                pieces.pop(curPieces);
                history.pop(curBoard);
        }

        this.setState({
            history,
            pieces,
            stepNumber: history.length,
        });

    };

    toggleInstructions = () => {
        this.setState({
            showInstructions: !this.state.showInstructions
        });
    };

    boardClick = (r,c) => {

        const history = [...this.state.history];
        const curBoard = [...history[history.length-1].map(row => [...row.map(cell => {
            return {...cell};
        })])];
        let curP = this.state.selected;
        let curPieces = [...this.state.pieces[this.state.pieces.length-1]];

        //PLACE A PIECE ON THE BOARD
        if((curBoard[r][c].type === 'empty') && (this.state.selected !== null))
        {

            //remove piece from array pieces, push new pieces array to pieces
            curPieces = curPieces.filter(piece => piece !== this.state.selected);
            this.state.pieces.push(curPieces);

            //add piece (type and direction) at (r,c) to history
            curBoard[r][c].type = this.state.selected.type;
            curBoard[r][c].direction = this.state.selected.direction;
            curBoard[r][c].movable = this.state.selected.movable;
            history.push(curBoard);

            //update state
            this.setState({
                history,
                pieces: this.state.pieces,
                selected: null,
                stepNumber: history.length,
            });

        }
        else {
        }
    };

    removePiece= (r,c) => {
        let history = [...this.state.history];
        const curBoard = [...history[history.length-1].map(row => [...row.map(cell => {
            return {...cell};
        })])];
        let curPieces = [...this.state.pieces[this.state.pieces.length-1]];

        let newP = {};
        console.log(this.state.pieces);

        //add piece back to to array pieces
        newP.type = curBoard[r][c].type;
        newP.direction = curBoard[r][c].direction;
        newP.movable = curBoard[r][c].movable;
        newP.laser = curBoard[r][c].laser;

        curPieces.push(newP);
        this.state.pieces.push(curPieces);

        curBoard[r][c].type = 'empty';
        curBoard[r][c].laser = null;
        curBoard[r][c].direction = null;
        curBoard[r][c].movable = null;

        //update state
        history.push(curBoard);
        this.setState({
            history,
            pieces: this.state.pieces,
            selected: null,
            stepNumber: history.length,
        });
    };

    selectPiece = (piece) => {
        this.setState ({
            selected: piece,
        });
    };

    rotatePiece = (r, c) => {

        //update pieces history with blank pieces
        let newP = [];
        let curPieces = [...this.state.pieces[this.state.pieces.length-1]];
        curPieces.push(newP);
        this.state.pieces.push(curPieces);

        let history = [...this.state.history];
        const curBoard = [...history[history.length-1].map(row => [...row.map(cell => {
            return {...cell};
        })])];

        if (curBoard[r][c].direction === NORTH) {
            curBoard[r][c].direction = EAST;
        }
        else if (curBoard[r][c].direction === EAST) {
            curBoard[r][c].direction = SOUTH;
        }
        else if (curBoard[r][c].direction === SOUTH) {
            curBoard[r][c].direction = WEST;
        }
        else if (curBoard[r][c].direction === WEST) {
            curBoard[r][c].direction = NORTH;
        }
        else{
            curBoard[r][c].direction = NORTH;
        }

        history.push(curBoard);
        this.setState({
            history,
            pieces: this.state.pieces,
            stepNumber: history.length,
        });
    };

    testSolution =() =>{
        let curBoard = [...this.state.history[this.state.history.length - 1]];

        let sum=0;

        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                if((this.state.solution[i][j].direction === curBoard[i][j].direction) && (this.state.solution[i][j].type === curBoard[i][j].type)){
                    sum = sum+1;
                }
            }
        }

        if(sum === 25){
            return true;
        }
        return null;
    };

    testLaser = ()=> {
        let history = [...this.state.history];
        const curBoard = [...history[history.length-1].map(row => [...row.map(cell => {
            return {...cell};
        })])];
        let r =0;
        let c =0;
        let ori=0;

        //search current board for location of laser
        for(let i=0; i<5; i++){
            for(let j=0; j<5; j++){
                if(curBoard[i][j].type === LASER){
                    r = i;
                    c = j;
                    ori = curBoard[r][c].direction;
                }
                else{
                }
            }
        }

        this.setState ({
            laserPos: {
                //set coordinate of where the laser is
                row: r,
                col: c,
                orientation: ori,
            },
           gameState: RUN,
        }, () => this.stepLaser());


    };

    stepLaser = () => {
        let r = this.state.laserPos.row;
        let c = this.state.laserPos.col;
        let ori = this.state.laserPos.orientation;
        let tempH = [...this.state.history];

        if(!validCoordinates(r,c)){
            //LOST
            alert("Pew! Pew! Pew! Nope not right...");
            tempH[tempH.length - 1] = tempH[tempH.length - 1].map(row => row.map(cell => {
                cell.laser = null;
                return cell;
            }));
            this.setState({
                laserPos: {
                    row: null,
                    col: null,
                    orientation: null,
                },
                gameState: EDIT,
                history: tempH,
            })
        }
        else{
            let curCell = tempH[tempH.length - 1][r][c];
            tempH[tempH.length - 1][r][c] = {...tempH[tempH.length - 1][r][c], laser: ori};
            switch (curCell.type){
                case LASER:
                    ori = nextDirLaser(ori, curCell.direction);
                    break;
                case EMPTY:
                    ori = nextDirEmpty(ori, curCell.direction);
                    break;
                case MIRROR:
                    ori =nextDirMirror(ori, curCell.direction);
                    break;
                case CHECK:
                    ori =nextDirCheck(ori, curCell.direction);
                    break;
                case DOUBM:
                    ori =nextDirDoub(ori, curCell.direction);
                    break;
                case TARGET:
                    ori =nextDirTarget(ori, curCell.direction);
                    break;
                default:
                    break;
            }
            if(!ori){
                alert("Pew! Pew! Pew! Nope not right...");
                tempH[tempH.length - 1] = tempH[tempH.length - 1].map(row => row.map(cell => {
                    cell.laser = null;
                    return cell;
                }));
                this.setState({
                    laserPos: {
                        row: null,
                        col: null,
                        orientation: null,
                    },
                    gameState: EDIT,
                    history: tempH,
                })
            }if(ori === WIN){
                if(this.testSolution()){
                    alert("All you do is win!");
                }
                else{
                    alert("Pew! Pew! Pew! Nope not right...");
                }
                tempH[tempH.length - 1] = tempH[tempH.length - 1].map(row => row.map(cell => {
                    cell.laser = null;
                    return cell;
                }));
                this.setState({
                    laserPos: {
                        row: null,
                        col: null,
                        orientation: null,
                    },
                    gameState: EDIT,
                    history: tempH,
                })
            }else{
                let newLaserPos = newCoordinates(r, c, ori);
                this.setState({
                    laserPos: {
                        //set coordinate of where the laser is
                        row: newLaserPos.r,
                        col: newLaserPos.c,
                        orientation: newLaserPos.o,
                    },
                    history: tempH,
                }, () => setTimeout(() => this.stepLaser(), 100));
            }
        }

    };

    render() {

        let curBoard= [...this.state.history[this.state.history.length-1]];
        let status;
        console.log(this.state.history);

        /*
        if(this.state.solution === emptyBoard) {
            status = "It's go time!";

        } else {
            if (this.testSolution(curBoard)) {
                status = "Great work, you solved it!"
            } else{
                status = "It's go time!"
            }
        }
        */
        return (
            <Grid fluid>
                <Row>

                    <Col xs={8}>
                        <div className="game-title">
                            LASER MAZE
                        </div>
                        <div className="game">
                            {
                                this.state.history[this.state.history.length - 1].map((row, r) => {
                                    return <div key={r} className="row">
                                        {
                                            row.map((cell, c) => {
                                                switch (cell.type) {
                                                    case MIRROR:
                                                        return <Mirror key={`${r},${c}`}
                                                                       direction={cell.direction}
                                                                       laser={cell.laser}
                                                                       movable={cell.movable}
                                                                       clickHandler={() => this.boardClick(r, c)}
                                                                       rotateHandler={() => this.rotatePiece(r, c)}
                                                                       removeHandler={() => this.removePiece(r, c)}/>;
                                                    case DOUBM:
                                                        return <DoubleMirror key={`${r},${c}`}
                                                                             direction={cell.direction}
                                                                             laser={cell.laser}
                                                                             movable={cell.movable}
                                                                             clickHandler={() => this.boardClick(r, c)}
                                                                             rotateHandler={() => this.rotatePiece(r, c)}
                                                                             removeHandler={() => this.removePiece(r, c)}/>;
                                                    case SPLITTER:
                                                        return <Splitter key={`${r},${c}`}
                                                                         direction={cell.direction}
                                                                         laser={cell.laser}
                                                                         movable={cell.movable}
                                                                         clickHandler={() => this.boardClick(r, c)}
                                                                         rotateHandler={() => this.rotatePiece(r, c)}
                                                                         removeHandler={() => this.removePiece(r, c)}/>;
                                                    case CHECK:
                                                        return <Check key={`${r},${c}`}
                                                                      direction={cell.direction}
                                                                      laser={cell.laser}
                                                                      movable={cell.movable}
                                                                      clickHandler={() => this.boardClick(r, c)}
                                                                      rotateHandler={() => this.rotatePiece(r, c)}
                                                                      removeHandler={() => this.removePiece(r, c)}/>;
                                                    case LASER:
                                                        return <Laser key={`${r},${c}`}
                                                                      laser={cell.laser}
                                                                      direction={cell.direction}
                                                                      movable={cell.movable}
                                                                      clickHandler={() => this.boardClick(r, c)}
                                                                      rotateHandler={() => this.rotatePiece(r, c)}
                                                                      removeHandler={() => this.removePiece(r, c)}
                                                                      /*laserHandler={() => this.goLaser(r,c)}*//>;
                                                    case TARGET:
                                                        return <Target key={`${r},${c}`}
                                                                      direction={cell.direction}
                                                                      movable={cell.movable}
                                                                       laser={cell.laser}
                                                                      clickHandler={() => this.boardClick(r, c)}
                                                                      rotateHandler={() => this.rotatePiece(r, c)}
                                                                      removeHandler={() => this.removePiece(r, c)}/>;
                                                    default:
                                                        return <Empty key={`${r},${c}`}
                                                                      className="square"
                                                                      laser={cell.laser}
                                                                      clickHandler={() => this.boardClick(r, c)}/>

                                                }

                                            })
                                        }
                                    </div>
                                })
                            }

                            <div className="buttons-info">
                                    <button className="game-buttons-laser" onClick={this.testLaser}>
                                        Laser!
                                    </button>
                                    <button className="game-buttons" onClick={this.undoMove}>
                                        Undo
                                    </button>
                                    <button  className="game-buttons" onClick={this.emptyBoard}>
                                        Clear
                                    </button>
                                    <button className="game-buttons" onClick={this.showSolution}>
                                        Show Solution
                                    </button>
                            </div>
                            <div className="game-pieces">
                                {
                                    this.state.pieces[this.state.pieces.length-1].map((piece, p) => {
                                        switch (piece.type) {
                                            case MIRROR:
                                                return <Mirror key={`${p}`}
                                                               selected={this.state.selected === piece}
                                                               direction={piece.direction}
                                                               clickHandler={() => this.selectPiece(piece)}/>;
                                            case DOUBM:
                                                return <DoubleMirror key={`${p}`}
                                                                     selected={this.state.selected === piece}
                                                                     direction={piece.direction}
                                                                     clickHandler={() => this.selectPiece(piece)}/>;
                                            case SPLITTER:
                                                return <Splitter key={`${p}`}
                                                                 selected={this.state.selected === piece}
                                                                 direction={piece.direction}
                                                                 clickHandler={() => this.selectPiece(piece)}/>;
                                            case CHECK:
                                                return <Check key={`${p}`}
                                                              selected={this.state.selected === piece}
                                                              direction={piece.direction}
                                                              clickHandler={() => this.selectPiece(piece)}/>;
                                            case LASER:
                                                return <Laser key={`${p}`}
                                                              selected={this.state.selected === piece}
                                                              direction={piece.direction}
                                                              clickHandler={() => this.selectPiece(piece)}/>;
                                            case TARGET:
                                                return <Target key={`${p}`}
                                                               selected={this.state.selected === piece}
                                                               direction={piece.direction}
                                                               clickHandler={() => this.selectPiece(piece)}/>;
                                            default:
                                                return <div key={`${p}`}>  </div>
                                        }
                                    })
                                }

                            </div>

                        </div>

                    </Col>
                    <Col xs={4}>
                        <Challenges className="sidebar" setLevel={this.setLevel}/>

                        <div className="game-instructions">
                            <button className="game-buttons" onClick={this.toggleInstructions.bind(this)}>
                                Instructions
                            </button>
                            {this.state.showInstructions ?
                                <Instructions
                                    closePopup={this.toggleInstructions.bind(this)}
                                />
                                : null
                            }
                        </div>

                    </Col>
                </Row>
            </Grid>

        )
    }
}

const nextDirEmpty = (laserDir, pieceDir) => {
    return laserDir;
};

const nextDirLaser = (laserDir, pieceDir) => {
    return laserDir;
};

const nextDirMirror = (laserDir, pieceDir) => {
    switch(pieceDir){
        case NORTH:
            return laserDir === SOUTH ? EAST : laserDir === WEST ? NORTH : null;
        case EAST:
            return laserDir === NORTH ? EAST : laserDir === WEST ? SOUTH : null;
        case SOUTH:
            return laserDir === NORTH ? WEST : laserDir === EAST ? SOUTH : null;
        case WEST:
            return laserDir === SOUTH ? WEST : laserDir === EAST ? NORTH : null;
        default:
            return null;
    }
};

const nextDirCheck = (laserDir, pieceDir) => {
    switch(pieceDir){
        case NORTH:
        case SOUTH:
            return laserDir === NORTH ? NORTH : laserDir === SOUTH ? SOUTH : null;
        case EAST:
        case WEST:
            return laserDir === EAST ? EAST : laserDir === WEST ? WEST : null;
        default:
            return null;
    }
};

const nextDirTarget = (laserDir, pieceDir) => {
    switch(pieceDir){
        case NORTH:
            return laserDir === SOUTH ? EAST : laserDir === WEST ? NORTH : laserDir === NORTH ? WIN : null;
        case EAST:
            return laserDir === NORTH ? EAST : laserDir === WEST ? SOUTH : laserDir === EAST ? WIN : null;
        case SOUTH:
            return laserDir === EAST ? SOUTH : laserDir === NORTH ? WEST : laserDir === SOUTH ? WIN : null;
        case WEST:
            return laserDir === EAST ? NORTH : laserDir === SOUTH ? WEST : laserDir === WEST ? WIN : null;
        default:
            return null;
    }
};

const nextDirDoub = (laserDir, pieceDir) => {
    switch(pieceDir){
        case NORTH:
        case SOUTH:
            return laserDir === NORTH ? WEST : laserDir === EAST ? SOUTH : laserDir === SOUTH ? EAST : laserDir === WEST ? NORTH : null;
        case EAST:
        case WEST:
            return laserDir === NORTH ? EAST : laserDir === WEST ? SOUTH : laserDir === SOUTH ? WEST : laserDir === EAST ? NORTH : null;
        default:
            return null;
    }
};

const printHistory = h => {
    let output = '';
    h.forEach((stage, s) => {
        output += `[${s}]--------------------`;
        stage.forEach(row => {
            output += '\n\t\t';
            row.forEach(cell => {
                output += cell.type.substring(0,1) + ' ';
                //output += cell.laser ? cell.laser : 'n';
            })
        });
        output += '\n\t----------------\n\n';
    });
};

const validCoordinates = (r,c) => r >= 0 && r < 5 && c >= 0 && c < 5;

const newCoordinates = (r,c,o) => {
    switch(o){
        case NORTH:
            return {r: r-1, c, o,};
        case EAST:
            return {r, c: c+1, o,};
        case SOUTH:
            return {r: r+1, c, o,};
        case WEST:
            return {r, c: c-1, o,};
        default:
            return {r,c,o};
    }
};

export default Container;