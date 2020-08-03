import React, { createContext, useState, useEffect } from 'react'

export const CasesContext = createContext()

const axios = require('axios');
axios.defaults.headers = {
  'Content-Type': 'application/xml',
}

// "20208","2000","BARANGAROO","NSW","151.2015802","-33.86051951","Sydney Metro","Delivery Area","Updated 6-Feb-2020","11703","Sydney Inner City","117","Sydney - City and Inner South","R1"
// "4478","2000","DARLING HARBOUR","NSW","151.256649","-33.859953","Sydney Metro","","Updated 6-Feb-2020","11703","Sydney Inner City","117","Sydney - City and Inner South","R1"
// "4479","2000","DAWES POINT","NSW","151.256649","-33.859953","WATERLOO DELIVERY FACILITY","Delivery Area","Updated 6-Feb-2020","11703","Sydney Inner City","117","Sydney - City and Inner South","R1"
const CasesContextProvider = (props) => {
  const [ cases, setCases ] = useState([
    {notification_date: "2020-07-30", postcode: 2010, likely_source_of_infection: "Locally acquired - contact of a confirmed case and/or in a known cluster", lhd_2010_code: "X720", lhd_2010_name: "South Eastern Sydney"},
    {notification_date: "2020-04-05", postcode: 2010, likely_source_of_infection: "Locally acquired - contact of a confirmed case and/or in a known cluster", lhd_2010_code: "X720", lhd_2010_name: "South Eastern Sydney"},
    {notification_date: "2020-04-05", postcode: 2010, likely_source_of_infection: "Locally acquired - contact of a confirmed case and/or in a known cluster", lhd_2010_code: "X720", lhd_2010_name: "South Eastern Sydney"},
    {notification_date: "2020-04-05", postcode: 2010, likely_source_of_infection: "Under Investigation", lhd_2010_code: "X720", lhd_2010_name: "South Eastern Sydney"},
    {notification_date: "2020-04-05", postcode: 2010, likely_source_of_infection: "Overseas", lhd_2010_code: "X720", lhd_2010_name: "South Eastern Sydney"},
  ])

  useEffect(() => {
    console.log(cases)
  }, [cases])

  const searchLocation = (location) => {
    const url = 'https://cors-anywhere.herokuapp.com/https://data.nsw.gov.au/data/api/3/action/datastore_search?sort=notification_date desc&resource_id=2776dbb8-f807-4fb2-b1ed-184a6fc2c8aa&q=' + location

    axios.get(url).then(res => {
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