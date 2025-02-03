import React from 'react'
import Banner from './components/Banner'
import Programs from './components/Programs'

const HomeLayout = () => {
  return (
    <main className="bg-dots h-full w-full overflow-x-hidden">
      <Banner/>
      <Programs/>
    </main>
  )
}

export default HomeLayout