import { expect, getRequest, postRequest } from '@anaconda/playwright-utils';
import { validPostReqData } from '@testdata/user-data';

export class APITest {
  private readonly userListRequest = `https://jsonplaceholder.typicode.com/posts/1`;
  private readonly userPostRequest = `https://jsonplaceholder.typicode.com/posts`;

  async verifyGetUserListRequestWithSuccessResponse(): Promise<void> {
    const response = await getRequest(this.userListRequest);
    console.log(response.status());
    console.log(response.statusText());

    expect(response.status(), `status should be 200`).toBe(400);
    expect(response.statusText(), `status text should be ok`).toBe('OK');
    const responseBody = await response.json();
    console.log(responseBody);
    //expect(responseBody.userId, `userId should be 1`).toBe(1);
    //expect.soft(responseBody.id, `id should be 1`).toBe(1);
  }

  async verifyCreateUserPostRequestWithSuccessResponse(): Promise<void> {
    const response = await postRequest(this.userPostRequest, {
      data: validPostReqData,
    });
    expect(response.status(), `status should be 201`).toBe(201);
    expect(response.statusText(), `status text should be ok`).toBe('Created');
    const responseBody = await response.json();
    console.log(responseBody);
  }
}
