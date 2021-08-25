import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
// import Piece from '../../../src/engine/pieces/piece';


describe('Queen', () => {
    let board;
    beforeEach(() => board = new Board());    
    
    it('can only move diagonally or laterally', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(1, 3), queen);

        const moves1 = queen.getAvailableMoves(board);
            // Testing if own piece at square
        const moves = queen.checkIfPieceAtSquare(board, moves1)

        const expectedMoves = [
            // bottom left
            Square.at(0,2),
            //bottom right
            Square.at(0,4),
            // top right
            Square.at(2,4),
            Square.at(3,5),
            Square.at(4,6),
            Square.at(5,7),
            // top left
            Square.at(2,2),
            Square.at(3,1),
            Square.at(4,0),
            // right
            Square.at(1,4),
            Square.at(1,5),
            Square.at(1,6),
            Square.at(1,7),
            // left
            Square.at(1,2),
            Square.at(1,1),
            Square.at(1,0),
            // top
            Square.at(2, 3),
            Square.at(3, 3),
            Square.at(4, 3),
            Square.at(5, 3),
            Square.at(6, 3),
            Square.at(7, 3),
            // bottom
            Square.at(0, 3)
        ]
        
        moves.should.have.length(23);
        moves.should.deep.include.members(expectedMoves);
    });
    
});
