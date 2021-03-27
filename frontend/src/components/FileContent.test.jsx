import React from 'react';
import { render } from '@testing-library/react';

import FileContent from './FileContent';

describe('FileContent Component', () => {
  it('should render defaults', () => {
    const { container } = render(
      <FileContent />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
