'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RoundLoading = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _roundLoading = require('./roundLoading.scss');

var _roundLoading2 = _interopRequireDefault(_roundLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dio on 2017/5/25.
 */
var RoundLoading = exports.RoundLoading = function RoundLoading(props) {
    return _react2.default.createElement(
        'div',
        { className: _roundLoading2.default['round'], style: props.style },
        _react2.default.createElement(
            'div',
            { className: _roundLoading2.default['center'] },
            _react2.default.createElement(
                'div',
                { className: _roundLoading2.default['absolute'] },
                _react2.default.createElement('div', { className: _roundLoading2.default['one'] }),
                _react2.default.createElement('div', { className: _roundLoading2.default['two'] }),
                _react2.default.createElement('div', { className: _roundLoading2.default['three'] }),
                _react2.default.createElement('div', { className: _roundLoading2.default['four'] })
            )
        )
    );
};