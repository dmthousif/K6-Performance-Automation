import http from 'k6/http';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { sleep } from 'k6';
import { apiUrl, randomValue1, randomValue2} from './config.js';
import { scenario } from './scenarios/scenariosConfig.js';
import { payload } from './data/payload_ct.js';


// Read payload template from file
// let payloadTemplate = open('./data/payload_ct.txt');

export let options = scenario;

export default function (data) {


  // Set SOAP headers and content-type
  const headers = {
    "Content-Type": "text/xml",
    //SOAPAction: "http://www.example.com/soap-api/SomeAction",
  };

  // Send the SOAP request
  const response = http.post(apiUrl, payload, {
    headers: headers,
  });

  // Log the response status
  /*console.log('payload:', payload.replace(/\n|\r|\t/g, '').replace(/>\s*</g, '><'));*/
  console.log(`Response : ${response.body}`);
  console.log(`Response status: ${response.status}`);


  // Add some delay between requests (if needed)
  sleep(1);
}