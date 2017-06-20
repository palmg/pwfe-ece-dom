'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _defPage = require('./defPage.scss');

var _defPage2 = _interopRequireDefault(_defPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chkui on 2017/5/12.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//样式


var cn = _bind2.default.bind(_defPage2.default);

/**
 * 默认页面。
 * 1）背景颜色默认为#F2F2F2
 * 2）通过children添加内容
 * 3）提供style参数修改样式
 * 4）提供className参数新增css样式
 * @param {object} props {
 *  {object} style 修改样式接口
 *  {string} className 修改css接口
 *  {string} name 页面的名称
 *  {Dom} children 子组件，页面之内的功能
 * }
 * @constructor
 */
/*const DefPage = props =>
    <div style={props.style} className={cn('def-page', props.className)}>
        {props.children}
    </div>*/

var DefPage = function (_React$Component) {
    _inherits(DefPage, _React$Component);

    function DefPage() {
        var _ref;

        _classCallCheck(this, DefPage);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = DefPage.__proto__ || Object.getPrototypeOf(DefPage)).call.apply(_ref, [this].concat(props)));

        _this.touchStartHandler = _this.touchStartHandler.bind(_this);
        _this.scrollHandler = _this.scrollHandler.bind(_this);
        return _this;
    }

    _createClass(DefPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.name && (document.title = this.props.name);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return true;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            nextProps.name && this.props.name !== nextProps.name && (document.title = nextProps.name);
        }
    }, {
        key: 'getWinInfo',
        value: function getWinInfo() {
            //可视区域高度
            var clientHeight = this.refs.defPage.clientHeight;

            //滚动条滚动高度
            var scrollTop = this.refs.defPage.scrollTop;

            //滚动内容高度
            var scrollHeight = this.refs.defPage.scrollHeight;

            return { clientHeight: clientHeight, scrollTop: scrollTop, scrollHeight: scrollHeight };
        }
    }, {
        key: 'touchStartHandler',
        value: function touchStartHandler(event) {
            this.props.onTouchStart && this.props.onTouchStart(this.getWinInfo());
        }
    }, {
        key: 'scrollHandler',
        value: function scrollHandler(event) {
            this.props.onScroll && this.props.onScroll(this.getWinInfo());
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            return _react2.default.createElement(
                'div',
                { style: props.style, className: cn('def-page', props.className), onTouchStart: this.touchStartHandler, onScroll: this.scrollHandler, ref: 'defPage' },
                props.children
            );
        }
    }]);

    return DefPage;
}(_react2.default.Component);

exports.default = DefPage;