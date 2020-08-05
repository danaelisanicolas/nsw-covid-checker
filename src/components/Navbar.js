import React, { useContext, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import { ThemeContext } from '../contexts/ThemeContext'

import { Toolbar, Typography, Button, Box, Dialog, Container } from '@material-ui/core'

const Navbar = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)
  const [ openDisclaimer, setOpenDisclaimer ] = useState(false)
  const [ openHowTo, setOpenHowTo ] = useState(false)

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
      marginLeft: '8px',
      color: isLightTheme ? themes.light.primary : themes.dark.primary,
      fontSize: '0.95em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.05em',
        marginLeft: '20px',
      }
    },
    menu: {
      flexDirection: 'flex-end',
      marginRight: '20px',
      color: isLightTheme ? themes.light.primary : themes.dark.primary,
      [theme.breakpoints.down('sm')]: {
        marginRight: '0px',
      }
    },
    menuItem: {
      fontSize: '0.85em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.05em',
      }
    },
    disclaimer: {
      padding: '20px',
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.other,
      color: isLightTheme ? themes.light.secondary : themes.dark.primary,
    },
    popup: {
      padding: '20px',
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.other,
      color: isLightTheme ? themes.light.secondary : themes.dark.primary,
    },
    popupTitle: {
      fontWeight: 'bold',
      paddingBottom: '8px',
    },
    button: {
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
    setOpenDisclaimer(true)
  }

  const howToHandler = (e) => {
    setOpenHowTo(true)
  }

  const closeDisclaimer = () => {
    setOpenDisclaimer(false)
  }

  const closeHowTo = () => {
    setOpenHowTo(false)
  }

  const aboutBody = (
    <Container className={styles.disclaimer}>
      <Typography className={styles.popupTitle} variant='h6'>Disclaimer</Typography>
      <Typography variant='body2'>This project is by no means meant to replace announcements and data from the NSW Gov Health. If you would like to know more regarding the state's current COVID-19 situation, please visit:</Typography>
      <Box className={styles.buttonBox}>
        <Button className={styles.button} href='https://www.nsw.gov.au/covid-19/latest-news-and-updates'>NSW Health News and Updates</Button>
      </Box>
    </Container>
  )

  const howToBody = (
    <Container className={styles.popup}>
      <Typography className={styles.popupTitle} variant='h6'>How to use</Typography>
      <Typography variant='body2'>Type your postcode or the postcode of the suburb you've been to and click the "Go" button. Covid cases sorted from latest to oldest will be listed out for you. This includes the confirm date of case and the likely source of infection.</Typography>
      <Box className={styles.buttonBox}>
        <Button className={styles.button}>Ok</Button>
      </Box>
    </Container>
  )

  return (
    <AppBar position='static' className={styles.navbar}>
      {<Dialog open={openDisclaimer} onClose={closeDisclaimer}>{aboutBody}</Dialog>}
      {<Dialog open={openHowTo} onClose={closeHowTo}>{howToBody}</Dialog>}

      <Toolbar variant='dense' className={styles.toolbar} >
        <Typography variant='h6' className={styles.brand}>NSW Covid Cases Checker</Typography>
        <Box className={styles.menu}>
          <Button color='inherit' onClick={howToHandler}><Typography className={styles.menuItem} variant='body2'>How To</Typography></Button>
        </Box>
        <Box className={styles.menu}>
          <Button color='inherit' onClick={aboutHandler}><Typography className={styles.menuItem} variant='body2'>About</Typography></Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;