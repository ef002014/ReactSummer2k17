'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mylayout = require('../components/mylayout.js');

var _mylayout2 = _interopRequireDefault(_mylayout);

var _cardHold = require('../components/cardHold.js');

var _cardHold2 = _interopRequireDefault(_cardHold);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/errolf/code/ReactSummer2k17/nextjs/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement(_mylayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'The Summer Experience'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_MuiThemeProvider2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_cardHold2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }))));
};