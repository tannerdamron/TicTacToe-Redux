const SquaresReducer = (state = {board: Array(9).fill(null)}, action) => {
  switch (action.type) {
    case 'USER_CLICK':
    state.board[action.i] = 'X';
    console.log(state);
    default:
  return state;
  }
};

export default SquaresReducer;