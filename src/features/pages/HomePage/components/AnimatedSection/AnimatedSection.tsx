import { Container } from "@/common/components/Container/Container"
import { useState } from "react"

export const AnimatedSection = () => {

    const [mail, setMail] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target
        setMail(value)
    }

    return(
        <Container>
            <div>
                <h2>If you have any questions about our rooms, amenities, or services, please don't hesitate to ask.</h2>
                <p>We're here to help make your stay as comfortable and enjoyable as possible.</p>
            </div>
            <form>
                <input placeholder="Email" required value={mail} onChange={handleInputChange}/>
                <textarea placeholder="Your question" />
                <button type="submit">SEND</button>
            </form>

        </Container>
    )
}