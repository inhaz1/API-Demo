import { test } from '@fixture';

test.describe.configure({ mode: 'parallel' });
test.describe('Release API tests', () => {
  test('Verify Get release list handler request with success response', async ({ releaseAPI }) => {
    await releaseAPI.verifyGetReleaseListHandlerRequestWithSuccessResponse();
  });

  test('Verify Get release list handler request with validation error', async ({ releaseAPI }) => {
    await releaseAPI.verifyGetReleaseListHandlerRequestWithValidationError();
  });
});

//   //getting first user
//   const firstUser = jsonResponse.data[0];
//   console.log(firstUser);

//   // Verify IDs contain '9'
//   const ids: number[] = jsonResponse.data.map((user: any) => user.id);
//   const containsID = ids.some(id => id === 9);
//   expect(containsID).toBeTruthy();

//   const containsID1 = jsonResponse.data.some((user: any) => user.id === 9);
//   expect(containsID1).toBeTruthy();

//   const foundObject = jsonResponse.data.find((obj: any) => obj.id === 9);
//   expect(foundObject).toBeTruthy();

//   // verify support url
//   expect(jsonResponse.support.url).toBe('https://reqres.in/#support-heading');

//   //verify the first name 'Byron' to have the id '10'
//   const user = jsonResponse.data.find((user: any) => user.first_name === 'Byron');
//   // Assert that the user with the first name "Byron" has the ID '10'
//   expect(user).toBeDefined();
//   expect(user.id).toBe(10);

//   //printing the list of keys
//   //this doesn't print the sub-keys in an array
//   const stringJson = JSON.stringify(jsonResponse);
//   const parsedJson = JSON.parse(stringJson);
//   const keys = Object.keys(parsedJson);
//   console.log(keys);

//   //printing keys and sub-keys in an array
//   function printKeysAndSubKeys(obj: { [x: string]: any }) {
//     Object.keys(obj).forEach(key => {
//       console.log(`Main Key: ${key}`);
//       const value = obj[key];

//       if (Array.isArray(value)) {
//         console.log(`Array found at '${key}', printing keys of objects within array:`);
//         value.forEach((item, index) => {
//           console.log(`Object ${index + 1} keys: ${Object.keys(item).join(', ')}`);
//         });
//       }
//     });
//   }
//   printKeysAndSubKeys(jsonResponse);
// });
