import Image from "next/image"

export default function Avatar({ author }) {
  const { name } = author || {"name": "Anonymous"} 


  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
          className="rounded-full"
          alt="alt-resim-aga"
          width={40}
          height={40}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}