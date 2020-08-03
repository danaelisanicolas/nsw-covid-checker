import React, { useContext } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Button, Box } from '@material-ui/core'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)

  const useStyles = makeStyles((theme) => ({
    navbar: {
      position: 'sticky',
      top: '0',
    },
    toolbar: {
      height: '64px',
      display: 'flex',
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.background,
    },
    brand: {
      flexGrow: 1,
      textAlign: 'left',
      marginLeft: '20px',
      color: isLightTheme ? themes.light.primary : themes.dark.primary,
      fontSize: '0.9em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.05em',
      }
    },
    menu: {
      flexDirection: 'flex-end',
      marginRight: '20px',
      color: isLightTheme ? themes.light.primary : themes.dark.primary,
      fontSize: '0.9em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.05em',
      }
    }
  }))

  const styles = useStyles()

  return (
    <AppBar position='static' className={styles.navbar}>
      <Toolbar variant='dense' className={styles.toolbar} boxShadow={0}>
        <Typography variant='h6' className={styles.brand}>NSW Covid Cases Checker</Typography>
        <Box className={styles.menu}>
          <Button color='inherit'>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;