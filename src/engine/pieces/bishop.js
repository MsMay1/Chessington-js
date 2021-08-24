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

        let topRightR = locationRow
        let topRightC = locationCol
        let topLeftR = locationRow
        let topLeftC = locationCol
        let bottomRightR = locationRow
        let bottomRightC = locationCol
        let bottomLeftR = locationRow
        let bottomLeftC = locationCol
// diagonal movement (+1,+1)(-1, -1)(-1, +1)(+1, -1)
        for(let i=0; i< initialArray.length; i++){

             // Top right
            if(locationRow != 7 && locationCol != 7){
                topRightR++
                topRightC++
                expectedMoves.push(Square.at(topRightR, topRightC))
                // locationRow = topRightR
                // locationCol = topRightC
            }
            // Top left
            if(locationRow != 7 && locationCol != 0){
                topLeftR++
                topLeftC--
                expectedMoves.push(Square.at(topLeftR, topLeftC))
                // locationRow = topLeftR
                // locationCol = topLeftC
                
            }
            
            if(locationRow != 0 && locationCol != 7){
                bottomRightR--
                bottomRightC++
                expectedMoves.push(Square.at(bottomRightR, bottomRightC))
                // locationRow = bottomRightR
                // locationCol = bottomRightC
            }
            if(locationRow != 0 && locationCol != 0){
                bottomLeftR--
                bottomLeftC--
                expectedMoves.push(Square.at(bottomLeftR, bottomLeftC))
                // locationRow = bottomLeftR
                // locationCol = bottomLeftC
            }


        }

        console.log("expectedMoves: ", expectedMoves)
        return expectedMoves;
    }
}


// function topRightMove(locationRow, locationCol, initialArray){

//     let expectedTopRightMoves = []
//     let topRightR = locationRow
//     let topRightC = locationCol
//     for(let i=0; i< initialArray.length; i++){

//         // Top right
//        if(locationRow != 7 && locationCol != 7){
//           topRight ++
//           topLeft++
//         //    let topRightR = locationRow++
//         //    let topRightC = locationCol++
//            expectedTopRightMoves.push(Square.at(topRightR, topRightC))
//         //    locationRow = topRightR
//         //    locationCol = topRightC
//        }
//     }
//     return expectedTopRightMoves
// }