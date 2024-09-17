import { expect, getRequest, postRequest } from '@anaconda/playwright-utils';

export class ReleaseAPI {
  private readonly releaseListHandlerRequest = '/v1/releases';
  private readonly createReleaseRequest = '/v1/releases/create';

  async verifyGetReleaseListHandlerRequestWithSuccessResponse(): Promise<void> {
    const response = await getRequest(this.releaseListHandlerRequest);
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
  }

  async verifyGetReleaseListHandlerRequestWithValidationError(): Promise<void> {
    const response = await getRequest(this.releaseListHandlerRequest);
    expect(response.status()).toBe(422);
    expect(response.statusText()).not.toBe('OK');
  }

  async verifyCreateReleaseHandlerPostRequestWithSuccessResponse(): Promise<void> {
    const response = await postRequest(this.createReleaseRequest);
    expect(response.status()).toBe(201);
    expect(response.statusText()).toBe('OK');
  }

  async verifyCreateReleaseHandlerPostRequestWithvalidationError(): Promise<void> {
    const response = await postRequest(this.createReleaseRequest);
    expect(response.status()).toBe(422);
    expect(response.statusText()).not.toBe('OK');
  }
}
