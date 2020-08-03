import React, { useContext } from 'react';

import { Input, Button, FormControl, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Search from '@material-ui/icons/Search'

import { CasesContext } from '../contexts/CasesContext'
import { ThemeContext } from '../contexts/ThemeContext';

const Searchbar = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)

  const useStyles = makeStyles((theme) => ({
    form: {
      display: 'block',
      textAlign: 'center',
    },
    button: {
      width: '100px',
      [theme.breakpoints.down('xs')]: {
        width: '50px',
      },
      margin: '0 8px',
      backgroundColor: isLightTheme ? themes.light.primary : themes.dark.secondary,
      color: isLightTheme ? themes.light.background : themes.dark.primary,
    },
    input: {
      height: '54px',
      width: '35%',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },
      margin: '0 8px',
      color: isLightTheme ? themes.light.secondary : themes.dark.primary,
      border: isLightTheme ? themes.light.secondary : themes.dark.secondary,
      fontSize: '0.9em',
    }
  }))

  const styles = useStyles()
  const { searchLocation } = useContext(CasesContext)

  const search = (e) => {
    e.preventDefault()

    const searchInput = document.querySelector('#search-input')
    searchLocation(searchInput.value)
  }

  return (
    <FormControl className={styles.form} onSubmit={search}>
      <Input type='search' id='search-input' inputProps={{style: {textAlign:'center'}}} className={styles.input} variant='filled' placeholder='Postcode'
      startAdornment={
        <InputAdornment position='start'><Search /></InputAdornment>
      }/>
      <Button type='submit' variant='contained' size='medium' className={styles.button} onClick={search}>Go</Button>
    </FormControl>
  );
}

export default Searchbar;