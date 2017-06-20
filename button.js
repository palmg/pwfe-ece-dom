'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioBtn = exports.IconBtn = exports.BaseBtn = undefined;

var _button = require('./lib/button/button');

var _button2 = _interopRequireDefault(_button);

var _iconButton = require('./lib/button/iconButton');

var _iconButton2 = _interopRequireDefault(_iconButton);

var _radioButton = require('./lib/button/radioButton');

var _radioButton2 = _interopRequireDefault(_radioButton);

var _dateButton = require('./lib/button/dateButton');

var _dateButton2 = _interopRequireDefault(_dateButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by chkui on 2017/5/12.
 */

var Button = {
  /**
   * 基础按钮。
   * 1）默认白底绿字
   * 2）通过sType参数使用预设样式 green绿地白字/gray白底灰字
   * 3）通过children添加按钮内的组件或静态文本
   * 4）提供style参数修改样式
   * 5）提供className参数新增css样式
   * 6）提供onClick事件
   * 7）提供fullWidth参数设置100%宽度
   */
  BaseBtn: _button2.default,
  /**
   * 带图标的按钮。
   * 1）扩展BaseBtn的参数
   * 2）提供icon参数设置图标
   * 3）提供column参数设置是否竖向排列
   * 3）提供iconStyle参数 设置图标的style
   */
  IconBtn: _iconButton2.default,
  /**
   * 单选按钮组。
   * 1）通过buttonList设置候选项[{id,name,isActive}]
   * 2）{boolean}  canBeNull 是否可以为空值. 若false且没有选中项, 则选中第一个
   * 3）提供style参数修改样式
   * 4）提供className参数新增css样式
   * 5）提供onClick回调函数(id,name,event)=>{}
   */
  RadioBtn: _radioButton2.default,
  /**
   * 日期选择按钮。
   * 1）通过value设置值
   * 3）提供style参数修改样式
   * 4）提供className参数新增css样式
   * 4）提供fullWidth参数设置是否全屏宽
   * 5）提供onChange回调函数(data)=>{} 格式:"2017-05-05"
   */
  DateBtn: _dateButton2.default
};

exports.BaseBtn = _button2.default;
exports.IconBtn = _iconButton2.default;
exports.RadioBtn = _radioButton2.default;
exports.default = Button;