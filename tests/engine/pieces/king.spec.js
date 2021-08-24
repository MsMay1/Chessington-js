import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());    
    
    it('can only move one square', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 4), king);
 //       king.moveTo(board, Square.at(1, 4));

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(1,4),
            Square.at(0,3),
            Square.at(0,5)
        ]
        
        moves.should.have.length(3);
        moves.should.deep.include.members(expectedMoves);
    });


});
