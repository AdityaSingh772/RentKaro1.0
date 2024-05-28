import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';



const Preloader = () => {
    return (
        <div className="fixed inset-0 bg-[#DDE6ED] flex justify-center items-center z-50">
            <div className="animate-pulse">
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
              ballColors={["black", "black", "black"]}
              backgroundColor="#27374D"
            />
            </div>
        </div>
    );
};

export default Preloader;
