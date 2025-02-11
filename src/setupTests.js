import '@testing-library/jest-dom';

jest.spyOn(console, 'warn').mockImplementation((msg, ...args) => {
  if (msg.includes('React Router Future Flag Warning')) return;
  console.warn(msg, ...args);
});
