import { IoArrowBackSharp } from "react-icons/io5"
import { useNavigate } from "react-router"
import { image } from "../../../assets/export";

export const UserDetailHeader = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full flex items-center justify-between bg-[#000000] p-10 my-4 rounded-[15px]">
            <div className='flex items-center justify-start'>
                <div className="flex items-center justify-start gap-6 relative">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-[linear-gradient(96deg,#C01F37_10%,_#3D28D5_100%)] p-[2px]">
                        <img src={image} alt="" />
                      
                       <div className=" bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-full absolute -bottom-4 left-0">
                       <div className=" p-1  bg-[#000000]  rounded-full flex items-center justify-center gap-1">
                         <img src={image} alt="" className="w-[24px] h-[24px]"/>
                            <span className="text-white text-[14px] font-[600] space-x-2">1550 <span className="text-[12px] font-[400] text-[#565656]">Coins</span></span>
                        </div>
                       </div>


                    </div>
                        <p className="text-white text-[32px] font-[600] flex flex-col ">John Doe <span className="text-[16px] font-[400]">John_Doe021</span></p>
                   
                </div>
            </div>
            <div className="flex items-center ">
            <button
                onClick={() => navigate(`/users`)}
                className="w-[177px] h-[49px] text-white text-[18px] font-[500] px-4 py-2 rounded-[999px]"
                style={{
                  background:
                    'linear-gradient(96deg, #C01F37 10%, #3D28D5 100%)',
                }}
              >
              Restrict  Profile
              </button>   
            </div>
        </div>
    )
}