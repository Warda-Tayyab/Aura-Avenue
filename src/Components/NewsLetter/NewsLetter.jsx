import React from 'react'
import './NewsLetter.css'
 const NewsLetter = () => {
  return (
    <>
    
    <div className='NewsLetter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input classname="email" type="email " placeholder='Your Email is'></input>
            <button>Subscribe</button>
        </div>
    </div>
    </>
  )
}
export default NewsLetter