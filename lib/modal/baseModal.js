'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _baseModal = require('./baseModal.scss');

var _baseModal2 = _interopRequireDefault(_baseModal);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/6/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//css


var cx = _bind2.default.bind(_baseModal2.default);

var BaseModal = function (_React$Component) {
    _inherits(BaseModal, _React$Component);

    function BaseModal() {
        var _ref;

        _classCallCheck(this, BaseModal);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = BaseModal.__proto__ || Object.getPrototypeOf(BaseModal)).call.apply(_ref, [this].concat(props)));
    }

    _createClass(BaseModal, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: cx("app-plate"), onClick: this.props.onClose },
                _react2.default.createElement(
                    'div',
                    { className: cx("base-modal", this.props.className), onClick: function onClick(e) {
                            e.stopPropagation();
                        } },
                    this.props.children
                )
            );
        }
    }]);

    return BaseModal;
}(_react2.default.Component);

exports.default = BaseModal;