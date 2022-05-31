import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

it('renders App with Routes', () => {
  console.log('0000000001'); 
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  console.log('0000000002');
  expect(true).toStrictEqual(true);
});

