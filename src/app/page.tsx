export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center p-10 gap-6 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">About</h1>
          <p className="text-lg leading-8"> 
            GNCE (Galactic Narwhal Chicken Effect) Mercury is a second year FTC team based in Weston, MA.</p>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">Members</h1>
          <div className="grid grid-cols-6 gap-6"> 
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Zade</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Elisa</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Andy</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Noyee</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Nicholas</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Ethan</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Lucas</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Kyle</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img className="w-30 h-30 aspect-square object-cover rounded-full" src="img-placeholder.png"></img>
              <p className="">Amy</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">Sponsors</h1>
          <div className="grid">
          <img className="h-20 w-60 object-contain" src="solidworks.png"></img>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">Our Robot</h1>
          <p className="text-lg leading-8">coming soon :D</p>
        </div>
      </main>
    </div>
  );
}