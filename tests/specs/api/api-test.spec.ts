import { test } from '@fixture';
import { APITest } from '@pages/api/api-test';

test.describe.configure({ mode: 'parallel' });
test.describe('API new tests', () => {
  const apitest = new APITest();
  test('Verify Get User  list request with success response', async () => {
    await apitest.verifyGetUserListRequestWithSuccessResponse();
  });
  test('Verify POST user request with success response', async () => {
    await apitest.verifyCreateUserPostRequestWithSuccessResponse();
  });
});
