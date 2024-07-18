import { Moon } from 'lucide-react';


export default function Home() {
  return (
    <main className=" bg-[#0B1328] min-h-screen select-none p-8">
      <NavBar />
      <Hero/>
      
    </main>
  );
}

function NavBar() {
  return (
    <div className="flex items-center justify-between mx-6">
      <h1 className="font-bold text-2xl tracking-widest text-white ">
        {`<gal/>`}
      </h1>
      <div className="text-white flex items-center font-normal text-base gap-6">
        <a href="#">About me</a> 
        <a href="#">Skills</a>
        <a href="#">Projects</a> 
        <a href="#">Contact</a> 
        <Moon size={18}/>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex items-center justify-between mx-6">
      
    </div>
  );
}
