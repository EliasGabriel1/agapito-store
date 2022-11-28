import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <div className='container justify-center'>
        <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </div>
);
 
export default Loading;