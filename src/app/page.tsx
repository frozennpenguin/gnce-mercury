import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center p-8 gap-6 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">About</h1>
          <div className="flex gap-6">
            <p className="text-lg leading-8"> 
            GNCE (Galactic Narwhal Chicken Effect) Mercury is a second year FTC team based in Weston, MA.</p>
            <img className="h-70 rounded-2xl" src="teampic.jpg" ></img>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-2xl font-semibold leading-10">Members</h1>
          <div className="grid grid-cols-6 gap-6">
            <Profile name="Zade" image="pfps/zade.jpg" />
            <Profile name="Elisa" image="img-placeholder.png" />
            <Profile name="Andy" image="pfps/andy.jpg" />
            <Profile name="Noyee" image="pfps/noyee.jpg" />
            <Profile name="Nicholas" image="pfps/nicholas.jpg" />
            <Profile name="Ethan" image="pfps/ethan.jpg" />
            <Profile name="Lucas" image="pfps/lucas.jpg" />
            <Profile name="Kyle" image="pfps/kyle.jpg" />
            <Profile name="Amy" image="pfps/amy.jpg" />
            <Profile name="Arnie" image="img-placeholder.png" />
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