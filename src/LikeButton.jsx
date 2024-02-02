import React, { useState } from 'react'

function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <>

            <div className='flex items-center justify-center h-screen'>

                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>State in React</h1>

                    <p onClick={toggleLike} className='text-5xl'>
                        {
                            isLiked ? (<i className="fa-solid fa-heart"></i>) :
                            ( <i className="fa-regular fa-heart"></i>)

                        }
                       

                       
                    </p>
                </div>
            </div>
        </>
    )
}

export default LikeButton
