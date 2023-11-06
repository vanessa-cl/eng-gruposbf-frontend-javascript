export default function shouldMock(mock: any) {
  if (mock) {
    return new Promise((resolve) => resolve(mock));
  }
  return;
}
