/**
 * Created by chkui on 2017/5/11.
 *
 */

/**
 * 用于示例的action。
 * action不涉及全局命名问题，因此在命名上没有太多的限制。一般和reducer要执行的type名称对应。
 * 例如更新课程列表。切记action是纯函数
 */
export const courseOutingListLoading = () => {
    return {
        type: courseOutingListLoading.name
    }
};

export const courseOutingListOnLoad = (data) => {
    return {
        type: courseOutingListOnLoad.name,
        data: data
    }
};