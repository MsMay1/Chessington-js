import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let initialArray = [0, 1, 2, 3, 4, 5, 6, 7]
        
        let locationRow = location.row;
        let locationCol = location.col;

        let expectedMoves = []
// diagonal movement (+1,+1)(-1, -1)(-1, +1)(+1, -1)
        for(let i=0; i< initialArray.length; i++){

             // Top right
            if(locationRow != 7 && locationCol != 7){
                let topRightR = locationRow++
                let topRightC = locationCol++
                expectedMoves.push(Square.at(topRightR, topRightC))
            }
            // Top left
            if(locationRow != 7 && locationCol != 0){
                let topLeftR = locationRow++
                let topLeftC = locationCol--
                expectedMoves.push(Square.at(topLeftR, topLeftC))
            }
            
            if(locationRow != 0 && locationCol != 7){
                let bottomRightR = locationRow--
                let bottomRightC = locationCol++
                expectedMoves.push(Square.at(bottomRightR, bottomRightC))
            }
            if(locationRow != 0 && locationCol != 0){
                let bottomLeftR = locationRow--
                let bottomLeftC = locationCol--
                expectedMoves.push(Square.at(bottomLeftR, bottomLeftC))
            }


        }
        return expectedMoves;
    }
}
