import { expect, getRequest, postRequest } from '@anaconda/playwright-utils';
import { validPostReqData } from '@testdata/user-data';

export class APITest {
  private readonly UserListRequest = `https://jsonplaceholder.typicode.com/posts/1`;
  private readonly PostRequest = `https://jsonplaceholder.typicode.com/posts`;

  async verifyGetUserListRequestWithSuccessResponse(): Promise<void> {
    const response = await getRequest(this.UserListRequest);
    console.log(response.status());
    console.log(response.statusText());

    expect(response.status(), `status should be 200`).toBe(200);
    expect(response.statusText(), `status text should be ok`).toBe('OK');
    const responseBody = await response.json();
    console.log(responseBody);
  }

  async verifyCreateUserPostRequestWithSuccessResponse(): Promise<void> {
    const response = await postRequest(this.PostRequest, {
      data: validPostReqData,
    });
    expect(response.status(), `status should be 201`).toBe(201);
    expect(response.statusText(), `status text should be ok`).toBe('Created');
    const responseBody = await response.json();
    console.log(responseBody);
  }
}
