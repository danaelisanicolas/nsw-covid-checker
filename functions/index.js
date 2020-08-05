const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.fetchData = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    let url = 'https://data.nsw.gov.au/data/api/3/action/datastore_search?sort=notification_date desc&resource_id=2776dbb8-f807-4fb2-b1ed-184a6fc2c8aa'
    const postcode = request.query.postcode

    if (postcode) {
      url = url + `&q=${postcode}`
    }

    axios.get(url)
      .then(res => {
        return response.status(200).json(res.data)
      })
      .catch(err => {
        return response.status(500).json({error: err})
      })
  })
});
