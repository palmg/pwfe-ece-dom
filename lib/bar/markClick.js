'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MarkClick = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _tag = require('pwfe-dom/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dio on 2017/5/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cx = _bind2.default.bind(require('./markClick.scss'));

/**
 * 通用分数选择组件：
 * @param {object} props {{
 *  {object} style: 自定义样式
 *  {string} className： 修改css接口
 *  {string} height: 图标大小 (默认1.5rem)
 *  {string} margin: 图标间距（默认.2rem）
 *  {string} src: 选择分数图标（建议使用实心图案，默认为圆角星星图标）
 *  {function} onClick: 点击事件，回调返回一个选择的分数值
 * }}
 */

var MarkClick = exports.MarkClick = function (_React$Component) {
    _inherits(MarkClick, _React$Component);

    function MarkClick() {
        var _ref;

        _classCallCheck(this, MarkClick);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = MarkClick.__proto__ || Object.getPrototypeOf(MarkClick)).call.apply(_ref, [this].concat(props)));

        _this.state = {
            point: 0
        };
        return _this;
    }

    _createClass(MarkClick, [{
        key: 'choosePoint',
        value: function choosePoint(i) {
            this.setState({
                point: i
            });
            this.props.onClick(i);
        }
    }, {
        key: 'render',
        value: function render() {

            var list = [];

            var _props = this.props,
                height = _props.height,
                src = _props.src,
                className = _props.className,
                style = _props.style,
                margin = _props.margin;


            for (var i = 1; i <= 5; i++) {

                var cn = cx(_defineProperty({
                    'icon': true,
                    'gray': this.state.point < i
                }, className ? className : '', true));

                list.push(_react2.default.createElement(_tag2.default.Icon, { className: cn, style: { height: height, margin: '0 ' + margin }, key: i,
                    src: src || "yellowRoundStar", onClick: this.choosePoint.bind(this, i) }));
            }

            return _react2.default.createElement(
                'div',
                { className: cx('click-box'), style: style },
                list
            );
        }
    }]);

    return MarkClick;
}(_react2.default.Component);