/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import NoExtInclusion from './NoExtInclusion';
import ReactDOMClient from 'react-dom/client';
import { flushSync } from 'react-dom';

describe('no ext inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    flushSync(() => {
      ReactDOMClient.createRoot(div).render(<NoExtInclusion />);
    });
  });
});
