'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WaitLoading = exports.RoundLoading = undefined;

var _roundLoading = require('./lib/loading/roundLoading');

var _waitLoading = require('./lib/loading/waitLoading');

/**
 * Created by dio on 2017/5/25.
 */

var Loading = {
    // 四个圆围成方形放大
    RoundLoading: _roundLoading.RoundLoading,

    //...
    WaitLoading: _waitLoading.WaitLoading
};

exports.RoundLoading = _roundLoading.RoundLoading;
exports.WaitLoading = _waitLoading.WaitLoading;
exports.default = Loading;