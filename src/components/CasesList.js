import React, { useContext } from 'react'

import CasesContextProvider, { CasesContext } from '../contexts/CasesContext'
import { ThemeContext } from '../contexts/ThemeContext'

import Searchbar from './Searchbar'
import CaseItem from './CaseItem'

import { makeStyles } from '@material-ui/core/styles'
import { GridList, Container } from '@material-ui/core'


const CasesList = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)

  const useStyles = makeStyles((theme) => ({
    main: {
      height: '90vh',
      [theme.breakpoints.down('xs')]: {
        height: '100vh',
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
    }
  }))

  const styles = useStyles()
  const { cases } = useContext(CasesContext)

  return (
    <div className={styles.main}>
      {cases.length ? (
        <Container>
          <Container className={styles.notEmpty}>
            <CasesContextProvider>
              <Searchbar />
            </CasesContextProvider>
          </Container>
          <GridList className={styles.list} cols={1}>
            { cases.map(caseItem => {
              return (<CaseItem caseItem={caseItem} key={Date.parse(caseItem['notification-date'])} />)
            })}
          </GridList>
        </Container>
      )
      : (
        <Container className={styles.empty}>
          <CasesContextProvider>
            <Searchbar />
          </CasesContextProvider>
        </Container>
      )}
    </div>
  );
}

export default CasesList;