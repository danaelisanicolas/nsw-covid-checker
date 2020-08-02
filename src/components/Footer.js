import React from 'react'

import { Switch, Typography, Container, FormGroup, FormControlLabel, Divider, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

const useStyles = makeStyles((theme) => ({
  themeOption: {
    display: 'flex',
    margin: '0 0 10px 24px'
  },
  copyright: {
    textAlign: 'left',
    margin: '20px',
    display: 'inline-flex',
  },
  name: {
    flexGrow: '1',
    [theme.breakpoints.down('sm')]: {
      flexGrow: 'unset',
    },
    margin: '4px',
  },
  link: {
    marginRight: '4px',
  }
}))

const Footer = () => {
  const styles = useStyles()

  const openGithubHandler = () => {
    window.open('https://github.com/danaelisanicolas/');
  }

  const openLinkedInHandler = () => {
    window.open('https://www.linkedin.com/in/danaelisanicolas/')
  }

  return (
    <div>
      <Container className={styles.themeOption}>
        <FormGroup>
          <FormControlLabel className={styles.switch} control={
            <Switch />
          } label={<Typography variant='body2'>Dark Theme</Typography>}>
          </FormControlLabel>
        </FormGroup>
      </Container>
      <Divider />
      <Container id='copyright' className={styles.copyright}>
        <Typography className={styles.name} variant='body2'>DN © {new Date().getFullYear()}</Typography>
        <IconButton onClick={openGithubHandler} size='small' className={styles.link}>
          <RiGithubLine />
        </IconButton>
        <IconButton onClick={openLinkedInHandler} size='small' className={styles.link}>
          <RiLinkedinLine />
        </IconButton>
      </Container>
    </div>
  );
}

export default Footer;