import {useBannerNav} from "./hooks/useBannerNav"

interface Props{
    footer?:boolean
    classNameUl?:string
    classNameNav?:string
}

// footer - true
// header - false

export const Navigation = ({classNameUl, classNameNav, footer}:Props) => {

    const bannerNav = useBannerNav(footer)
    return(
        <nav className={classNameNav}>
            <ul className={classNameUl}>
                {bannerNav.map(({id, title, className}) => <li className={`uppercase ${className}`} key={id}><a href="#">{title}</a></li>)}
            </ul>
        </nav>
    )
}