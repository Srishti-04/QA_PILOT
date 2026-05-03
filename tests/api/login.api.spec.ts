import { test, expect } from '@playwright/test';

test('API Test - Create Post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'QA Test',
      body: 'Playwright API',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body).toHaveProperty('id');
});

test('API Test - Get Invalid Post', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/99999');

  expect(response.status()).toBe(404);
});