(function() {
  const tictactoe = {
    board: [
      ['tl', 'tc', 'tr'],
      ['ml', 'mc', 'mr'],
      ['bl', 'bc', 'br']
    ],
    directory: {},
    currentTurn: 1,
    init: function() {
      this.addClickEvents();
      this.createDirectory();
      this.render();
    },
    render: function() {
      for (id in this.directory) {
        const board = this.board;
        const row = this.directory[id].row;
        const col = this.directory[id].col;
        const square = document.getElementById(id);

        if (board[row][col] === 1) {
          square.innerHTML = 'X';
        } else if (board[row][col] === -1) {
          square.innerHTML = 'O';
        }
      }
    },
    createDirectory: function() {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const id = this.board[row][col];
          this.directory[id] = {
            row: row,
            col: col
          };
          this.board[row][col] = 0;
        }
      }
    },
    addClickEvents: function() {
      // Adds click event to board
      document.getElementById('board').addEventListener('click', this.placePiece.bind(this))
    },
    placePiece: function(event) {
      const row = this.directory[event.target.id].row;
      const col = this.directory[event.target.id].col;
      let board = this.board;

      console.log("Before turn change", this.currentTurn);
      console.log("Before piece change", board[row][col]);

      if (board[row][col] === 0) {
        board[row][col] = this.currentTurn;
        this.currentTurn *= -1;
      }

      console.log("Post click", this.currentTurn);
      console.log("Post piece change", board[row][col]);

      this.render();
    }
  }

  tictactoe.init();
})();








// const TicTacToe = function() {
//   this.board = [
//       [0, 0, 0],
//       [0, 0, 0],
//       [0, 0, 0]
//   ];
//   this.legend = {
//     tl: this.board[0][0],
//     tc: this.board[0][1],
//     tr: this.board[0][2],
//     ml: this.board[1][0],
//     mc: this.board[1][1],
//     mr: this.board[1][2],
//     bl: this.board[2][0],
//     bc: this.board[2][1],
//     br: this.board[2][2]
//   };
// };
// TicTacToe.prototype.init = function() {
//   document.getElementById('board').addEventListener('click', function(event) {
//     console.log(event.target.id);
//   });
// }

// const game = new TicTacToe();
// game.init();

// directory: {
//   tl: [0, 0],
//   tc: [0, 1],
//   tr: [0, 2],
//   ml: [1, 0],
//   mc: [1, 1],
//   mr: [1, 2],
//   bl: [2, 0],
//   bc: [2, 1],
//   br: [2, 2]
// },