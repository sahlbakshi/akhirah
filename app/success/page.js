"use client"
import Link from "next/link"

export default function Success() {

  return (
    <div className="flex flex-col items-center mt-28">
      <div className="text-3xl font-bold mb-28">AKHIRAH ATHLETIC</div>
      <div className="text-[28px] font-semibold mb-14">WAITLIST FOR OUR DROP</div>
      <div className="text-md w-64 text-center font-medium">Thank you for signing up!</div>
      <div className="text-md w-64 text-center font-medium mb-14">Keep an eye out at your mailbox to get notified.</div>
      <div className="mb-28 text-xs">*waitlist gets early access email</div>
      <div className="flex gap-2 items-center">
        <Link href=""><img className="w-6" src="/images/instagram.png"></img></Link>
        <Link href=""><img className="w-6" src="/images/tiktok.png"></img></Link>
      </div>
    </div>
  )
}
