import React, { useContext } from 'react';

import { Input, Button, FormControl, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import Search from '@material-ui/icons/Search'

import { CasesContext } from '../contexts/CasesContext'

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'block',
  },
  button: {
    width: '100px',
    margin: '0 8px',
  },
  input: {
    height: '54px',
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    margin: '0 8px',
  }
}))

const Searchbar = () => {
  const styles = useStyles()
  const { searchLocation } = useContext(CasesContext)

  const search = (e) => {
    e.preventDefault()

    const searchInput = document.querySelector('#search-input')
    searchLocation(searchInput.value)
  }

  return (
    <FormControl className={styles.form} onSubmit={search}>
      <Input id='search-input' inputProps={{style: {textAlign:'center'}}} className={styles.input} variant='filled' placeholder='Suburb or Postcode'
      startAdornment={
        <InputAdornment position='start'><Search /></InputAdornment>
      }/>
      <Button type='submit' variant='contained' size='medium' className={styles.button} onClick={search}>Go</Button>
    </FormControl>
  );
}

export default Searchbar;