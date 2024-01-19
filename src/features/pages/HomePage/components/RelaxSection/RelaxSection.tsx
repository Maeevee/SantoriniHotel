import { Container } from "@/common/components/Container/Container";
import Image from "next/image";
import photo from "../../../../../../public/images/relaxsection/Rectangle 14.png"
import photo2 from "../../../../../../public/images/relaxsection/Rectangle 23.png"
import photo3 from "../../../../../../public/images/relaxsection/Rectangle 24.png"

export const RelaxSection = () => {
    return(
        <Container>
            <h2>Relax and Unwind</h2>
            <p>Welcome to Santorini Breeze Hotel, a beautiful destination situated on the stunning island of Santorini. Our hotel boasts a breathtaking beach area that will leave you feeling relaxed and rejuvenated.</p>
            <p>In the evening, the beach area transforms into a romantic setting, perfect for watching the sunset while sipping on a glass of wine. The picturesque views of the surrounding cliffs and the Aegean Sea are truly breathtaking.</p>
            <Image src={photo} alt="" width={300} height={400}/>
            <Image src={photo2} alt="" width={300} height={400}/>
            <Image src={photo3} alt="" width={300} height={400}/>
        </Container>
    )
}