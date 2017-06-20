'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabIcon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _tabIcon = require('./tabIcon.scss');

var _tabIcon2 = _interopRequireDefault(_tabIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dio on 2017/5/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//样式


var cx = _bind2.default.bind(_tabIcon2.default);

/**
 * 选项卡组件：
 * @param {object} props {{
 *  {array} config: 支持一个name和id对象组成的数组，name为显示内容，id为传递参数
 *  {function} onClick: 点击激活当前选项卡，同时回调返回点击选项卡的id
 * }}
 */

var TabIcon = exports.TabIcon = function (_React$Component) {
    _inherits(TabIcon, _React$Component);

    function TabIcon() {
        var _ref;

        _classCallCheck(this, TabIcon);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TabIcon.__proto__ || Object.getPrototypeOf(TabIcon)).call.apply(_ref, [this].concat(props)));

        _this.state = {
            actvie: 0
        };
        return _this;
    }

    _createClass(TabIcon, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                active: 0
            });
        }
    }, {
        key: 'chooseTab',
        value: function chooseTab(i, id) {
            this.props.onClick(id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var config = this.props.config;


            var tabList = config.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index, onClick: _this2.chooseTab.bind(_this2, index, item.id) },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            item.name
                        ),
                        item.count > 0 && _react2.default.createElement(
                            'span',
                            { style: { lineHeight: '' + (item.count > 9 && '9px') } },
                            item.count > 9 ? '...' : item.count
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'ul',
                { className: _tabIcon2.default['tab-bar'] },
                tabList
            );
        }
    }]);

    return TabIcon;
}(_react2.default.Component);