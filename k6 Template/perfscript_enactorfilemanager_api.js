import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // Ramp up to 10 users in 10 seconds
    { duration: '10s', target: 100 }, // Ramp up to 100 users in 10 seconds
    { duration: '10s', target: 100 }, // Stay at 100 users for 10 seconds
    { duration: '10s', target: 0 },   // Ramp down to 0 users in 10 seconds
  ],
};

export default function () {
  // Array of file sizes in bytes
  const fileSizes = [1024, 2048, 3072, 4096, 5120, 6144, 7168, 8192, 9216, 10240];

  // Randomly select a file size
  const randomFileSize = fileSizes[Math.floor(Math.random() * fileSizes.length)];

  // Generate a random string to simulate file content
  const fileContent = Array(randomFileSize).fill('x').join('');

  // Endpoint URL for file upload
  const url = 'https://enactorfilemanager-api-dev.devops.fds.com/';

  // HTTP headers for the request
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  // Create a form data object for multipart upload
  const formData = new FormData();
  formData.append('file', new Blob([fileContent]), {
  destination: `performanceTest/docs`,
    filename: `testFile_${randomFileSize}.txt`,
    contentType: 'application/octet-stream',
  });

  // Send POST request with multipart form data
  let response = http.post(url, formData, { headers: headers });

  // Print response to console
  console.log(`Uploaded file: ${response.body}`);

  // Sleep for a short duration before the next iteration
  sleep(1);
}
