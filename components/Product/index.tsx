import Image from "next/image";
import Time from "../Time";
interface Props {
    img: StaticImageData
}
const Product = ({img} : Props) => {
    return (
        <div className="bg-white border border-[#F2F2F2] rounded-[34px] p-6 mx-6 box-border flex">
            <div className="flex-1">
                <div className="text-[#F4C340] text-[15px] font-[450] leading-[27px] mb-1">Organic</div>
                <h6 className="text-[#3D3D3D] text-[16px] font-bold leading-[22px] tracking-[.288px] mb-1">Burpee Organic Snowball Y Cauliflower Vegetable Seed, 1-pack</h6>
                <div className="text-[#BCBCBC] text-[15px] font-bold leading-[27px] mb-4">Unit:<span className = "text-black ml-1">Kg</span></div>
                <div className="text-[#347758] text-[24px] font-bold leading-[32px] mb-4 relative">$1.99 <span className = "ml-2 absolute top-0 text-[#BCBCBC] text-[16px] font-bold leading-[28px] tracking-[.2px] line-through">$2,99</span></div>
                <div className="bg-[#F4F4F4] rounded-[24px] h-[7px] w-[80%] mb-2 relative">
                    <div className = "absolute left-0 top-0 bottom-0 w-[50%] bg-[#F4C340] rounded-[24px]"></div>
                </div>
                <div className="text-[#3D3D3D] text-[14px] font-bold leading-[28px] tracking-[.2px] mb-4">Soil: 20/24</div>
                <div className="mb-3 text-[#656565] text-[15px] font-[450] leading-[27px]">Hurry up. Offer end in</div>
                <div className = "flex items-center">
                    <Time/>
                    <span className="text-[#656565] mx-3">:</span>
                    <Time/>
                    <span className="text-[#656565] mx-3">:</span>
                    <Time/>
                    <span className="text-[#656565] mx-3">:</span>
                    <Time/>
                </div>
            </div>
            <div className = "flex-1 p-6">
                <Image src = {img} alt = "" className = "object-cover w-full"/>
            </div>
        </div>
    );
};

export default Product;