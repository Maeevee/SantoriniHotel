import { Container } from "@/common/components/Container/Container"
import { useImg } from "./hooks/useImg"
import Image from "next/image"

import img1 from "../../../../../../public/images/engoysection/Group7.png"
import img2 from "../../../../../../public/images/engoysection/Group8.png"
import img3 from "../../../../../../public/images/engoysection/Group9.png"
import { Header } from "@/common/components/Header/Header"

export const EnjoySection = () => {
    const img = useImg();
  
    return (
      <Container>
        <Header className=" ml-[26%] mt-36">Enjoy a luxury experience</Header>
        <p className="primary-text ml-[26%] my-7 w-[37%]">
          Welcome to Santorini Breeze Hotel, a luxurious and inviting destination
          situated on the breathtaking island of Santorini. Our hotel offers a
          range of world-class amenities and unparalleled service.
        </p>
        <div className="flex items-start justify-between mb-28">
          <Image  src={img2} alt="Terrace with spa"/>
          <Image src={img1} alt="Restaurant terrace"/>
          <button type="button" className="self-end primary-btn">LEARN MORE</button>
          <div className="w-[322px]	 text-xl text-right">
            <Image src={img3} alt="View from the balcony"/>
            <p className="secondary-text w-3/4 ml-auto text-right mt-5">We providing a serene and tranquil atmosphere.</p>
          </div>
        </div>
        {/* {img.map(({ id, src }) => (
          <Image key={id} src={src} alt={id} width={300} height={400} />
        ))} */}
      </Container>
    );
  };