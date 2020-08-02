import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Button, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: '64px',
    display: 'flex',
  },
  brand: {
    flexGrow: 1,
    textAlign: 'left',
    marginLeft: '20px',
  },
  menu: {
    flexDirection: 'flex-end',
    marginRight: '20px',
  }
}))

const Navbar = () => {
  const styles = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar variant='dense' className={styles.navbar}>
        <Typography variant='h6' className={styles.brand}>NSW Covid Cases Checker</Typography>
        <Box className={styles.menu}>
          <Button color='inherit'>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;