// @ts-check
const { test, expect } = require('@playwright/test');

const UPDATE_CREATE_USER = "api/users/2"

test('Simple API test - PUT method', async ({ request }) => {
  const result = await request.put (UPDATE_CREATE_USER, {
    data: {
    "name": "morpheus",
    "job": "zion resident"
    }
  });
  
  const response = JSON.parse(await result.text());
  console.log(response.name, response.job, response.updatedAt) 

  expect(response.name).toEqual("morpheus");
  expect(response.job).toEqual("zion resident");
  // expect(response.updatedAt).toEqual("");

});
