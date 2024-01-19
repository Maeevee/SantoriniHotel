import { Container } from "@/common/components/Container/Container"
import { useImg } from "./hooks/useImg"
import Image from "next/image"

export const EnjoySection = () => {

    const img = useImg()

    return(
        <Container>
            <h2>Enjoy a luxury experience</h2>
            <p>Welcome to Santorini Breeze Hotel, a luxurious and inviting destination situated on the breathtaking island of Santorini. Our hotel offers a range of world-class amenities and unparalleled service.</p>
            {img.map(({id, src}) => <Image key={id} src={`/images/public/images/engoysection/${src}`} alt="" width={300} height={400}/>)}
        </Container>
    )
}