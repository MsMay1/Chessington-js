import Piece from './piece';
import Player from '../player';
import Square from '../square';


export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        
        let locationRow = location.row;
        let locationCol = location.col;

        let expectedMoves =[];

        function topMove(locationRow, locationCol){
            if(locationRow <= 5){
                let row = locationRow + 2
                let colLeft = locationCol - 1
                let colRight = locationCol + 1

                if(locationCol != 0) {
                    expectedMoves.push(Square.at(row,colLeft))
                }
                if(locationCol != 7){
                    expectedMoves.push(Square.at(row,colRight))
                }    
            }

        }

        function bottomMove(locationRow, locationCol){
            if(locationRow >= 2){
                let row = locationRow - 2
                let colLeft = locationCol - 1
                let colRight = locationCol + 1

                if(locationCol != 0) {
                    expectedMoves.push(Square.at(row,colLeft))
                }
                if(locationCol != 7){
                    expectedMoves.push(Square.at(row,colRight))
                }    
            }

        }

        function rightMove(locationRow, locationCol){
            if(locationCol <= 5){
                let col = locationCol + 2
                let rowLeft = locationRow - 1
                let rowRight = locationRow + 1

                if(locationRow != 0) {
                    expectedMoves.push(Square.at(rowLeft,col))
                }
                if(locationRow != 7){
                    expectedMoves.push(Square.at(rowRight,col))
                }    
            }

        }

        function leftMove(locationRow, locationCol){
            if(locationCol >= 2){
                let col = locationCol - 2
                let rowLeft = locationRow - 1
                let rowRight = locationRow + 1

                if(locationRow != 0) {
                    expectedMoves.push(Square.at(rowLeft,col))
                }
                if(locationRow != 7){
                    expectedMoves.push(Square.at(rowRight,col))
                }    
            }

        }

        topMove(locationRow, locationCol)
        bottomMove(locationRow, locationCol)
        rightMove(locationRow, locationCol)
        leftMove(locationRow, locationCol)

        console.log("Knight: ", expectedMoves)

        return expectedMoves;
    }
}
