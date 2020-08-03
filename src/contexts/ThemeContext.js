import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [ isLightTheme, setIsLightTheme ] = useState(true)

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

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme)
  }

  return (
    <ThemeContext.Provider value={{isLightTheme, themes, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;