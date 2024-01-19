import { Container } from "@/common/components/Container/Container"
import { CheckAvailability } from "./components/CheckAvailability/CheckAvailability"
import {useBannerNav} from "./hooks/useBannerNav"

export const Banner = () => {

    const bannerNav = useBannerNav()

    return(
        <div
            style={{
            backgroundImage: `url('/images/banner/Rectangle20.png')`
            }}>
            <Container>
                <header>
                    <nav>
                        <ul>
                            {bannerNav.map(({id, title}) => <li key={id}>{title}</li>)}
                        </ul>
                    </nav>
                </header>
                <h1>Santorini Breeze Hotel</h1>
                <CheckAvailability/> 
            </Container>
        </div>
    )
}