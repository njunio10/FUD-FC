import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-[#0225C1] transition-transform hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </Link>
      <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-[#0225C1] transition-transform hover:scale-110"
        aria-label="YouTube"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-[#0225C1] transition-transform hover:scale-110"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </Link>
      <Link
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-[#0225C1] transition-transform hover:scale-110"
        aria-label="TikTok"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
        </svg>
      </Link>
      <Link
        href="https://whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-[#0225C1] transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </Link>
    </div>
  )
}

