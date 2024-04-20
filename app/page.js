"use client"
import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmitButton = (e) => {
    if (email.length == 0) {
      e.preventDefault()
      setMessage("Email can't be blank.")
    } else {
      e.preventDefault()
      router.push('/success')
    }
  }

  return (
    <div className="flex flex-col items-center sm:mt-28 mt-14">
      <div className="text-2xl sm:text-3xl font-extrabold mb-24 sm:mb-28">AKHIRAH ATHLETIC</div>
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
          className="flex gap-2 px-6 items-center py-3 text-black text-sm font-light bg-slate-50 mb-8"
          onClick={(e) => handleSubmitButton(e)}
          >
          JOIN
          <img className="w-4" src="/images/rightarrow.png"></img>
        </button> 
      </form>
      <div className="mb-24 sm:mb-28 text-xs">*waitlist gets early access email</div>
      <div className="flex gap-2 items-center">
        <Link href=""><img className="w-6" src="/images/instagram.png"></img></Link>
        <Link href=""><img className="w-6" src="/images/tiktok.png"></img></Link>
      </div>
    </div>
  )
}