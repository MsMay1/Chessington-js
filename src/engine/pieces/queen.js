import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let initialArray = [0, 1, 2, 3, 4, 5, 6, 7]
        
        let locationRow = location.row;
        let locationCol = location.col;
        let expectedRookLikeMoves = []

        for(let i=0; i<initialArray.length; i++){
            if(i != locationCol){
                expectedRookLikeMoves.push(Square.at(locationRow, i))
            } 
        }

        for(let i=0; i<initialArray.length; i++){
            if(i != locationRow){
                expectedRookLikeMoves.push(Square.at(i, locationCol))
            } 
        }


        // bishop-like movement

        let expectedBishopLikeMoves =[];

        function findMoves(locationRow, locationCol){

            let initialArray = [0, 1, 2, 3, 4, 5, 6, 7];

            let availableTopRowMoves =[];
            for(let j=(locationRow+1); j<=7; j++){
                availableTopRowMoves.push(j)
            }

            let availableRightColMoves =[];
            for(let j=(locationCol+1); j<=7; j++){
                availableRightColMoves.push(j)
            }

            let availableBottomRowMoves =[];
            for(let j=(locationRow-1); j>=0; j--){
                availableBottomRowMoves.push(j)
            }
  
            let availableLeftColMoves =[];
            for(let j=(locationCol-1); j>=0; j--){
                availableLeftColMoves.push(j)
            }

            let moves = {
                "availableTopRowMoves": availableTopRowMoves,
                "availableRightColMoves": availableRightColMoves,
                "availableBottomRowMoves": availableBottomRowMoves,
                "availableLeftColMoves": availableLeftColMoves
        }
            console.log(moves)
            console.log("FINDMOVES: moves.availableTopRowMoves: ", moves.availableTopRowMoves)
            return moves
        }

        function smallestArray(x, y){
            let arrayLength; 
            if(x.length < y.length){
                arrayLength = x.length
            } else {
                arrayLength = y.length
            }
            return arrayLength
        }

        function topRight(moves){
            let movesLength = smallestArray(moves.availableTopRowMoves, moves.availableRightColMoves)  
            for(let i=0; i<movesLength; i++){
                expectedBishopLikeMoves.push(Square.at(moves.availableTopRowMoves[i],moves.availableRightColMoves[i]))
            }
        }

        function topLeft(moves){
            let movesLength = smallestArray(moves.availableTopRowMoves, moves.availableLeftColMoves)
            for(let i=0; i<movesLength; i++){
                expectedBishopLikeMoves.push(Square.at(moves.availableTopRowMoves[i],moves.availableLeftColMoves[i]))
            }
        }

        function bottomLeft(moves){
            let movesLength = smallestArray(moves.availableBottomRowMoves, moves.availableLeftColMoves)
            for(let i=0; i<movesLength; i++){
                expectedBishopLikeMoves.push(Square.at(moves.availableBottomRowMoves[i],moves.availableLeftColMoves[i]))
            }
        }

        function bottomRight(moves){
            let movesLength = smallestArray(moves.availableBottomRowMoves, moves.availableRightColMoves)
            for(let i=0; i<movesLength; i++){
                expectedBishopLikeMoves.push(Square.at(moves.availableBottomRowMoves[i],moves.availableRightColMoves[i]))
            }

        }

        let moves = findMoves(locationRow, locationCol);
        topRight(moves); 
        topLeft(moves)
        bottomLeft(moves)
        bottomRight(moves)

        let expectedMoves = [...expectedRookLikeMoves, ...expectedBishopLikeMoves]
        console.log(expectedMoves)

        // output
        return expectedMoves
    
    }
// Check if square is occupied - Not Working
    checkIfPieceAtSquare(board, expectedMoves){
        expectedMoves.forEach(move => {

            let myPieceAtSquare = board.getPiece(move);
            // should returns this.board[row][col]
            console.log("myPieceAtSquare", myPieceAtSquare)

            if(myPieceAtSquare){
                 expectedMoves.pop(move)
            }

        });
        return expectedMoves
    }

}
