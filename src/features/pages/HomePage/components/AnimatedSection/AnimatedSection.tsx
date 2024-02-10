import { Header } from "@/common/components/Header/Header"
import { useState } from "react"

export const AnimatedSection = () => {

    const [mail, setMail] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target
        setMail(value)
    }

    return(
            <>
                {/* <div className="px-9 pt-12 pb-14 mb-28 rounded-2xl mt-40 bg-[url('/images/animatedsection/Rectangle15.png')] bg-no-repeat text-white">
                        <Header className="mb-20 w-[70%]">If you have any questions about our rooms, amenities, or services, please don't hesitate to ask.</Header>
                    <form className="flex flex-col w-[28%]">
                        <input className="text-black rounded-[20px] h-14 px-4" placeholder="Email" required value={mail} onChange={handleInputChange}/>
                        <textarea className="text-black rounded-[20px] h-36 mt-4 mb-10 p-4 resize-none"  placeholder="Your question" />
                        <button className="bg-primary rounded-[20px] h-14 w-100" type="submit">SEND</button>
                    </form>
                </div> */}
            </>
    )
}