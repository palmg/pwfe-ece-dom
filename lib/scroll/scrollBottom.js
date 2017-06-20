'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scrollBottom = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dio on 2017/5/19.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var scrollBottom = exports.scrollBottom = function scrollBottom(_ref) {
    var loading = _ref.loading,
        loaded = _ref.loaded,
        onscroll = _ref.onscroll;
    return function (Comp) {
        return function (_React$Component) {
            _inherits(_class, _React$Component);

            function _class() {
                var _ref2;

                _classCallCheck(this, _class);

                for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
                    props[_key] = arguments[_key];
                }

                var _this = _possibleConstructorReturn(this, (_ref2 = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref2, [this].concat(props)));

                _this.onScroll = _this.onScroll.bind(_this);
                _this.loaded = _this.loaded.bind(_this);
                _this.state = {
                    loading: false
                };
                return _this;
            }

            _createClass(_class, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.dom = _reactDom2.default.findDOMNode(this.refs.box);
                    this.dom.onscroll = this.onScroll;
                }
            }, {
                key: 'onScroll',
                value: function onScroll(e) {
                    console.log('2313');
                    var scrollTop = e.target.scrollTop;
                    if ((this.dom.clientHeight + scrollTop) / this.dom.scrollHeight > .99 && !this.state.loading) {
                        this.setState({
                            loading: true
                        });
                    }
                }
            }, {
                key: 'loaded',
                value: function loaded() {
                    this.setState({
                        loading: false
                    });
                }
            }, {
                key: 'render',
                value: function render() {
                    var screen = {};
                    screen[loading] = this.state.loading;
                    screen[loaded] = this.loaded;
                    var props = Object.assign({}, this.props, screen);
                    return _react2.default.createElement(Comp, _extends({ ref: 'box' }, props));
                }
            }]);

            return _class;
        }(_react2.default.Component);
    };
};