import React, { createContext, useState, useEffect, useReducer } from 'react'

export const ThemeContext = createContext()

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return action.lightTheme
    default:
      return state
  }
}

const ThemeContextProvider = (props) => {
  const [ isLightTheme, dispatch ] = useReducer(ThemeReducer, true, () => {
    return localStorage.getItem('theme')
  })

  const [ themes ] = useState({
    light: {
      primary: '#6699ff', //blue
      secondary: '#555', //dark grey
      background: '#fff', //white
      other: '#eee', //light grey
    },
    dark: {
      primary: '#eee', // light grey
      secondary: '#6699ff', //blue
      background: '#000', //black
      other: '#555', //dark grey
    },
    status: {
      alertColor: '#ff6699',
      warningColor: '#ffcc66',
      goodColor: '#6699ff',
    }
  })

  useEffect(() => {
    localStorage.setItem('theme', isLightTheme)
  }, [isLightTheme])

  return (
    <ThemeContext.Provider value={{isLightTheme, themes, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;