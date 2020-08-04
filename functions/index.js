const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.fetchData = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    var postcode = request.query.postcode
    axios.get(`https://data.nsw.gov.au/data/api/3/action/datastore_search?sort=notification_date desc&resource_id=2776dbb8-f807-4fb2-b1ed-184a6fc2c8aa&q=${postcode}`)
      .then(res => {
        response.status(200).json(res.data)
      })
      .catch(err => {
        response.status(500).json({error: err})
      })
  })
});
