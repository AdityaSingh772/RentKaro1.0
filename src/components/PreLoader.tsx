import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';



const Preloader = () => {
    return (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
            <div className="animate-pulse">
            <FidgetSpinner
              visible={true}
              height="50"
              width="50"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
              ballColors={["white", "white", "white"]}
              backgroundColor="white"
            />
               

            </div>
        </div>
    );
};

export default Preloader;
