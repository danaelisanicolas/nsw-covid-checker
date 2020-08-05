import React, { createContext, useState } from 'react'

export const CasesContext = createContext()

const axios = require('axios');
axios.defaults.headers = {
  'Content-Type': 'application/xml',
}

const domain = {
  'development': 'http://localhost:5001/nsw-covid-checker/us-central1/',
  'production': 'https://us-central1-nsw-covid-checker.cloudfunctions.net/',
}

const CasesContextProvider = (props) => {
  const [ cases, setCases ] = useState([])

  const searchLocation = (location) => {
    const url = `${domain[process.env.NODE_ENV]}fetchData`
    let params = {}
    if (location) {
      params = { postcode : location }
    }

    axios.get(url, {params: params}).then(res => {
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