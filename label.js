'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellLabel = exports.TextLabel = exports.InfoLabel = exports.BaseLabel = undefined;

var _baseLabel = require('./lib/label/baseLabel');

var _baseLabel2 = _interopRequireDefault(_baseLabel);

var _infoLabel = require('./lib/label/infoLabel');

var _infoLabel2 = _interopRequireDefault(_infoLabel);

var _textLabel = require('./lib/label/textLabel');

var _textLabel2 = _interopRequireDefault(_textLabel);

var _cellLabel = require('./lib/label/cellLabel');

var _cellLabel2 = _interopRequireDefault(_cellLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO chkui 5-16 请在对应组件上怎能家注释写明功能。参看../page/index.js
/**
 * 标签相关
 * @type {{BaseLabel: ((p1:Object)), InfoLabel: ((p1:Object)), TextLabel: ((p1:Object)), BaseCellLabel: ((p1:Object))}}
 */
/**
 * Created by ljc on 2017/5/15 13:48.
 */
var Label = {
  /**
   * 基础标签
   * 1）提供label属性文本输入
   * 2）提供name属性文本输入
   * 3）提供style属性自定义样式
   * 4）提供className属性指定样式
   * 5）提供icon属性指定图标
   * 6）提供noneBorderBottom属性设置是否带下边框
   */
  BaseLabel: _baseLabel2.default,
  /**
   * 信息标签
   * 1）提供label属性文本输入
   * 2）提供name属性文本输入
   * 3）提供style属性自定义样式
   * 4）提供className属性指定样式
   * 5）提供noneBorderBottom属性设置是否带下边框
   */
  InfoLabel: _infoLabel2.default,
  /**
   * 文本标签
   * 1）提供label属性文本输入
   * 2）提供name属性文本输入
   * 3）提供style属性自定义样式
   * 4）提供className属性指定样式
   */
  TextLabel: _textLabel2.default,
  /**
   * Cell标签
   * 1）提供label属性文本输入
   * 2）提供name属性文本输入
   * 3）提供style属性自定义样式
   * 4）提供className属性指定样式
   * 5）提供noneMarginBottom属性设置是否指定下边距
   * 6）提供noneBorderBottom属性设置是否带下边框
   * 7）提供onClick属性设置点击事件
   */
  CellLabel: _cellLabel2.default
};

exports.BaseLabel = _baseLabel2.default;
exports.InfoLabel = _infoLabel2.default;
exports.TextLabel = _textLabel2.default;
exports.CellLabel = _cellLabel2.default;
exports.default = Label;