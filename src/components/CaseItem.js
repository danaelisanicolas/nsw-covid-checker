import React, { useContext, useState, useEffect } from 'react'

import { Typography, Container, GridListTile, Dialog, Icon } from '@material-ui/core'
import { Warning } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import CustomDivider from './CustomDivider'
import CustomAlert from './CustomAlert'

import { ThemeContext } from '../contexts/ThemeContext'

const CaseItem = ( { caseItem } ) => {
  const { isLightTheme, themes } = useContext(ThemeContext)
  const [ showWarning, setShowWarning ] = useState(false)

  const useStyles = makeStyles((theme) => ({
    card: {
      width: '-webkit-fill-available',
      margin: '10px 0 0 0',
      textAlign: 'left',
      backgroundColor: isLightTheme ? themes.light.other : themes.dark.other
    },
    cardContent: {
      display: 'flex',
      padding: '12px',
    },
    divider: {
      width: '5%',
      // padding: 'initial',
    },
    status: {
      fontSize: '1.25em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1em',
      },
    },
    confirmDate: {
      fontWeight: 'bold',
    },
    content: {
      color: isLightTheme ? themes.light.secondary : themes.dark.primary,
      alignSelf: 'center',
      [theme.breakpoints.up('lg')]: {
        minWidth: '48%'
      }
    },
    tile: {
      width: '45vh',
    },
  }))

  const styles = useStyles()

  useEffect(() => {
    var currDate = new Date();
    var notifDate = new Date(caseItem['notification_date']);

    var Difference_In_Time = currDate.getTime() - notifDate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if ((Difference_In_Days > 14) && (Difference_In_Days < 21)) { //between week 2 and 3
      setShowWarning(true)
    } else if (Difference_In_Days < 14) {
      setShowWarning(true)
    } else {
      setShowWarning(false)
    }
  }, [caseItem])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date)

    return `${day} ${month} ${year}`
  }

  const getColorForDate = (dateString) => {
    // from https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/

    var currDate = new Date();
    var notifDate = new Date(dateString);

    var Difference_In_Time = currDate.getTime() - notifDate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if ((Difference_In_Days > 14) && (Difference_In_Days < 21)) { //between week 2 and 3
      return themes.status.warningColor
    } else if (Difference_In_Days < 14) {
      return themes.status.alertColor
    } else {
      return themes.status.goodColor
    }
  }

  const getStatusForCause = (cause) => {
    if (cause.match('confirmed')) {
      return 'Community Transmission'
    } else if (cause.match('source not identified')) {
      return 'Source unknown'
    } else {
      return cause
    }
  }

  return (
    <GridListTile className={styles.card} cols={1}>
      <Container className={styles.cardContent}>
        <Container className={styles.divider}>
          <CustomDivider color={getColorForDate(caseItem['notification_date'])} />
        </Container>
        <Container className={styles.content}>
          <Typography className={styles.confirmDate} variant='caption'>{formatDate(caseItem['notification_date'])}</Typography>
          <Typography className={styles.status} variant='h6'>{getStatusForCause(caseItem['likely_source_of_infection'])}</Typography>
          <Typography variant='body2'>{'Postcode: ' + caseItem['postcode']}</Typography>
        </Container>
        {showWarning ? <CustomAlert /> : null}
      </Container>
    </GridListTile>
  );
}

export default CaseItem;