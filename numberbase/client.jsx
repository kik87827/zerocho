/* const React = require('react');
const ReactDom = require('react-dom/client'); */
import React from 'react';
import ReactDom from 'react-dom/client';
/* const NumberBaseball = require('./NumberBaseball'); */

import NumberBaseball from './NumberBaseball';

ReactDom.createRoot(document.querySelector('#root')).render(<NumberBaseball />);
