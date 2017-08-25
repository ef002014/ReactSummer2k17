'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/errolf/code/ReactSummer2k17/nextjs/components/cardHold.js';


var linkStyle = {
  marginRight: 15
};

var CardHold = function CardHold() {
  return _react2.default.createElement(_Card.Card, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_Card.CardHeader, {
    title: 'Errol Francis II',
    subtitle: 'Trulia Intern',
    avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdbAAAAJDYxMDUwOGRhLTViM2EtNDM4NS05ZTgyLThkOGE1NWNiZWRmYw.jpg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_Card.CardMedia, {
    overlay: _react2.default.createElement(_Card.CardTitle, { title: 'The San Francisco Tech Experience', subtitle: 'Summer 2017', __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('img', { src: 'http://www.socketsite.com/wp-content/uploads/2017/03/San-Francisco-Skyline-Rendering-2017-West.jpg', alt: 'SF SkyLine', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), _react2.default.createElement(_Card.CardTitle, { title: 'The Bay Area Lifestyle', subtitle: 'My First Time in NorCal', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(_Card.CardText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'If you\'re interested in going into the tech industry, everybody knows there are two places that you ', _react2.default.createElement('b', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, ' have '), 'to be: Silicon Valley or San Francisco. This summer i Was fortunate enough to be able to work in the latter location and get a good feel for the city. It was my first time being in Northern California and my first tech internship, so needless to say I had a bundle of emotions going into the summer. I was excited for the opportunity, worried if I would know enough, hesitant to be living in a place like SF for the first time, etc. But I came to the city my first day ready for whatever it had to offer me. However I quickly learned that while San Francisco was a pretty nice place to work, it wasn\'t the best place to live. Like...at all. I was living downtown in a really cramped room. I would roll out of my twin size bed in the morning with a yawn accompanied by a big stretch and my fingertips could reach from one side of the room to the other. Walking over to my window in the morning, I\'d open my blinds and instead of being greeted by the warmth of the sun I had a nice view of the red bricks of the outside of the building across from me. I was paying way too much for way too little. I had to get out. This is when my journey took me to East Oakland. After complaining to one of my good friends about my current living situation, he replied with a laugh "Bro, you know I live in Oakland. You can just stay in my room while I\'m away."  Man, it\'s good to have friends: if I hadn\'t had my little vent session and a friend who truly cared about me my summer would\'ve been ', _react2.default.createElement('i', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, ' completely '), ' different.'), _react2.default.createElement(_Card.CardActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(_FlatButton2.default, { label: 'Code2040', href: '/mentor', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement(_FlatButton2.default, { label: 'Zillow Group', href: '/zgroup', __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  })));
};

exports.default = CardHold;