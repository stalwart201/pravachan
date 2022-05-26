import React from 'react'
import { SpeakerphoneIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='font-master'>
      <div className='flex justify-between items-center py-8 px-16'>
        {/* Icon and Title */}
        <div className='flex '>
          <SpeakerphoneIcon className="h-7 w-7 text-indigo-300"/>
          <div className='ml-4 text-md'>
            Chaos Knight
          </div>
        </div>
        {/* Links */}
        <div className='flex space-x-5'>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </header>
  )
}

export default Header