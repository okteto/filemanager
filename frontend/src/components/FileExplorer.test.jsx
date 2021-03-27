import React from 'react';
import { render } from '@testing-library/react';

import FileExplorer from './FileExplorer';

describe('FileExplorer Component', () => {
  it('should render defaults', () => {
    const { container } = render(
      <FileExplorer />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
