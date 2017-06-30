'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CloverMark = exports.StarTMark = exports.StarRMark = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

var _markShow = require('./markShow.scss');

var _markShow2 = _interopRequireDefault(_markShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dio on 2017/5/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//样式


var cx = _bind2.default.bind(_markShow2.default);

var ImgList = function (_React$Component) {
    _inherits(ImgList, _React$Component);

    function ImgList() {
        var _ref;

        _classCallCheck(this, ImgList);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = ImgList.__proto__ || Object.getPrototypeOf(ImgList)).call.apply(_ref, [this].concat(props)));
    }

    _createClass(ImgList, [{
        key: 'render',
        value: function render() {
            var list = [];

            var _props = this.props,
                height = _props.height,
                src = _props.src,
                className = _props.className,
                style = _props.style,
                margin = _props.margin;


            var cn = cx(_defineProperty({
                'mark-box': true
            }, className ? className : '', true));

            for (var i = 0; i < 5; i++) {
                var _style = void 0;
                switch (i) {
                    case 0:
                        _style = { height: height, margin: '0 ' + margin + ' 0 0' };break;
                    case 4:
                        _style = { height: height, margin: '0 ' + margin };break;
                    default:
                        _style = { height: height, margin: '0 0 0 ' + margin };break;
                }
                list.push(_react2.default.createElement(_tag2.default.Icon, { className: _markShow2.default['icon'], key: i, style: _style, src: src }));
            }

            return _react2.default.createElement(
                'div',
                { className: cn, style: style },
                list
            );
        }
    }]);

    return ImgList;
}(_react2.default.Component);

/**
 * 通用分数显示组件：
 * @param {object} props {{
 *  {string} className： 修改css接口
 *  {string} height: 图标大小
 *  {string} margin: 图标间距
 *  {number} point: 分数
 * }}
 */

var BaseMark = function (_React$Component2) {
    _inherits(BaseMark, _React$Component2);

    function BaseMark() {
        var _ref2;

        _classCallCheck(this, BaseMark);

        for (var _len2 = arguments.length, props = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            props[_key2] = arguments[_key2];
        }

        var _this2 = _possibleConstructorReturn(this, (_ref2 = BaseMark.__proto__ || Object.getPrototypeOf(BaseMark)).call.apply(_ref2, [this].concat(props)));

        _this2.state = {
            progress: 0
        };
        return _this2;
    }

    _createClass(BaseMark, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.dom = _reactDom2.default.findDOMNode(this.refs.pointBox);
            this.setState({
                progress: +this.props.point / 5 * this.dom.clientWidth
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                progress: nextProps.point / 5 * this.dom.clientWidth
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                height = _props2.height,
                style = _props2.style,
                hollow = _props2.hollow,
                solid = _props2.solid,
                margin = _props2.margin;


            var cn = cx(_defineProperty({
                'base-mark': true
            }, className ? className : '', true));

            return _react2.default.createElement(
                'div',
                { style: style, className: cn },
                _react2.default.createElement(
                    'div',
                    { className: _markShow2.default['mark-pos'] },
                    _react2.default.createElement(ImgList, { src: hollow, height: height, margin: margin }),
                    _react2.default.createElement(ImgList, { src: solid, height: height, ref: 'pointBox', className: _markShow2.default['solid'], margin: margin,
                        style: { clip: 'rect(0, ' + this.state.progress + 'px, ' + height + ', 0)' } })
                )
            );
        }
    }]);

    return BaseMark;
}(_react2.default.Component);

var StarRMark = exports.StarRMark = function StarRMark(props) {
    return _react2.default.createElement(BaseMark, { solid: 'yellowRoundStar', hollow: 'grayRoundStar', height: props.height, point: props.point || 0, margin: props.margin });
};

var StarTMark = exports.StarTMark = function StarTMark(props) {
    return _react2.default.createElement(BaseMark, { solid: 'yellowTriStar', hollow: 'grayTriStar', height: props.height, point: props.point || 0, margin: props.margin });
};

var CloverMark = exports.CloverMark = function CloverMark(props) {
    return _react2.default.createElement(BaseMark, { solid: 'greenClover', hollow: 'transparentClover', height: props.height, point: props.point || 0, margin: props.margin });
};