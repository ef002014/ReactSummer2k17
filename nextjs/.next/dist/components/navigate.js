'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reorder = require('material-ui/svg-icons/action/reorder');

var _reorder2 = _interopRequireDefault(_reorder);

var _computer = require('material-ui/svg-icons/hardware/computer');

var _computer2 = _interopRequireDefault(_computer);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/errolf/code/ReactSummer2k17/nextjs/components/navigate.js';


var linkStyle = {
  marginRight: 15
};

var Logged = function Logged(props) {
  return _react2.default.createElement(_IconMenu2.default, (0, _extends3.default)({}, props, {
    iconButtonElement: _react2.default.createElement(_IconButton2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, _react2.default.createElement(_reorder2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    })),
    targetOrigin: { horizontal: 'right', vertical: 'top' },
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'The Bay Area Lifestyle', href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'The Code2040 Project', href: '/mentor', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'The Zillow Group Family', href: '/zgroup', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'About', href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement(_MenuItem2.default, { primaryText: 'Demo Page', href: '/demo', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }));
};

var LinkIn = function LinkIn(props) {
  return _react2.default.createElement('a', { href: 'https://www.linkedin.com/in/efrancisii/', target: '_blank', rel: 'nofollow noreferrer noopener', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_computer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }));
};

var AppBarExampleComposition = function (_Component) {
  (0, _inherits3.default)(AppBarExampleComposition, _Component);

  function AppBarExampleComposition() {
    (0, _classCallCheck3.default)(this, AppBarExampleComposition);

    return (0, _possibleConstructorReturn3.default)(this, (AppBarExampleComposition.__proto__ || (0, _getPrototypeOf2.default)(AppBarExampleComposition)).apply(this, arguments));
  }

  (0, _createClass3.default)(AppBarExampleComposition, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_AppBar2.default, {
        title: 'Select Your Page',
        iconElementLeft: _react2.default.createElement(Logged, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }),
        iconElementRight: _react2.default.createElement(_IconButton2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react2.default.createElement(LinkIn, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        })),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }));
    }
  }]);

  return AppBarExampleComposition;
}(_react.Component);

exports.default = AppBarExampleComposition;