import { Calendar } from "@/common/components/Calendar/Calendar"

export const CheckAvailability = () => {
    return(
        <div className="ml-9">
            <div className="bg-secondary rounded-[20px] [&>*]:uppercase w-fit p-1 text-[11px] divide-x">
                <button type="button" className="text-black align-middle px-[33px]">Check-in <span className="block text-[13px] font-thin">*May 12*</span></button>
                <button type="button" className="text-black align-middle px-[33px] border-gray-400/50">Check-out <span className="block text-[13px] font-thin">*May 15*</span></button>
                <button type="button" className="text-black align-middle px-[33px] border-gray-400/50">Guests <span className="block text-[13px] font-thin">*Add guests*</span></button>
                <button type="button" className="bg-primary text-[15px] ml-[33px] rounded-[20px] px-[27px] py-[17px]">Check availability</button>
                
            </div>
            <Calendar/>
        </div>
    )
}