import 'chai/register-should';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {
    
    let board;
    beforeEach(() => board = new Board());    
    
    it('can only move diagonally', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(1, 3), bishop);

        const moves = bishop.getAvailableMoves(board);

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
            Square.at(4,0)
        ]
        
        moves.should.have.length(9);
        moves.should.deep.include.members(expectedMoves);
    });

});
