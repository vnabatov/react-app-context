const initState = {
  num: 999,
  text: 'init text'
};

export async function setNum(state, value) {
  return {
    ...state,
    num: value
  };
}

export function setText(state, text) {
  return {
    ...state,
    text
  };
}

export function changeFullState(state, newState) {
  return {
    ...state,
    ...newState
  };
}

export const actions = {
  setNum,
  setText
};

export default initState;
