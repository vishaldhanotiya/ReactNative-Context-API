import React, {createContext, useReducer} from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [...state, {title: 'Blog Number ' + state.length}];
  }
};

export default BlogContext = createContext();

export const BlogProvider = ({children}) => {
  const [blogList, dispatch] = useReducer(reducer, []);

  const addBlog = () => {
    dispatch({type: 'ADD_BLOG'});
  };
  return (
    <BlogContext.Provider value={{data: blogList, addBlog}}>
      {children}
    </BlogContext.Provider>
  );
};
