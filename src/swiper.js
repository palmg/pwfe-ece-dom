/**
 * Created by ljc on 2017/5/16 15:45.
 */
import BaseSwiper from './lib/swiper/baseSwiper'
import SwiperItem from './lib/swiper/baseSwiperItem'

const Swiper = {
    /**
     *基础滑块视图容器(所有的滑块项均需要由BaseSwiper组件包装)
     */
    BaseSwiper: BaseSwiper,

    /**
     * 滑块项，仅可放置在<BaseSwiper/>(所有放置于BaseSwiperItem放的外部组件均可左右滑动滚屏)
     * 1)提供className属性指定样式
     */
    SwiperItem: SwiperItem

}

export {BaseSwiper, SwiperItem}
export default Swiper;
