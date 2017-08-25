'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _navigate = require('../components/navigate.js');

var _navigate2 = _interopRequireDefault(_navigate);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/errolf/code/ReactSummer2k17/nextjs/components/mylayout.js';


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_MuiThemeProvider2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_navigate2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), props.children);
};

exports.default = Layout;