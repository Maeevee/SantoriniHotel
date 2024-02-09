import bannerNavigation from "../bannerNav.json"
import {IBannerNav} from "../interfaces"
import bannerNavFooter from "../banerNavFooter.json"

export const useBannerNav = (value?:boolean):IBannerNav[] => value?bannerNavFooter:bannerNavigation