'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pullDown = require('./pullDown.scss');

var _pullDown2 = _interopRequireDefault(_pullDown);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/5/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cx = _bind2.default.bind(_pullDown2.default);

var pullDownState = {
    LOADED: "loaded", //加载完成
    LOADING: "loading", //加载中
    WILL_LOAD: "willLoad", //即将加载
    END: "end" //全部加载完
};

/**
 * 下拉加载控件：
 * @param {object} props {{
     *  {boolean} loading: 是否加载中
     *  {boolean} isEnd: 是否全部加载完毕(禁用下拉加载)
     *  {function} onReload: 触发加载回调函数
     *  {dom} children: 内容
     *  {string} pullHint: 下拉提示 默认"下拉刷新"
     *  {string} dropHint: 释放提示 默认"释放刷新"
     *  {string} loadingHint: 加载中提示 默认"正在加载..."
     * }}
 */

var PullDown = function (_React$Component) {
    _inherits(PullDown, _React$Component);

    function PullDown() {
        var _ref;

        _classCallCheck(this, PullDown);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = PullDown.__proto__ || Object.getPrototypeOf(PullDown)).call.apply(_ref, [this].concat(props)));

        _this.state = {
            offset: 0, //触摸下拉的位移
            touching: false, //是否在拖动
            state: _this.props.isEnd === true ? pullDownState.END : pullDownState.LOADED //加载状态
        };
        _this.startPoint = null; //触控的开始位置
        _this.startScroll = 0; //记录开始触控的列表滚动距离

        _this.touchMoveHandle = _this.touchMoveHandle.bind(_this);
        _this.touchStartHandle = _this.touchStartHandle.bind(_this);
        _this.touchEndHandle = _this.touchEndHandle.bind(_this);
        return _this;
    }

    _createClass(PullDown, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            if (nextProps.loading !== this.props.loading) {
                this.setState({ state: nextProps.loading ? pullDownState.LOADING : pullDownState.LOADED });
            }
            if (nextProps.isEnd !== this.props.isEnd) {
                this.setState({ state: nextProps.isEnd === true ? pullDownState.END : pullDownState.LOADED });
            }
        }
    }, {
        key: 'touchStartHandle',
        value: function touchStartHandle(e) {
            this.setState({ touching: true });
            this.startPoint = getTouchPosition(e);
            this.startScroll = this.pullDownBox.scrollTop;
        }
    }, {
        key: 'touchMoveHandle',
        value: function touchMoveHandle(e) {
            if ([pullDownState.LOADING, pullDownState.END].indexOf(this.state.state) > -1) {
                return;
            }
            var point = getTouchPosition(e, this.startPoint.pageX, this.startPoint.pageY);

            var offset = 0,
                scroll = this.startScroll - this.pullDownBox.scrollTop;
            offset = point.move - scroll;
            this.setState({
                offset: offset > 0 ? offset : 0
            });

            if (offset > 160) {
                this.setState({
                    state: pullDownState.WILL_LOAD
                });
            } else {
                this.setState({
                    state: pullDownState.LOADED
                });
            }
        }
    }, {
        key: 'touchEndHandle',
        value: function touchEndHandle() {
            this.setState({ offset: 0, touching: false });
            if (this.state.state === pullDownState.WILL_LOAD) {
                this.setState({ state: pullDownState.LOADING });
                //去刷新
                this.props.onReload && this.props.onReload();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var headHeight = this.headerTip && this.headerTip.offsetHeight || 0;
            var distance = this.state.state == pullDownState.LOADING ? headHeight : 0;
            var hint = function () {
                switch (_this2.state.state) {
                    case pullDownState.WILL_LOAD:
                        return _this2.props.dropHint || "释放刷新";
                    case pullDownState.LOADING:
                        return _this2.props.loadingHint || "正在加载...";
                    case pullDownState.LOADED:
                        return _this2.props.pullHint || "下拉刷新";
                }
            }();

            var transition = [pullDownState.LOADED, pullDownState.LOADING].indexOf(this.state.state) > -1 && !this.state.touching ? ".3s ease-in-out" : "";

            return _react2.default.createElement(
                'div',
                { ref: function ref(_ref3) {
                        _this2.pullDownBox = _ref3;
                    }, className: cx("pull-down-box", this.props.className), style: this.props.style },
                _react2.default.createElement(
                    'div',
                    { className: cx("scroll-content"),
                        style: {
                            transform: 'translateY(' + (this.state.offset - headHeight) + 'px)',
                            marginTop: distance + 'px',
                            transition: transition
                        },
                        onTouchStart: this.touchStartHandle, onTouchMove: this.touchMoveHandle, onTouchEnd: this.touchEndHandle },
                    _react2.default.createElement(
                        'div',
                        { ref: function ref(_ref2) {
                                _this2.headerTip = _ref2;
                            }, className: cx("header") },
                        hint
                    ),
                    this.props.children
                )
            );
        }
    }]);

    return PullDown;
}(_react2.default.Component);

exports.default = PullDown;

/**
 *
 * @param event 当前touch事件
 * @param startPageY 前一次点击页面X坐标
 * @param startPageY 前一次点击页面Y坐标
 * @returns {{event: 当前touch事件, pageX: X坐标, pageY: Y坐标, direction: 移动方向(left/right), distance: 位移, move: 实时移动}}
 */

var getTouchPosition = function getTouchPosition(event, startPageX, startPageY) {
    var point = {
        event: event,
        pageX: parseInt(event.changedTouches[0].pageX),
        pageY: parseInt(event.changedTouches[0].pageY),
        direction: '',
        distance: 0,
        move: 0
    };

    if (startPageY > 0) {
        //位移
        var endPageY = point.pageY;
        point.distance = Math.abs(endPageY - startPageY);

        //移动方向
        var direction = endPageY > startPageY ? 'down' : 'up';
        point.direction = direction;

        //实时移动
        var move = endPageY - startPageY;
        point.move = move;
    }
    return point;
};