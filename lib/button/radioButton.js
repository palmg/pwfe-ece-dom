'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _radioButton = require('./radioButton.scss');

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/5/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//css


var cx = _bind2.default.bind(_radioButton2.default);

/**
 * 单选按钮(组)
 * @param {object} props {{
 *  {array}  buttonList 按钮列表[{id,name,isActive}]
 *  {boolean}  canBeNull 是否可以为空值. 若false且没有选中项, 则选中第一个
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {function} onClick:点击时的回调方法 (id,name,event)=>{}
 * }}
 */

var RadioButton = function (_React$Component) {
    _inherits(RadioButton, _React$Component);

    function RadioButton() {
        var _ref;

        _classCallCheck(this, RadioButton);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(props)));

        var list = _this.props.buttonList;
        if (_this.props.canBeNull !== true) {
            for (var i = list.length - 1; i >= 0; i--) {
                if (list[i].isActive) {
                    break;
                }
                list[i].isActive = i === 0;
            }
        }

        _this.state = {
            buttonList: _this.props.buttonList
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(RadioButton, [{
        key: 'handleClick',
        value: function handleClick(id, name, e) {
            var list = this.props.buttonList;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    item.isActive = id === item.id;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.setState({
                buttonList: list
            });
            this.props.onClick(id, name, e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var buttonList = this.state.buttonList.map(function (button) {
                return _react2.default.createElement(
                    SingleBtn,
                    { key: button.id, isActive: button.isActive,
                        onClick: _this2.handleClick.bind(_this2, button.id, button.name) },
                    button.name
                );
            });

            var cn = cx(_defineProperty({
                'radio-grp': true
            }, this.props.className ? this.props.className : "", true));

            return _react2.default.createElement(
                'div',
                { className: cn, style: this.props.style },
                buttonList
            );
        }
    }]);

    return RadioButton;
}(_react2.default.Component);

/**
 * 单选按钮
 * @param {object} props {{
 *  {string} style 对应的样式
 *  {string} className: css名称
 *  {string} children: 子组件
 *  {function} onClick:点击时的回调方法 (event)=>{}
 * }}
 */


var SingleBtn = function SingleBtn(props) {
    var _cx2;

    var cn = cx((_cx2 = {}, _defineProperty(_cx2, 'radio-btn', true), _defineProperty(_cx2, "active", props.isActive), _cx2));

    return _react2.default.createElement(
        _button2.default,
        _extends({}, props, { className: cn }),
        props.children
    );
};

exports.default = RadioButton;