import {useBannerNav} from "./hooks/useBannerNav"

interface Props{
    footer?:boolean
}

// footer - true
// header - false

export const Navigation = ({footer}:Props) => {

    const bannerNav = useBannerNav()
    return(
        <nav className="">
                        <ul className="">
                            {bannerNav.map(({id, title, className}) => <li className={className} key={id}>{title}</li>)}
                        </ul>
                    </nav>
    )
}