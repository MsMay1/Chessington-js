import Player from '../player';
import Square from '../square';
import Piece from './piece';

// TEST FUNCTION
export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let initialPosition = Square.at(1, location.col)
        let locationRow = location.row;
        
        if (this.player === Player.WHITE) {
            // WHITE
            

            if(locationRow == 1){
                console.log("W loc:", location, "W initial position:", initialPosition)
                // IF AT INITIAL POSITION
                let initialPositionMoves = [Square.at(2, location.col), Square.at(3, location.col)]
                return initialPositionMoves
            } else if(locationRow != 1){
                console.log("W != loc:", location, "W != initial position:", initialPosition)
                // IF NOT AT INITIAL POSITION
                let notInitialPositionMoves = [Square.at(location.row + 1, location.col)];
                return notInitialPositionMoves
            }

        } else {
            if(locationRow == 6){
                    console.log("W loc:", location, "W initial position:", initialPosition)
                // IF AT INITIAL POSITION
                let initialPositionMoves = [Square.at(5, location.col), Square.at(4, location.col)]
                return initialPositionMoves
            } else if(locationRow != 6){
                console.log("W != loc:", location, "W != initial position:", initialPosition)
                // IF NOT AT INITIAL POSITION
                let notInitialPositionMoves = [Square.at(location.row - 1, location.col)];
                return notInitialPositionMoves
            }
            // BLACK
            
        }
    }
}
