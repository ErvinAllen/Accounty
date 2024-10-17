function Header({ title }) {
  return (
    <div className="bg-[#007CFF] dark:bg-zinc-900 h-24 max-w-full rounded-3xl m-8 flex justify-center items-center">
      <h1 className="md:text-6xl text-4xl text-white">{title}</h1>
    </div>
  )
}

export default Header