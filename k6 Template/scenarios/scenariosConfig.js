/*
export let scenario = {
  scenarios: {
    contacts: {
      executor: 'ramping-arrival-rate',
      timeUnit: '1s',
      preAllocatedVUs: 10,
      maxVUs: 200,
      stages: [
        { target: 5, duration: '2s' },
        { target: 15, duration: '10s' },
        { target: 20, duration: '5s' },
        { target: 0, duration: '10s' },
      ],
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<60000'], //units in miliseconds 60000ms = 1m
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    checks: ["rate>0.99"]
  },
};
*/

export let scenario = {
  scenarios: {
    contacts: {
      executor: 'ramping-arrival-rate',
      timeUnit: '1s',
      preAllocatedVUs: 10,
      maxVUs: 200,
      stages: [
        { target: 5, duration: '2s' }
      ],
    },
  },
  insecureSkipTLSVerify: true,
  thresholds: {
    http_req_duration: ['p(95)<500'], //units in miliseconds
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    checks: ["rate>0.99"]
  },
};

/*
In this example, the load will start with 10
virtual users and ramp up to a maximum of 200
virtual users over 2 seconds, maintaining a target of 5 requests per second (RPS)
during the ramp-up period. The actual RPS achieved during the test might slightly
vary depending on the server's response time and other factors. You can adjust the
sleep time in the default function to control the actual RPS rate within each stage.*/
