import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
export default function ReportSuccessModal( {showSuccess , setShowSuccess} ) {
 const navigate = useNavigate();

  
  
    setTimeout(() => {
      setShowSuccess(false);
      //  navigate("/users");
    }, 5000);

  return (
    <div >
      {showSuccess && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
            onClick={() => setShowSuccess(false)}
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-3xl w-full max-w-sm shadow-2xl animate-scaleUp p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <FaCheck className="w-10 h-10 text-white stroke-[3]" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">
                  Report Successfully
                </h2>
                
                <p className="text-gray-300 text-sm">
                  You have successfully reported
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      
    </div>
  );
}