import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';


describe('Knight', () => {
    let board;
    beforeEach(() => board = new Board());    
    
    it('can only move in "L" shapes', () => {
        const knight = new Knight(Player.WHITE);
        board.setPiece(Square.at(1, 1), knight);

        const moves = knight.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(2,3),
            Square.at(0,3),
            Square.at(3,2),
            Square.at(3,0),
   
        ]
        
        moves.should.have.length(4);
        moves.should.deep.include.members(expectedMoves);
    });

});

