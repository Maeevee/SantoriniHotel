import { Container } from "@/common/components/Container/Container"
import { CheckAvailability } from "./components/CheckAvailability/CheckAvailability"
import {useBannerNav} from "./hooks/useBannerNav"
import { Navigation } from "@/common/components/Navigation/Navigation"
// import styles from "./styles.css"

export const Banner = () => {

    const bannerNav = useBannerNav()

    return(
        <div className="bg-[url('/images/banner/Rectangle20.png')] bg-no-repeat text-white">
                <header className="relative h-20">
                <Navigation classNameUl={"fixed flex px-9 py-6 w-full items-center justify-center text-sm space-x-10 [&>*:nth-child(3)]:uppercase [&>*:nth-child(3)]:w-full [&>*:nth-child(3)]:text-center [&>*:nth-child(3)]:font-bold [&>*:nth-child(3)]:text-xl [&>*:nth-child(4)]:text-nowrap"} footer={false}/>
                    {/* <nav className="fixed">
                        <ul className="flex items-center justify-center text-sm space-x-10 [&>*:nth-child(3)]:uppercase [&>*:nth-child(3)]:w-full [&>*:nth-child(3)]:text-center [&>*:nth-child(3)]:text-xl">
                            {bannerNav.map(({id, title, className}) => <li className={className} key={id}>{title}</li>)}
                        </ul>
                    </nav> */}
                </header>
                <h1 className="mt-32 ml-9 text-[80px] leading-[88px] text-7xl font-thin mb-80 uppercase font-rufina"><span className="block">Santorini</span> Breeze Hotel</h1>
                <CheckAvailability/> 
        </div>
    )
}