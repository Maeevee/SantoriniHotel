import { Container } from "@/common/components/Container/Container"
import Image from "next/image"
import { useImg } from "./hooks/useImg"
import { Header } from "@/common/components/Header/Header"
import { motion } from "framer-motion";
import room1 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222382.png"
import room2 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222406.png"
import room3 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222415.png"
import room4 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222417.png"
import room5 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222379.png"
import room6 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222384.png"
import room7 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222389.png"
import room8 from "../../../../../../public/images/rooms/Triple_4001_Kirk_Stay_Oktober_20222394.png"

import { useEffect, useRef, useState } from "react";

const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 0;


const slides = [
        {
            image: room1,
            id: 1,
        },
        {
            image: room2,
            id: 2,
        },
        {
            image: room3,
            id: 3,
         },
        {
            image: room4,
            id: 4,
         },
         {
            image: room5,
            id: 5,
        },
        {
            image: room6,
            id: 6,
        },
        {
            image: room7,
            id: 7,
         },
        {
            image: room8,
            id: 8,
         },
    ];

export const Rooms = () => {

    const [width, setWidth] = useState(5410 - innerWidth);
    const carousel = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        const resizeHandler = () => {
            if (carousel.current?.scrollWidth && carousel.current?.offsetWidth) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            }
        };

        const observer = new MutationObserver(() => {
            if (carousel.current?.offsetWidth) {
                resizeHandler();
                observer.disconnect();
            }
        });

        if (carousel.current) {
            observer.observe(carousel.current, { childList: true });
        }

        window.addEventListener('resize', resizeHandler);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

   const img = useImg()

    return(
        <div className="flex flex-col mb-36">
            <Header className="mx-9">Experience Comfort in Every Room</Header>
            <p className="mx-9 primary-text mt-10 mb-7 w-[49%]">As soon as you step through our doors, you will be greeted by our friendly and attentive staff. Our rooms and suites are designed with your comfort in mind, featuring modern furnishings and stunning views of the island and the Aegean Sea.</p>
            <motion.div 
                ref={carousel} 
                className='overflow-auto min-w-full pb-5' 
                whileTap={{cursor: 'grabbing'}}
                
            >
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className='flex mx-9 [&>*:last-child]:mr-9'
                >
                    {slides.map((slide) => {
                        return (
                            <Image  key={slide.id} className="h-[514px] mr-2 w-auto rounded-lg snap-x" src={slide.image} alt=''/>
                        )
                    })}
                    <div className="min-w-7"></div>
                </motion.div>
            </motion.div>
            <button className="secondary-btn self-center mt-10" type="button">VIEW ALL</button>
        </div>
    )
}