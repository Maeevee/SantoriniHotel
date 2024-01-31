import { Container } from "@/common/components/Container/Container";
import Image from "next/image";
import { useImg } from "./hooks/useImg";
import { Header } from "@/common/components/Header/Header";

export const RelaxSection = () => {

    const img = useImg()
    return(
        <Container className="mb-40 mt-56 grid grid-cols-12 grid-rows-5">
                <Header className="bottom-full text-left">Relax and Unwind</Header>
                <p className="w-1/4 mb-10">Welcome to Santorini Breeze Hotel, a beautiful destination situated on the stunning island of Santorini. Our hotel boasts a breathtaking beach area that will leave you feeling relaxed and rejuvenated.</p>
                <p className="w-1/3">In the evening, the beach area transforms into a romantic setting, perfect for watching the sunset while sipping on a glass of wine. The picturesque views of the surrounding cliffs and the Aegean Sea are truly breathtaking.</p>
                {img.map(({ id, src }) => (
              <Image className="" key={id} src={src} alt={id} width={300} height={400} />
            ))}
        </Container>
    )
}