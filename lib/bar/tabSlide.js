'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabSlide = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _tabSlide = require('./tabSlide.scss');

var _tabSlide2 = _interopRequireDefault(_tabSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dio on 2017/5/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//样式


var cx = _bind2.default.bind(_tabSlide2.default);

/**
 * 选项卡组件：
 * @param {object} props {{
 *  {array} config: 支持一个name和id对象组成的数组，name为显示内容，id为传递参数
 *  {function} onClick: 点击激活当前选项卡，同时回调返回点击选项卡的id
 * }}
 */

var TabSlide = exports.TabSlide = function (_React$Component) {
    _inherits(TabSlide, _React$Component);

    function TabSlide() {
        var _ref;

        _classCallCheck(this, TabSlide);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = TabSlide.__proto__ || Object.getPrototypeOf(TabSlide)).call.apply(_ref, [this].concat(props)));

        _this.state = {
            actvie: 0,
            move: false,
            moveX: 0
        };
        _this.touchStart = _this.touchStart.bind(_this);
        _this.touchMove = _this.touchMove.bind(_this);
        _this.touchEnd = _this.touchEnd.bind(_this);
        return _this;
    }

    _createClass(TabSlide, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                active: 0
            });
        }
    }, {
        key: 'chooseTab',
        value: function chooseTab(i, id) {
            this.setState({
                active: i
            });
            this.props.onClick(id);
        }
    }, {
        key: 'touchStart',
        value: function touchStart(e) {
            this.setState({
                move: true,
                startX: e.targetTouches[0].pageX // 起始距离
            });
        }
    }, {
        key: 'touchMove',
        value: function touchMove(e) {

            var dom = _reactDom2.default.findDOMNode(this.refs.box); // 盒子大小

            var pageX = e.targetTouches[0].pageX,
                // 当前距离
            moveX = pageX - this.state.startX + this.state.moveX,
                // 移动距离
            box = dom.clientWidth,
                // 盒子宽度
            ul = this.props.config.length * 100; // 列表宽度          

            if (!this.state.move) return;
            if (moveX > 0) {
                moveX = 0;
            } else if (moveX < box - ul) {
                moveX = box - ul;
            }

            this.setState({ moveX: moveX });
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd() {
            this.setState({
                move: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var config = this.props.config;


            var tabList = config.map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index, className: _this2.state.active === index && _tabSlide2.default['active'],
                        onClick: _this2.chooseTab.bind(_this2, index, item.id) },
                    item.name
                );
            });

            return _react2.default.createElement(
                'div',
                { className: _tabSlide2.default['slide-box'], ref: 'box' },
                _react2.default.createElement(
                    'ul',
                    { className: _tabSlide2.default['tab-slide'], style: { width: config.length * 100 + 'px' } },
                    tabList
                )
            );
        }
    }]);

    return TabSlide;
}(_react2.default.Component);