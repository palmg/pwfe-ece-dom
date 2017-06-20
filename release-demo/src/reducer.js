/**
 * Created by chkui on 2017/5/11.
 */

/**
 * 用于示例的reducer
 * reducer的命名规范为模块名称+1级业务名称+2级业务名称。以驼峰规则书写。
 * 例如课程模块下记录活动列表的reducer命名为：courseOutingList,
 * reducer中对应的type以这个作为前缀来命名后续业务内容，例如：courseOutingListOnLoad
 */
const courseOutingList = (state = {
    init: false,
    list: []
}, action) => {
    switch (action.type) {
        case 'courseOutingListLoading':
            return {
                init: false,
                list: []
            };
        case 'courseOutingListOnLoad':
            return {
                init: true,
                list: action.data
            };
        default :
            return state;
    }
};

export {courseOutingList}