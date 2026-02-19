export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center p-10 gap-6 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">About</h1>
          <p className="text-lg leading-8"> 
            We are GNCE Mercury, a second year FTC team based in Weston, MA.</p>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">Sponsors</h1>
          <p className="text-lg leading-8">Solidworks</p>
          <p className="text-lg leading-8">more coming soon (hopefully) lol</p>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">Our Robot</h1>
          <p className="text-lg leading-8">coming soon :p</p>
        </div>
      </main>
    </div>
  );
}
