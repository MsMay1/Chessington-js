import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let initialArray = [0, 1, 2, 3, 4, 5, 6, 7]
        
        let locationRow = location.row;
        let locationCol = location.col;
        let expectedMoves = []
// increase row or coloumn
// push square.at() to array
// initial position iterate and change row in square.at and push

        for(let i=0; i<initialArray.length; i++){
            if(i != locationCol){
            expectedMoves.push(Square.at(locationRow, i))
            } 
        }

        for(let i=0; i<initialArray.length; i++){
            if(i != locationRow){
            expectedMoves.push(Square.at(i, locationCol))
            } 
        }

        return expectedMoves;
    }
}
        

        
