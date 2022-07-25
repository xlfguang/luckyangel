import React, { createContext, useEffect, useReducer } from "react";
const initialState = {
  obj: {
    test:'111'
  },
};

function reducer(state = initialState, action: any) {
  const { type, payload } = action || {};
  switch (type) {
    case "UPDATE_OBJ":
      return {
        ...state,
        obj: payload,
      };

    default:
      return state;
  }
}

// 生成 state 以及 dispatch
export const MyContext = createContext({});

// 将 wrapper 暴露出去
const MyContextWrapper = ({ children: children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyContextWrapper;
