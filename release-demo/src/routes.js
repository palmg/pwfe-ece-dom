/**
 * Created by chkui on 2017/6/1.
 */

import IndexDemo from './index/indexDemo'
import ButtonDemo from './button/buttonDemo'
import PageDemo from './page/pageDemo'
import InputDemo from './input/inputDemo'
import LabelDemo from './label/label'
import SwiperDemo from './swiper/swiperDemo'
import IconDemo from './icon/iconDemo'
import BarDemo from './bar/barDemo'
import ScrollDemo from './scroll/scrollDemo'
import SlideDemo from './slide/slideDemo'
import PullDownDemo from './scroll/pullDownDemo'
import LoadingDemo from './loading/loadingDemo'
import ModalDemo from './modal/modalDemo'
import TagDemo from './tag/tagDemo'

export const routes = [
    {name: "indexDemo", path:"/", component:IndexDemo},
    {name: "pageDemo", path: "/page", component: PageDemo},
    {name: "buttonDemo", path: "/button", component: ButtonDemo},
    {name: "inputDemo", path: "/input", component: InputDemo},
    {name: "labelDemo", path: "/label", component: LabelDemo},
    {name: "swiperDemo", path: "/swiper", component: SwiperDemo},
    {name: "iconDemo", path: "/icon", component: IconDemo},
    {name: "barDemo", path: "/bar", component: BarDemo},
    {name: "scrollDemo", path: "/scroll", component: ScrollDemo},
    {name: "pullDownDemo", path: "/pulldown", component: PullDownDemo},
    {name: "slideDemo", path: "/slide", component: SlideDemo},
    {name: "loadingDemo", path: "/loading", component: LoadingDemo},
    {name: "modalDemo", path: "/modal", component: ModalDemo},
    {name: "tagDemo", path: "/tag", component: TagDemo},
];