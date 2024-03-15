export const initialState = {
  amout: "",
  category: "",
  description: "",
  list: [],
  error: "",
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "addPost":
      return {
        ...state,
        amout: "",
        category: "",
        description: "",
        error: "",
        list: state.list.concat([
          {
            amout: state.amout,
            category: state.category,
            description: state.description,
            id: Date.now(),
          },
        ]),
      };

    case "deletItem":
      return {
        ...state,
        list: state.list.filter((list) => list.id !== action.payload),
      };

    default:
      return state;
  }
};

export default postReducer;
