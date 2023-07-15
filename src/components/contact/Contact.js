import React, { useState } from 'react'
import Title from '../home/Title'
import { FiSend } from 'react-icons/fi'
import axios from 'axios'

const Contact = () => {
  const [client, setClient] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [successMsg, setSuccessMsg] = useState("")

  const [errClientName, setErrClientName] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errMessage, setErrMessage] = useState(false)

  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  }

  const handleName = (e) => {
    setClient(e.target.value)
    setErrClientName(false)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail(false)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
    setErrEmail(false)
  }
    
  const handleSend = (e) => {
    e.preventDefault()
    if(!client){
      setErrClientName(true)
    }
    if(!email){
      setErrEmail(true)
    }else{
      if(!emailValidation(email)){
        setErrEmail(true)
      }
    }
    if(!message){
      setErrMessage(true)
    }
    if(client && email && message && emailValidation(email)){
      axios.post("https://getform.io/f/3725080d-b1bd-429c-827b-e70150eaf4e1", {
        name: client,
        email: email, 
        message: message
      })
      setSuccessMsg(`Hello dear ${client}, your message has been sent successfully. Thank you for yor time!.`)
      setClient("")
      setEmail("")
      setMessage("")
    }
}

  return (
    <div>
      <Title title="Get" subTitle="in Touch"/>
      <div className='p-6 flex justify-between gap-20'>
        <div className='w-1/2'>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'><span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center'>Address:</span>Chennai, India</p>

          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'><span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center'>Phone No:</span>907xxxxx034</p>
        </div>
        <div className='w-1/2'>
          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'><span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center'>E-mail:</span>jayaraj@gmail.com</p>

          <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'><span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center'>Freelance:</span>Available</p>
        </div>
      </div>
      <div className='w-full mt-10'>
      <Title title="Send" subTitle="Messages"/>
        {
          successMsg ? 
            <p className='text-center text-base font-titlefont p-20 text-designColor'>{successMsg}</p> 
            :

          <form 
            id="form" 
            action="https://getform.io/f/3725080d-b1bd-429c-827b-e70150eaf4e1" 
            method='POST'
            className='p-6 flex flex-col gap-6'
          >
            <div className='w-full flex gap-10 justify-between'>
              <input 
                type="text" 
                placeholder='Logan Howlet' 
                className={`${ 
                  errClientName ? "border-red-600 focus-visible:border-designColor" : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200  outline-none duration-300`}
                onChange={handleName}
                value={client} 
              />
              <input 
                type="email" 
                placeholder='ray@mail.com' 
                className={`${ 
                  errEmail ? "border-red-600 focus-visible:border-designColor" : "border-zinc-600 focus-visible:border-designColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                onChange={handleEmail}
                value={email} 
                />
            </div>
            <textarea 
              placeholder='Your Message' 
              id="" cols="30" 
              rows="4" 
              className={`
                ${ errMessage ? "border-red-600 focus-visible:border-designColor" : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`} 
              onChange={handleMessage}
              value={message}></textarea>
            <button 
              className='text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200' 
              onClick={handleSend}>
                Send Message{" "}
                <span className='mt-1 text-designColor'><FiSend/></span>
              </button>
          </form>
        }
      </div>
    </div>
  )
}

export default Contact
