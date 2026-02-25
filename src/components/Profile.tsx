type Props = {
  name: string
  image: string
}

export default function Profile({ name, image }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img className="w-35 aspect-square object-cover rounded-full" src={image} alt={name} />
      <p className="">{name}</p>
    </div>
  )
}