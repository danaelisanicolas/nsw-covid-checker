import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const CustomDivider = ({ color }) => {

  const useStyles = makeStyles((theme) => ({
    dividerVertical: {
      width: '10px',
      backgroundColor: color
    }
  }))

  const styles = useStyles()

  return (
    <Divider orientation='vertical' className={styles.dividerVertical} />
  );
}

export default CustomDivider;