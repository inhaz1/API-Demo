export type User = {
  id: number;
  title: string;
  body: string;
  userID: number;
};
export const validUser = {
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1,
};
export const validPostReqData = {
  title: 'New Post',
  body: 'This is the content of the new post.',
  userId: 1,
};
