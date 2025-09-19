import React from 'react'
import { useState } from 'react'
import { Chart, Chartcolor } from '../../../assets/export';
export default function State() {
   
    return (
        <div className="p-5">
        <h3 className="text-[28px] font-[500] text-white">
         Dashboard
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
          <div className=" bg-[linear-gradient(96deg,rgba(91,12,38,1)_0%,rgba(31,9,108,1)_100%)] flex p-5 rounded-[15px] items-center justify-between">
            <div>
              <p className="font-500 text-[16px] text-[#FFFFFF]">Total Members</p>
              <p className="font-500 text-[24px] text-[#FFFFFF]">540</p>
            </div>
            <div>
              <img src={Chart} className="w-16" alt="total user" />
            </div>
          </div>
          <div className="bg-[linear-gradient(96deg,#505050_10%,#1F1F1F_100%)] p-[1px] rounded-[15px]">
          <div className="bg-[#000000] backdrop-blur-[50px]  p-5 flex items-center justify-between rounded-[15px] ">
            <div>
              <p className="font-500 text-[16px] text-[#FFFFFF]">Total Revenue</p>
              <p className="font-500 text-[24px] text-[#FFFFFF]">
              $5,400
              </p>
            </div>
            <div>
              <img src={Chartcolor} className="w-16" alt="total user" />
            </div>
          </div>
          </div>
          <div className="bg-[linear-gradient(96deg,rgba(91,12,38,1)_0%,rgba(31,9,108,1)_100%)] backdrop-blur-[50px] rounded-[10px] p-5 flex items-center justify-between">
            <div>
              <p className="font-500 text-[16px] text-[#FFFFFF]">Total Reports</p>
              <p className="font-500 text-[24px] text-[#FFFFFF]">
              16
              </p>
            </div>
            <div>
              <img src={Chart} className="w-16" alt="total user" />
            </div>
          </div>
        </div>
      </div>
    );
}