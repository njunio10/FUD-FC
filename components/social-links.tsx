import { Instagram, Facebook, Twitter, Youtube} from "lucide-react"
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
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-[#0225C1] transition-transform hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
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
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M15 8v8a4 4 0 0 1-4 4" />
          <line x1="15" y1="4" x2="15" y2="12" />
        </svg>
      </Link>
      <Link
        href="https://whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-[#0225C1] transition-transform hover:scale-110"
        aria-label="WhatsApp"
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
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M12 17a5 5 0 0 1-5-5v-1a5 5 0 0 1 10 0v1a5 5 0 0 1-5 5Z" />
        </svg>
      </Link>
    </div>
  )
}

