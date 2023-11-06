// @ts-check
const { test, expect } = require('@playwright/test');

const ENDPOINT_USER = "api/users/2"

test('Simple API test - GET method', async ({ request }) => {
  const result = await request.get (ENDPOINT_USER);
  const response = JSON.parse(await result.text());
//
  expect(result.ok()).toBeTruthy();  
  expect(response.data.email).toEqual("janet.weaver@reqres.in")
});
