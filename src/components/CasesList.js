import React, { useContext, useEffect } from 'react'

import CasesContextProvider, { CasesContext } from '../contexts/CasesContext'

import Searchbar from './Searchbar'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CaseItem from './CaseItem'

const useStyles = makeStyles((theme) => ({
  main: {
    height: '80vh',
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    },
  },
  empty: {
    justifyContent: 'center',
    padding: '8%',
    [theme.breakpoints.down('sm')]: {
      padding: '12% 5% 10%',
    },
  }
}))

const CasesList = () => {
  const styles = useStyles()
  const { cases } = useContext(CasesContext)

  return (
    <Container className={styles.main}>
      {cases.length ? (
        <Container>
          <CasesContextProvider>
            <Searchbar />
          </CasesContextProvider>
          <Container>
            { cases.map(caseItem => {
              return (<CaseItem caseItem={caseItem} key={Date.parse(caseItem['notification-date'])} />)
            })}
          </Container>
        </Container>
      )
      : (
        <Container className={styles.empty}>
          <CasesContextProvider>
            <Searchbar />
          </CasesContextProvider>
        </Container>
      )}
    </Container>
  );
}

export default CasesList;