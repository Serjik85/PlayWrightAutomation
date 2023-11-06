// @ts-check
const { test, expect } = require('@playwright/test');

const ENDPOINT_CREATE_USER = "api/users"

test('Simple API test - POST method', async ({ request }) => {
  const result = await request.post (ENDPOINT_CREATE_USER, {
    data: {
    name: "test",
    job: "leader"
    }
  });
  
  const response = JSON.parse(await result.text());
  console.log(response.name, response.job) 

  expect(response.name).toEqual("test");
  expect(response.job).toEqual("leader");
});
