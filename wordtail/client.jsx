const React = require('react');
const ReactDom = require('react-dom/client');

const WordTail = require('./WordTail');

ReactDom.createRoot(document.querySelector('#root')).render(<WordTail />);
