import { Container } from "@/common/components/Container/Container";
import Image from "next/image";
import { useImg } from "./hooks/useImg";

export const RelaxSection = () => {

    const img = useImg()
    return(
        <Container>
            <h2>Relax and Unwind</h2>
            <p>Welcome to Santorini Breeze Hotel, a beautiful destination situated on the stunning island of Santorini. Our hotel boasts a breathtaking beach area that will leave you feeling relaxed and rejuvenated.</p>
            <p>In the evening, the beach area transforms into a romantic setting, perfect for watching the sunset while sipping on a glass of wine. The picturesque views of the surrounding cliffs and the Aegean Sea are truly breathtaking.</p>
            {img.map(({ id, src }) => (
          <Image key={id} src={src} alt={id} width={300} height={400} />
        ))}
        </Container>
    )
}