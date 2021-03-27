import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from './App';

describe('App Component', () => {
  it('should render defaults', () => {
    const initialState = {
      files: {
        list: [],
        loaded: true
      },
      filemanager: {
        selectedFile: null
      }
    };
    const store = configureMockStore([thunk])(initialState);
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
