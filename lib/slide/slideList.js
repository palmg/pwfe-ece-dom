'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SlideList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _slideList = require('./slideList.scss');

var _slideList2 = _interopRequireDefault(_slideList);

var _loading = require('../../loading');

var _loading2 = _interopRequireDefault(_loading);

var _router = require('pwfe-dom/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dio on 2017/5/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cx = _bind2.default.bind(_slideList2.default);

// 轮播点组件

var SlideDots = function (_React$Component) {
    _inherits(SlideDots, _React$Component);

    function SlideDots() {
        var _ref;

        _classCallCheck(this, SlideDots);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = SlideDots.__proto__ || Object.getPrototypeOf(SlideDots)).call.apply(_ref, [this].concat(props)));
    }

    _createClass(SlideDots, [{
        key: 'dotClick',
        value: function dotClick(i) {
            this.props.turn(i - this.props.local);
        }
    }, {
        key: 'render',
        value: function render() {

            var dotNodes = [],
                cn = void 0;
            var _props = this.props,
                count = _props.count,
                local = _props.local;


            for (var i = 0; i < count; i++) {

                cn = cx({ 'active': i === local });

                dotNodes[i] = _react2.default.createElement('span', { key: 'dot' + i, onClick: this.dotClick.bind(this, i), className: cn });
            }

            return _react2.default.createElement(
                'div',
                { className: _slideList2.default['dots'] },
                dotNodes
            );
        }
    }]);

    return SlideDots;
}(_react2.default.Component);

/**
 * 轮播组件：
 * @param {object} props {{
 *  {object} set: 组件配置，不传则启用默认配置参数
 *  {array} img: 传递的图片及描述
 * }}
 */


var SlideListDisplay = function (_React$Component2) {
    _inherits(SlideListDisplay, _React$Component2);

    function SlideListDisplay() {
        var _ref2;

        _classCallCheck(this, SlideListDisplay);

        for (var _len2 = arguments.length, props = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            props[_key2] = arguments[_key2];
        }

        var _this2 = _possibleConstructorReturn(this, (_ref2 = SlideListDisplay.__proto__ || Object.getPrototypeOf(SlideListDisplay)).call.apply(_ref2, [this].concat(props)));

        _this2.state = {
            local: 0
        };
        _this2.turn = _this2.turn.bind(_this2);
        _this2.goPlay = _this2.goPlay.bind(_this2);
        _this2.pausePlay = _this2.pausePlay.bind(_this2);
        return _this2;
    }

    // 向前向后多少


    _createClass(SlideListDisplay, [{
        key: 'turn',
        value: function turn(n) {
            var _n = this.state.local + n;
            this.setState({
                local: _n >= this.props.img.length ? 0 : _n
            });
        }

        // 开始自动轮播

    }, {
        key: 'goPlay',
        value: function goPlay() {
            var _this3 = this;

            this.autoPlayFlag = setInterval(function () {
                _this3.turn(1);
            }, this.props.set.delay * 1000);
        }

        // 暂停自动轮播

    }, {
        key: 'pausePlay',
        value: function pausePlay() {
            clearInterval(this.autoPlayFlag);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.goPlay();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.autoPlayFlag);
        }

        // link(url) {
        //     this.props.browser.forward(url)
        // }

    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                set = _props2.set,
                img = _props2.img,
                height = _props2.height,
                style = _props2.style,
                count = img.length;


            var itemList = img.map(function (item, index) {
                return _react2.default.createElement(
                    'a',
                    { href: item.url, key: index },
                    _react2.default.createElement('img', { style: { width: 100 / count + '%', height: '100%' }, alt: item.alt, src: item.pic })
                );
            });

            return _react2.default.createElement(
                'div',
                { className: _slideList2.default['slide-box'],
                    onMouseOver: this.pausePlay, onMouseOut: this.goPlay },
                img.length > 0 ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: _slideList2.default['slide-list'],
                            style: {
                                transform: 'translateX(' + -100 / count * this.state.local + '%)',
                                transitionDuration: set.speed + 's',
                                width: 100 * count + '%',
                                height: height
                            } },
                        itemList
                    ),
                    set.dots && _react2.default.createElement(SlideDots, { turn: this.turn, count: count, local: this.state.local })
                ) : _react2.default.createElement(
                    'div',
                    { style: { height: height } },
                    _react2.default.createElement(_loading2.default.RoundLoading, null)
                )
            );
        }
    }]);

    return SlideListDisplay;
}(_react2.default.Component);

var SlideList = exports.SlideList = (0, _router.reRoute)()(SlideListDisplay);

SlideListDisplay.defaultProps = {
    img: [],
    set: {
        speed: 1.5, // 切换速度
        delay: 3, // 停留时间
        autoplay: true, // 是否自动轮播
        dots: true // 是否显示下方的轮播点
    }
};

SlideListDisplay.autoPlayFlag = null;