import React, { useContext } from 'react'

import { CasesContext } from '../contexts/CasesContext'
import { ThemeContext } from '../contexts/ThemeContext'

import Searchbar from './Searchbar'
import CaseItem from './CaseItem'

import { makeStyles } from '@material-ui/core/styles'
import { GridList, Container, Typography } from '@material-ui/core'


const CasesList = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)
  const { cases, error } = useContext(CasesContext)

  const useStyles = makeStyles((theme) => ({
    main: {
      height: 'auto',
      minHeight: '90vh',
      [theme.breakpoints.down('xs')]: {
        minHeight: '100vh',
      },
      padding: '0px',
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.background,
      margin: '0px',
    },
    empty: {
      justifyContent: 'center',
      padding: '8%',
      [theme.breakpoints.down('sm')]: {
        padding: '12% 5% 10%',
      },
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.background,
    },
    notEmpty: {
      justifyContent: 'center',
      paddingBottom: '10px',
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.background,
    },
    list: {
      justifyContent: 'center',
    },
    errorText: {
      color: themes.status.alertColor,
      textAlign: 'center',
      display: 'block',
    }
  }))

  const styles = useStyles()

  return (
    <div className={styles.main}>
      {cases.length ? (
        <Container>
          <Container className={styles.notEmpty}>
            <Searchbar />
          </Container>
          <GridList className={styles.list} cols={1}>
            { cases.map(caseItem => {
              return (
                <CaseItem caseItem={caseItem} key={Date.parse(caseItem['notification-date'])} />
              )
            })}
          </GridList>
        </Container>
      )
      : (
        <Container className={styles.empty}>
          {error ? <Typography className={styles.errorText} variant='caption'>Error: Oops that's on our side. Please try again later.</Typography> : null}
          <Searchbar />
        </Container>
      )}
    </div>
  );
}

export default CasesList;