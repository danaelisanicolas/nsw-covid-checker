import React, { useContext, useState } from 'react'

import { Container, Typography, Icon, Button, Box, IconButton, Dialog } from '@material-ui/core'
import { Warning } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { ThemeContext } from '../contexts/ThemeContext'

const CustomAlert = () => {
  const bgColor = 'rgb(255,204,102,0.4)'

  const { isLightTheme, themes } = useContext(ThemeContext)
  const [ open, setOpen ] = useState(false)

  const useStyles = makeStyles((theme) => ({
    alert: {
      display: 'block',
      paddingRight: '16px',
      backgroundColor: bgColor,
      [theme.breakpoints.down('sm')]: {
        backgroundColor: isLightTheme ? themes.light.other : themes.dark.other,
        width: 'auto',
      },
      padding: '18px',
      borderRadius: '4px',
    },
    alertTitle: {
      fontWeight: 600,
      fontSize: '14px',
      paddingBottom: '2px',
    },
    content: {
      padding: '0 10px',
    },
    icon: {
      alignSelf: 'center',
      backgroundColor: 'transparent',
      [theme.breakpoints.down('sm')]: {
        alignSelf: 'right',
        textAlign: 'right',
      },
      color: '#ffbb33',
    },
    info: {
      fontSize: '12px',
      padding: '2px 0px',
    },
    alertActionBox: {
      fontSize: '12px',
      width: '100%',
      textAlign: 'left',
      marginTop: '8px',
    },
    alertActionButton: {
      color: '#6699ff',
    },
    alertContent: {
      display: 'inline-flex',
      padding: '0px 10px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    smallDisplay: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      textAlign: 'right',
      padding: '0px',
      width: 'auto',
    },
    dialogContent: {
      padding: '20px',
      backgroundColor: bgColor,
    },
    dialogAction: {
      fontSize: '12px',
      width: '100%',
      textAlign: 'center',
      marginTop: '8px',
    }
  }))

  const styles = useStyles()

  const openTestingCenters = (e) => {
    window.open('https://www.nsw.gov.au/covid-19/how-to-protect-yourself-and-others/clinics')
  }

  const showAlertDialog = (e) => {
    if (window.innerWidth < 960) { // only works for mobile
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  const closeAlertDialog = () => {
    setOpen(false)
  }

  const alertBody = (
    <Container className={styles.dialogContent}>
      <Typography className={styles.alertTitle} variant='body2'>If you have been to this location:</Typography>
      <Typography className={styles.info} variant='body2'>• Watch for COVID-19 symptoms</Typography>
      <Typography className={styles.info} variant='body2'>• If symptoms occur, immediately get tested and self-isolate.</Typography>
      <Box className={styles.dialogAction}>
        <Button className={styles.alertActionButton} variant='outlined' disableElevation size='small' onClick={openTestingCenters}>See Testing Centers</Button>
      </Box>
    </Container>
  )

  return (
    <Container className={styles.alert}>
      {<Dialog open={open} onClose={closeAlertDialog}>{alertBody}</Dialog>}
      <Container className={styles.alertContent}>
        <Icon className={styles.icon}><Warning /></Icon>
        <Container className={styles.content}>
          <Typography className={styles.alertTitle} variant='body2'>If you have been to this location:</Typography>
          <Typography className={styles.info} variant='body2'>• Watch for COVID-19 symptoms</Typography>
          <Typography className={styles.info} variant='body2'>• If symptoms occur, immediately get tested and self-isolate.</Typography>
          <Box className={styles.alertActionBox}>
            <Button className={styles.alertActionButton} variant='outlined' disableElevation size='small' onClick={openTestingCenters}>See Testing Centers</Button>
          </Box>
        </Container>
      </Container>
      <Container className={styles.smallDisplay}>
        <IconButton className={styles.icon} onClick={showAlertDialog} ><Warning /></IconButton>
      </Container>
    </Container>
  );
}

export default CustomAlert;