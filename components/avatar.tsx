import Image from "next/image"

export default function Avatar({ author }) {
  const { name } = author || { "name": "Anonymous" }


  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-1">
        <Image
          src='/usericon.svg'
          className="rounded-full"
          alt="Avatar Logo"
          width={40}
          height={40}
        />
      </div>
      <div className="text-rg mb-15 w-18 h-9 font-bold">XTechnology İçerik Atölyesi</div>
    </div>
  )
}