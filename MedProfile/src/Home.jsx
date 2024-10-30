import React from 'react'

export default function Home() {

  const boxStyles = {
    primary: 'bg-red-800 size-36 sm:size-40 md:size-52 lg:size-72 aspect-square rounded-[20px]'
  }

  const Home = (
    <div className="flex gap-[2.5vw] max-[500px]:flex-col my-auto bg-black h-screen w-screen items-center justify-center px-32">
      <div className={boxStyles.primary}>
      </div>

      <div className={boxStyles.primary}>
      </div>

      <div className={boxStyles.primary}>
      </div>

    </div>
  );

  return (
    <>
      {Home}
    </>
  )

}