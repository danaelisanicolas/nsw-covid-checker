import React, { createContext, useState } from 'react'

export const CasesContext = createContext()

const axios = require('axios');
axios.defaults.headers = {
  'Content-Type': 'application/xml',
}

const CasesContextProvider = (props) => {
  const [ cases, setCases ] = useState([])

  const searchLocation = (location) => {
    const url = 'https://cors-anywhere.herokuapp.com/https://data.nsw.gov.au/data/api/3/action/datastore_search?sort=notification_date desc&resource_id=2776dbb8-f807-4fb2-b1ed-184a6fc2c8aa'

    axios.get(location ? url + '&q=' + location : url).then(res => {
      const records = res.data.result['records']
      setCases(records)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <CasesContext.Provider value={{cases, searchLocation}}>
      {props.children}
    </CasesContext.Provider>
  );
}

export default CasesContextProvider;