const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const stripe = Stripe(
  'sk_test_51LQUDGH4pWBnAXBE4ETqrUCZ7of7EqYCsihoyZ1TmldiFk1rnPwePY92v4tR6GkRKBrHxoUNEMLK3b99WgxRBUhd00jslXc79O'
);

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).send('hello from express');
});

app.post('/payments/stripe/create', async (request, response) => {
  const total = request.query.total;
  // const total = request.params;
  console.log(total);
  console.log('payment request received');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.header('Access-Control-Allow-Origin');
  
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app); 

//  http://127.0.0.1:5001/clone-84db7/us-central1/api).


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
