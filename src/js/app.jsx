import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';

const root = createRoot(document.getElementById('app'));

root.render(<List />);
