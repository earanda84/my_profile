import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className='min-h-screen flex flex-1 bg-[#0c070f]'>
      {/* Container */}
      <div className='border-2 flex flex-col flex-1'>
        {/* NAV SMALL DEVICES */}
        <Navbar />
      </div>
    </main>
  )
}
