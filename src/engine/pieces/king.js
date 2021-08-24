import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let locationRow = location.row;
        let locationCol = location.col;
        let expectedMoves = []

        // Movement down
        if(locationRow != 0){
            expectedMoves.push(Square.at(locationRow-1, locationCol))
        }

        // Movement up
        if(locationRow != 7){
            expectedMoves.push(Square.at(locationRow+1, locationCol))
        }

         // Movement right
         if(locationCol != 0){
            expectedMoves.push(Square.at(locationRow, locationCol-1))
        }

         // Movement left
         if(locationCol != 7){
            expectedMoves.push(Square.at(locationRow, locationCol+1))
        }
        console.log("kingExpectedMoves: ", expectedMoves)
        return expectedMoves;
    }
}