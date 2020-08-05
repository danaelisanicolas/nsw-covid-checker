import React, { useContext, useState } from 'react';

import { Input, Button, FormControl, FormHelperText, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Search from '@material-ui/icons/Search'

import { CasesContext } from '../contexts/CasesContext'
import { ThemeContext } from '../contexts/ThemeContext';

const Searchbar = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)
  const [ errorText, setErrorText ] = useState(null)

  const useStyles = makeStyles((theme) => ({
    form: {
      display: 'block',
      textAlign: 'center',
      textAlignLast: 'center',
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
      '&::before': {
        borderBottom: `1px solid ${isLightTheme ? themes.light.secondary : themes.dark.primary}`,
      },
      '&::after': {
        borderBottom: `1px solid ${isLightTheme ? themes.light.primary : themes.dark.secondary}`,
      },
      height: '54px',
      width: '35%',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },
      margin: '0 8px',
      color: isLightTheme ? themes.light.secondary : themes.dark.primary,
      fontSize: '0.9em',
    }
  }))

  const styles = useStyles()
  const { searchLocation } = useContext(CasesContext)

  const search = (e) => {
    e.preventDefault()
    if (!errorText) {
      const searchInput = document.querySelector('#search-input')
      searchLocation(searchInput.value)
    }
  }

  const validate = (e) => {
    const postcode = e.target.value
    if (postcode.length > 4) {
      setErrorText('Invalid NSW Postcode')
    } else if ((parseInt(postcode) < 2000) && postcode.length >= 4) {
      setErrorText('Invalid NSW Postcode')
    } else if ((parseInt(postcode) >= 2600) && (parseInt(postcode) < 2640)) {

    } else if (parseInt(postcode) >= 2900) {
      setErrorText('Invalid NSW Postcode')
    } else {
      setErrorText(null)
    }
  }

  return (
    <FormControl className={styles.form} onSubmit={search} error={errorText}>
      {errorText ? (<FormHelperText>{errorText}</FormHelperText>) : null}
      <Input onChange={validate} onBlur={validate} type='search' id='search-input' inputProps={{style: {textAlign:'center'}}} className={styles.input} variant='filled' placeholder='Postcode'
      startAdornment={
        <InputAdornment position='start'><Search /></InputAdornment>
      } />
      <Button type='submit' variant='contained' size='medium' className={styles.button} onClick={search}>Go</Button>
    </FormControl>
  );
}

export default Searchbar;