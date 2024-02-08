import { Navigation } from "@/common/components/Navigation/Navigation"

export const Footer = () => {
    return(
        <ul className="mx-9 pt-5 pb-9 grid grid-cols-24 grid-rows-1 border-t border-black">
            <li className="col-span-4"><p className="primary-text opacity-60 ">Santorini Breeze Hotel Fira, Santorini 847 00 Greece</p></li>
            <li className="col-start-7 col-span-2"><Navigation footer={true}/></li>
            <li className="flex flex-col text-sm col-start-10 col-span-2">
                <a href="#" className="hover:opacity-100 opacity-60">INSTAGRAM</a>
                <a  href="#" className="hover:opacity-100 opacity-60">FACEBOOK</a>
                <a  href="#" className="hover:opacity-100 opacity-60">TWITTER</a>
            </li>
            <li className="uppercase text-xs flex flex-col text-nowrap col-start-22 col-span-3 ml-auto">
                <a  href="#" className="hover:opacity-100 opacity-60">Terms and conditions</a>
                <a  href="#" className="hover:opacity-100 opacity-60">Privacy POlicy</a>
            </li>
        </ul>
    )
}