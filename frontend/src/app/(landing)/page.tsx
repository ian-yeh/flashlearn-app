"use client";
import SignInWithGoogle from "@/components/SignInWithGoogle";
import Link from "next/link"

const page = () => {
  return (
    <div className="h-[100vh]">
      <div className="w-[50vw] bg-gray-300 py-3 px-6 rounded-full mr-auto ml-auto mt-12 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl mr-1">⚡</h1>
          <h1 className="text-xl">Flashlearn</h1>
        </div>
        <div className="flex gap-4">
          <Link href={"/about"}>
            <h1 className="text-xl hover:text-gray-700 transition-colors duration-200">About</h1>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center p-20">
        <div className="w-full space-y-24 mt-auto mb-auto">
          <h1 className="text-6xl md:text-7xl">
            Turn <span className="font-marker"> chaos </span> into 
            <span className="font-script text-8xl md:text-9xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"> mastery</span>
            .
          </h1>
          
          <h1 className="text-6xl md:text-7xl">Use Flashlearn ⚡.</h1>
          <SignInWithGoogle />
        </div>
      </div>
    </div>
  )
}

export default page
