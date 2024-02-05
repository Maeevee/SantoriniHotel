import {useBannerNav} from "./hooks/useBannerNav"

interface Props{
    footer?:boolean
}

// footer - true
// header - false

export const Navigation = ({footer}:Props) => {

    const bannerNav = useBannerNav(footer)
    return(
        <nav className="">
            <ul className="">
                {bannerNav.map(({id, title, className}) => <li className={`text-[50px] uppercase ${className}`} key={id}>{title}</li>)}
            </ul>
        </nav>
    )
}