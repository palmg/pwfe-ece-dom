'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitLoading = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _waitLoading = require('./waitLoading.scss');

var _waitLoading2 = _interopRequireDefault(_waitLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dio on 2017/6/1.
 */
var WaitLoading = exports.WaitLoading = function WaitLoading(props) {
    return _react2.default.createElement(
        'div',
        { className: _waitLoading2.default['round'], style: props.style },
        _react2.default.createElement(
            'div',
            { className: _waitLoading2.default['center'] },
            _react2.default.createElement(
                'div',
                { className: _waitLoading2.default['absolute'] },
                _react2.default.createElement('div', { className: _waitLoading2.default['one'] }),
                _react2.default.createElement('div', { className: _waitLoading2.default['two'] }),
                _react2.default.createElement('div', { className: _waitLoading2.default['three'] })
            )
        )
    );
};