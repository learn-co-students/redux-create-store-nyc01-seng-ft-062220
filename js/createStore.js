const createStore = (reducer) => {
  let state

  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  getState = () => {
    return state
  }

  return {dispatch, getState}
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducer);
let button = document.getElementById('button');

store.dispatch({ type: '@@INIT' });

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})