import { Container } from "@/common/components/Container/Container";
import Image from "next/image";
import { useImg } from "./hooks/useImg";
import { Header } from "@/common/components/Header/Header";
import Rectangle14 from "../../../../../../public/images/relaxsection/Rectangle14.png"
import Rectangle23 from "../../../../../../public/images/relaxsection/Rectangle23.png"
import Rectangle24 from "../../../../../../public/images/relaxsection/Rectangle24.png"

export const RelaxSection = () => {

    const img = useImg()
    return(
        <Container className="mb-40 mt-56 grid grid-cols-24 grid-rows-17">
                <Header className="col-start-1 col-span-10 row-start-1 row-span-1 place-self-start">Relax and Unwind</Header>
                <p className="mt-2 w-[90%] secondary-text text-left col-start-1 col-span-5 row-start-5 row-span-3 z-20">Welcome to Santorini Breeze Hotel, a beautiful destination situated on the stunning island of Santorini. Our hotel boasts a breathtaking beach area that will leave you feeling relaxed and rejuvenated.</p>
                <p className="mt-8 primary-text text-right col-start-16 col-span-8 row-start-8 row-span-3">In the evening, the beach area transforms into a romantic setting, perfect for watching the sunset while sipping on a glass of wine. The picturesque views of the surrounding cliffs and the Aegean Sea are truly breathtaking.</p>
                {/* {img.map(({ id, src, className }) => (
              <Image className={className} key={id} src={src} alt={id} width={300} height={400} />
            ))} */}
                <Image className="col-start-12 col-span-12 row-start-1 row-span-6 justify-self-end" src={Rectangle14} alt=""/>
                <Image className="col-start-4 col-span-9 row-start-6 row-span-10 self-end z-10" src={Rectangle23} alt=""/>
                <Image className="col-start-15 col-span-5 row-start-12 row-span-6 self-end"  src={Rectangle24} alt=""/>
        </Container>
    )
}