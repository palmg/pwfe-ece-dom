'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _baseSwiperItem = require('./baseSwiperItem');

var _baseSwiperItem2 = _interopRequireDefault(_baseSwiperItem);

var _baseSwiper = require('./baseSwiper.scss');

var _baseSwiper2 = _interopRequireDefault(_baseSwiper);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ljc on 2017/5/16 15:42.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var cn = _bind2.default.bind(_baseSwiper2.default);

/**
 *
 * @param event 当前touch事件
 * @param startPageX 前一次点击页面X坐标
 * @param startPageY 前一次点击页面Y坐标
 * @returns {{event: 当前touch事件, pageX: X坐标, pageY: Y坐标, direction: 移动方向(left/right), distance: 位移, move: 实时移动}}
 */
var touchEvent = function touchEvent(event, startPageX, startPageY) {
    var point = {
        event: event,
        pageX: parseInt(event.changedTouches[0].pageX),
        pageY: parseInt(event.changedTouches[0].pageY),
        direction: '',
        distance: 0,
        move: 0
    };

    if (startPageX > 0 && startPageY > 0) {
        //位移
        var endPageX = point.pageX;
        point.distance = Math.abs(endPageX - startPageX);

        //移动方向
        var direction = endPageX > startPageX ? 'right' : 'left';
        point.direction = direction;

        //实时移动
        var move = endPageX - startPageX;
        point.move = move;
    }
    return point;
};

/**
 * 基础滑块视图容器(所有的滑块项均需要由BaseSwiper组件包装)
 * @param props
 * @returns {XML}
 * @constructor
 */

var BaseSwiper = function (_React$Component) {
    _inherits(BaseSwiper, _React$Component);

    function BaseSwiper() {
        var _ref;

        _classCallCheck(this, BaseSwiper);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = BaseSwiper.__proto__ || Object.getPrototypeOf(BaseSwiper)).call.apply(_ref, [this].concat(props)));

        _this.state = {
            startPageX: 0,
            startPageY: 0,
            move: 0,
            range: 0,
            firstChildTransformValue: 0, //允许左移
            lastChildTransformValue: 0 //允许右移
        };

        //事件绑定
        _this.touchMoveHandler = _this.touchMoveHandler.bind(_this);
        _this.touchStartHandler = _this.touchStartHandler.bind(_this);
        _this.touchEndHandler = _this.touchEndHandler.bind(_this);
        return _this;
    }

    /**
     * 开始移动
     * @param event
     */


    _createClass(BaseSwiper, [{
        key: 'touchStartHandler',
        value: function touchStartHandler(event) {
            // event.preventDefault();
            var point = touchEvent(event);

            //判断是否到底了
            var container = this.refs.container;

            var firstChildTransformStr = container.firstChild.style.transform;
            var lastChildTransformStr = container.lastChild.style.transform;
            var firstChildTransformValue = parseInt(firstChildTransformStr.substring(11, firstChildTransformStr.length - 2));
            var lastChildTransformValue = parseInt(lastChildTransformStr.substring(11, lastChildTransformStr.length - 2));

            this.setState({
                startPageX: point.pageX,
                startPageY: point.pageY,
                firstChildTransformValue: firstChildTransformValue,
                lastChildTransformValue: lastChildTransformValue
            });
        }

        /**
         * 移动中...
         * @param event
         */

    }, {
        key: 'touchMoveHandler',
        value: function touchMoveHandler(event) {
            // event.preventDefault();
            var point = touchEvent(event, this.state.startPageX, this.state.startPageY);

            this.setState({
                move: point.move
            });
        }

        /**
         * 结束移动
         * @param event
         */

    }, {
        key: 'touchEndHandler',
        value: function touchEndHandler(event) {
            // event.preventDefault();
            var point = touchEvent(event, this.state.startPageX, this.state.startPageY);

            var translateX = 100; //偏移百分比

            //移动超过三分之一，则整体移动，反之恢复原位置
            var width = window.innerWidth;

            var range = 0; //移动范围

            if (Math.abs(point.move) >= parseInt(width * 0.35)) {

                if (point.direction === 'left' && this.state.lastChildTransformValue != 0) {
                    range = this.state.range - translateX;
                } else if (point.direction === 'right' && this.state.firstChildTransformValue != 0) {
                    range = this.state.range + translateX;
                } else {
                    range = this.state.range;
                }
            } else {
                range = this.state.range;
            }

            this.setState({
                move: 0,
                range: range
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var cnContainer = cn('container');
            var cnItemSpan = cn('item-span');

            var move = this.state.move;
            var range = this.state.range;

            var children = _react2.default.Children.map(this.props.children, function (child, index) {
                var left = move + 'px';
                var transform = 'translateX(' + (index * 100 + range) + '%)';

                return _react2.default.createElement(
                    'div',
                    { key: index, className: cnItemSpan, style: { left: left, transform: transform, transitionDuration: '0.4s', transitionTimingFunction: 'ease-out' } },
                    child
                );
            });

            return _react2.default.createElement(
                'div',
                { ref: 'container', className: cnContainer, style: { width: '100%', height: '100%' },
                    onTouchStart: this.touchStartHandler, onTouchMove: this.touchMoveHandler,
                    onTouchEnd: this.touchEndHandler },
                children
            );
        }
    }]);

    return BaseSwiper;
}(_react2.default.Component);

exports.default = BaseSwiper;