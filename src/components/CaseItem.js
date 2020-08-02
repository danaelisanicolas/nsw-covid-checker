import React from 'react'

import { Card, CardContent, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CustomDivider from './CustomDivider'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '12px 16px',
    textAlign: 'left',
    padding: '10px 20px',
  },
  cardContent: {
    display: 'flex',
  },
  divider: {
    width: '5%',
    padding: 'initial',
  },
  status: {
    fontSize: '1.25em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    }
  },
  confirmDate: {
    fontWeight: 'bold',
  },
  content: {
    padding: '0px 10px',
  }
}))

const CaseItem = ( { caseItem } ) => {
  const styles = useStyles()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date)

    console.log(`${day} ${month} ${year}`)
    return `${day} ${month} ${year}`
  }

  const getColorForDate = (dateString) => {
    // from https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/

    var currDate = new Date();
    var notifDate = new Date(dateString);

    var Difference_In_Time = currDate.getTime() - notifDate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if ((Difference_In_Days > 14) && (Difference_In_Days < 21)) { //between week 2 and 3
      return 'orange'
    } else if (Difference_In_Days < 14) {
      return 'red'
    } else {
      return 'blue'
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
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Container className={styles.divider}>
          <CustomDivider color={getColorForDate(caseItem['notification_date'])} />
        </Container>
        <Container className={styles.content}>
          <Typography className={styles.confirmDate} variant='caption'>{formatDate(caseItem['notification_date'])}</Typography>
          <Typography className={styles.status} variant='h6'>{getStatusForCause(caseItem['likely_source_of_infection'])}</Typography>
          <Typography variant='body2'>{'Postcode: ' + caseItem['postcode']}</Typography>
        </Container>
      </CardContent>
    </Card>
  );
}

export default CaseItem;