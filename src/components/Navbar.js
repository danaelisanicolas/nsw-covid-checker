import React, { useContext, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import { ThemeContext } from '../contexts/ThemeContext'

import { Toolbar, Typography, Button, Box, Dialog, Container } from '@material-ui/core'

const Navbar = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)
  const [ open, setOpen ] = useState(false)

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
    },
    disclaimer: {
      padding: '20px',
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.background,
      color: isLightTheme ? themes.light.secondary : themes.dark.primary,
    },
    disclaimerTitle: {
      fontWeight: 'bold',
      paddingBottom: '8px',
    },
    nswButton: {
      textTransform: 'none',
      color: isLightTheme ? themes.light.primary : themes.dark.secondary,
    },
    buttonBox: {
      width: '100%',
      textAlign: 'center',
    }
  }))

  const styles = useStyles()

  const aboutHandler = (e) => {
    setOpen(true)
  }

  const closeHandler = () => {
    setOpen(false)
  }

  const aboutBody = (
    <Container className={styles.disclaimer}>
      <Typography className={styles.disclaimerTitle} variant='h6'>Disclaimer</Typography>
      <Typography variant='body2'>This project is by no means meant to replace announcements and data from the NSW Gov Health. If you would like to know more regarding the state's current COVID-19 situation, please visit:</Typography>
      <Box className={styles.buttonBox}>
        <Button className={styles.nswButton} href='https://www.nsw.gov.au/covid-19/latest-news-and-updates'>NSW Health News and Updates</Button>
      </Box>
    </Container>
  )

  return (
    <AppBar position='static' className={styles.navbar}>
      {<Dialog open={open} onClose={closeHandler}>{aboutBody}</Dialog>}
      <Toolbar variant='dense' className={styles.toolbar} >
        <Typography variant='h6' className={styles.brand}>NSW Covid Cases Checker</Typography>
        <Box className={styles.menu}>
          <Button color='inherit' onClick={aboutHandler}>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;