import { Navigation } from "@/common/components/Navigation/Navigation"

export const Footer = () => {
    return(
        <ul className="mt-40 flex">
            <li><p >Santorini Breeze HotelFira, Santorini 847 00Greece</p></li>
            <li><Navigation footer={true}/></li>
            <li>
                <a>INSTAGRAM</a>
                <a>FACEBOOK</a>
                <a>TWITTER</a>
            </li>
            <li>
                <p>Terms and conditions</p>
                <p>Privacy POlicy</p>
            </li>
        </ul>
    )
}