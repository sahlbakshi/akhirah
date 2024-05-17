"use client"
import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmitButton = async (e) => {
    if (email.length == 0) {
      e.preventDefault()
      setMessage("Email can't be blank.")
    } else if 
      (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        e.preventDefault()
        const response = await fetch("https://www.akhirahathletic.com/api/submit", {
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"email": email})
        })

        if (response.status == 200) {
          router.push('/success') 
        } else {
          setMessage("Please try again.")
        }
    }
  }

  return (
    <div className="flex flex-col items-center sm:mt-28 mt-14">
      <div className="text-2xl sm:text-3xl mb-24 sm:mb-28 flex gap-4">
        <div className="font-hoves">AKHIRAH</div>
        <div className="font-hovesbold">ATHLETIC</div>
      </div>
      <div className={`text-[24px] sm:text-[28px] font-semibold ${message != "" ? "mb-10" : "mb-14"}`}>WAITLIST FOR OUR DROP</div>
      {message != "" ? <div className="w-64 text-center bg-red-100 text-red-900 font-semibold py-6">{message}</div> : null}
      <form className="flex flex-col items-center">
        <input className="outline-none text-center w-64 bg-black py-4 rounded-none border-b border-gray-500 font-medium placeholder:font-medium placeholder:text-gray-300 mb-8"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        >
        </input>
        <button 
          type="submit"
          className="flex gap-2 px-6 items-center py-3 text-black text-sm font-light bg-slate-50 mb-8"
          onClick={(e) => handleSubmitButton(e)}
          >
          JOIN
          <img className="w-4" src="/images/rightarrow.png"></img>
        </button> 
      </form>
      <div className="mb-24 sm:mb-28 text-xs">*waitlist gets early access email</div>
      <div className="flex gap-2 items-center">
        <a href="https://www.instagram.com/akhirahathletic?igsh=MTlrNzZxdGcwMnNrYQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img className="w-6" src="/images/instagram.png"></img></a>
        <a href="https://www.tiktok.com/@akhirahathletic?_t=8li8jjt4nLy&_r=1" target="_blank" rel="noopener noreferrer"><img className="w-6" src="/images/tiktok.png"></img></a>
      </div>
    </div>
  )
}
