import { Container } from "@/common/components/Container/Container";
import Image from "next/image"
import photo from "../../../../../../public/images/restoraunt/Rectangle12.png"
import photo2 from "../../../../../../public/images/restoraunt/Rectangle13.png"

export const Restoraunt = () => {
    return(
        <Container>
            <h2>Indulge in Greek Flavors and Breathtaking Views at Our Restaurant</h2>
            <p>At Santorini Breeze Hotel, we believe that dining is an essential part of any vacation experience. That's why we've created an exceptional culinary experience for our guests in our in-house restaurant.</p>
            <Image src={photo} alt="" width={300} height={400}/>
            <Image src={photo2} alt="" width={300} height={400}/>
            <p>Our menu features a wide range of options, including fresh seafood, grilled meats, vegetarian options, and delectable desserts. Our wine list is extensive, offering a variety of local and international wines that perfectly complement our dishes.</p>
            <button type="button">read more</button>
        </Container>
    )
}