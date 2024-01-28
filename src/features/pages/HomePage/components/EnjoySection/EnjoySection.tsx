import { Container } from "@/common/components/Container/Container"
import { useImg } from "./hooks/useImg"
import Image from "next/image"

import img1 from "../../../../../../public/images/engoysection/Group7.png"
import img2 from "../../../../../../public/images/engoysection/Group8.png"
import img3 from "../../../../../../public/images/engoysection/Group9.png"

export const EnjoySection = () => {
    const img = useImg();
  
    return (
      <Container>
        <h2 className=" text-5xl ml-[29%] mt-52">Enjoy a luxury experience</h2>
        <p className="text-xl ml-[25%] my-7">
          Welcome to Santorini Breeze Hotel, a luxurious and inviting destination
          situated on the breathtaking island of Santorini. Our hotel offers a
          range of world-class amenities and unparalleled service.
        </p>
        <div className="flex items-start justify-between mb-52">
          <Image  src={img2} alt="Terrace with spa"/>
          <Image src={img1} alt="Restaurant terrace"/>
          <button type="button" className="self-end py-2.5 px-14 text-nowrap bg-primary rounded-2xl text-white">LEARN MORE</button>
          <div className="w-[240px] text-xl text-right">
            <Image src={img3} alt="View from the balcony"/>
            <p>We providing a serene and tranquil atmosphere.</p>
          </div>
        </div>
        {/* {img.map(({ id, src }) => (
          <Image key={id} src={src} alt={id} width={300} height={400} />
        ))} */}
      </Container>
    );
  };