import Player from '../player';
import Square from '../square';
import Piece from './piece';

// export default class Pawn extends Piece {
//     constructor(player) {
//         super(player);
//     }

//     getAvailableMoves(board) {
//         let location = board.findPiece(this)
//         if (this.player === Player.WHITE) {
//             if(location == (Square.at(1, location.col))){
//                 console.log(Square.at(1, location.col))
//                 console.log("Array2: ", [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)])
//                 return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
//             } else if (location == (Square.at(7,location.col))){
//                 console.log("else if: ", Square.at(7,location.col))
//                 throw "No Available moves"
//             }
//              console.log("Array1: ", [Square.at(location.row + 1, location.col)])
//              return [Square.at(location.row + 1, location.col)]
//         } else {
//             if(location = Square.at(6, location.col)){
//                 return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
//             } else if (location == Square.at(0,location.col)){
//                 throw "No Available moves"
//             }
//              return [Square.at(location.row - 1, location.col)]
//         }
//     }
// }

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
