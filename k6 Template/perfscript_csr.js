import http from 'k6/http';
import papaparse from './papaparse.js';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { apiUrl } from './config.js';
import { scenario } from './scenarios/scenariosConfig.js';
import { payload } from './data/payload_csr.js';


export let options = scenario;

export default function (data) {

  // Define the SOAP request headers
  const headers = {
    'Content-Type': 'text/xml',
  };

  // Make the SOAP API request
  const response = http.post(apiUrl, payload, { headers });

  // Add any required result handling or assertions here
    // Log the response status
    //console.log('payload:', payload.replace(/\n|\r|\t/g, '').replace(/>\s*</g, '><'));
    //console.log(`Response : ${response.body}`);
    console.log(`Response status: ${response.status}`);

}

//Command to run k6 script from terminal
// k6 run perfscript_csr.js
