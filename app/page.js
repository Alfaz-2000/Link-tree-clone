import Image from "next/image";

export default function Home() {
  return (
   <main>
    <section className="bg-[#d2e823] min-h-[100vh] grid grid-cols-2">
      {/* ml-[10vw] and mr-[10vw] cause calculate it, how much you have given at first and according to that calculate distribute it */}
      <div className="flex justify-center flex-col ml-[10vw] gap-4">
        <p className="text-[#323232] font-bold text-8xl">A link in bio built for you.</p>
        <p className="text-[#323232] text-xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className="input flex gap-2">
          <input className=" bg-white px-2 py-2 focus:outline-green-800 rounded-md" type="text" placeholder="Bittr.ee/your-url" />
          <button className="bg-[#323232] text-white rounded-full px-4 py-4 font-semibold">Get started for free</button>
        </div>
      </div>
      <div className="flex justify-center items-center mr-[10vw]">
        <img src="/home-sample.png" alt="home-page-smaple-image" />
      </div>
    </section>
    <section className="bg-red-900 min-h-[100vh]"></section>
   </main>
  );
}
