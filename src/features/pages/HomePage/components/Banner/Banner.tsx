import { Container } from "@/common/components/Container/Container"
import { CheckAvailability } from "./components/CheckAvailability/CheckAvailability"
import {useBannerNav} from "./hooks/useBannerNav"
// import styles from "./styles.css"

export const Banner = () => {

    const bannerNav = useBannerNav()

    return(
        <div className="bg-[url('/images/banner/Rectangle20.png')] bg-no-repeat text-white">
            <Container>
                <header className="">
                    <nav className="">
                        <ul className="flex items-center justify-center text-sm space-x-10 [&>*:nth-child(3)]:uppercase [&>*:nth-child(3)]:w-full [&>*:nth-child(3)]:text-center [&>*:nth-child(3)]:text-xl [&>*:nth-child(4)]:text-nowrap">
                            {bannerNav.map(({id, title, className}) => <li className={className} key={id}>{title}</li>)}
                        </ul>
                    </nav>
                </header>
                <h1 className="mt-32 text-7xl font-thin mb-52"><span className="block">Santorini</span> Breeze Hotel</h1>
                <CheckAvailability/> 
            </Container>
        </div>
    )
}