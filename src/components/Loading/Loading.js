import React from 'react';
import { RingLoader } from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
    return (
        <div className="sweet-loading h-[100vh] flex flex-col justify-center items-center gap-8">
            <RingLoader css={override} size={120} color={"#B51BE1"} />
            <p className='text-fuchsia-600 text-2xl'>Loading...</p>
        </div>
    );
};

export default Loading;