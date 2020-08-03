import React, { useContext } from 'react'

import Navbar from './Navbar';
import CasesList from './CasesList';
import FooterContainer from './FooterContainer';

import CasesContextProvider from '../contexts/CasesContext';
import { ThemeContext } from '../contexts/ThemeContext';

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Main = () => {
  const { isLightTheme, themes } = useContext(ThemeContext)
  const useStyles = makeStyles((theme) => ({
    main: {
      padding: '0px',
      margin: '0px',
      height: '100vh',
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.background,
      display: 'inline',
    }
  }))

  const styles = useStyles()

  return (
    <Container className={styles.main}>
        <Navbar />
        <CasesContextProvider>
          <CasesList />
        </CasesContextProvider>
        <FooterContainer />
    </Container>
  );
}

export default Main;