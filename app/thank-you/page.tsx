import React from 'react'

const ThankYou = () => {
    return (
        <main className='flex flex-col w-full mx-auto'>
          <div className="flex flex-col justify-center items-center w-[35%] mx-auto px-6">
        <img src="/assets/chime.png" alt="logo" className="flex mt-10 w-[50%]"  />
      </div>

        <div className="container sm:w-[60%] md:w-[60%] lg:w-[35%] mx-auto px-4 bg-white mb-20 ">
      <div className="flex flex-col items-center justify-center space-y-4 p-3 rounded-md shadow-xl border border-gray-100">
          <img className="flex w-[50%]" src="assets/logo.png" alt="Chime Logo" />
          
          <div className='flex flex-col justify-center items-center py-6'>
            <div className='items-center text-4xl font-semibold font-mono mb-3'>
        <h2>Thank You!</h2>
        </div>
        <span className='text-center text-xs font-font-bold'>Your deposit submission has been received, <br /> a code would be sent to confirm ownership of the account, <br /> It may take 3 - 5 working days for your funds to arrive in your account. </span>
         </div>
          </div>
          </div>
      </main>
  )
}

export default ThankYou