'use client'
import { Button, Rating } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'


function FeedbackForm() {
  const [submited,isSubmited] = useState(false);
  const [count,setCount] = useState(1);
  const [notFirstSubmission,setFirstSubmission] = useState(true)

  function onFormSubmition(e){
 e.preventDefault();
 isSubmited(true);
 setFirstSubmission(false)
  }
function anotherFeedback(){


   setCount(count+1)


isSubmited(false);
}
  return (
<div className='bg-[#0b7261] h-[100vh] items-center justify-center flex '>
{!submited ? (
        <div className="w-full max-w-md mx-auto py-10 bg-gray-200 p-10 ">
            <h2 className="text-4xl font-bold text-center py-0 mb-8 sm:text-4xl underline  cursor-default">{notFirstSubmission?`Feedback` :`Feedback ${count}`}</h2>
            <form onSubmit={onFormSubmition}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold hover:underline ">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-gray-400 focus:border-[2px] sm:text-sm" required/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-semibold hover:underline">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-gray-400 focus:border-[2px] sm:text-sm" required/>
                </div>
                <div className="mb-4">
                    <label  className="block text-lg font-semibold hover:underline">Rating</label>
             <div >

                <Rating  className='text-yellow-400 w-6 h-6 flex' value={4}/>
             </div>

                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-semibold hover:underline">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your Message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-gray-400 focus:border-[2px] sm:text-sm" required></textarea>
                </div>
                <div >
          <Button type='submit' className='bg-yellow-400 text-lg text-black w-20'>submit</Button>
          </div>
            </form>
        </div>
):(
<div className="w-full max-w-md mx-auto  bg-gray-200 p-10 ">
            <h2 className="text-4xl font-bold text-center mb-8 sm:text-4xl  bg-green-400 border-2px rounded-md cursor-default">Form submitted successfully!</h2>
            <p className=" font-semibold hover:font-bold text-center mb-8 sm:text-2xl hover:underline  cursor-default" onClick={anotherFeedback}>Submit anoher feedback ?</p>
            </div>
)

}
</div>
)

}

export default FeedbackForm