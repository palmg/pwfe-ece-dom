'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseModal = exports.Container = undefined;

var _container = require('./lib/modal/container');

var _container2 = _interopRequireDefault(_container);

var _baseModal = require('./lib/modal/baseModal');

var _baseModal2 = _interopRequireDefault(_baseModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by luodh on 2017/5/25.
 */
var Modal = {
  /**
   * 模态框容器
   * @param {object} props {{
   *  {dom} parentNode 渲染modal框的位置, 默认渲染到body下
   *  {dom} children: modal组件
   * }}
   */
  Container: _container2.default,
  /**
   * 基础模态框 带有蒙版及前层的容器
   * @param {object} props {{
   *  {dom} children: modal组件
   * }}
   */
  BaseModal: _baseModal2.default
};

exports.Container = _container2.default;
exports.BaseModal = _baseModal2.default;
exports.default = Modal;