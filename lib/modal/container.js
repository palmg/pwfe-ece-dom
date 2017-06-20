'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by luodh on 2017/5/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 模态框容器
 * @param {object} props {{
 *  {dom} parentNode 渲染modal框的位置, 默认渲染到body下
 *  {dom} children: modal组件
 * }}
 */

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        var _ref;

        _classCallCheck(this, Container);

        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(props)));

        _this.container = null; //包裹弹出框的容器
        _this.parentNode = null; //附加到的父节点dom
        return _this;
    }

    _createClass(Container, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.appendModalIntoDoc();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.appendModalIntoDoc();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.destroyModal();
        }
    }, {
        key: 'appendModalIntoDoc',
        value: function appendModalIntoDoc() {
            var target = this.props.children;
            if (target !== null) {
                this.createContainer();
                _reactDom2.default.unstable_renderSubtreeIntoContainer(this, target, this.container);
            }
        }
    }, {
        key: 'createContainer',
        value: function createContainer() {
            if (!this.container) {
                this.container = document.createElement('div');
                this.parentNode = this.props.parentNode || document.body;
                this.parentNode.appendChild(this.container);
            }
        }
    }, {
        key: 'destroyModal',
        value: function destroyModal() {
            if (this.container) {
                _reactDom2.default.unmountComponentAtNode(this.container);
                this.parentNode.removeChild(this.container);
                this.container = null;
                this.parentNode = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Container;
}(_react2.default.Component);

exports.default = Container;