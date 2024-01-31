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
                <div className="mt-40">
                    <Header>If you have any questions about our rooms, amenities, or services, please don't hesitate to ask.</Header>
                    <p>We're here to help make your stay as comfortable and enjoyable as possible.</p>
                </div>
                <form>
                    <input placeholder="Email" required value={mail} onChange={handleInputChange}/>
                    <textarea placeholder="Your question" />
                    <button type="submit">SEND</button>
                </form>
            </>
    )
}