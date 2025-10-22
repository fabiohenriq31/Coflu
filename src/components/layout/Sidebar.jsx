import { Zap } from 'lucide-react'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r
     border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10'>
      {/* Logo */}

        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className='flex items-center space-x-3'>
            <div>
              <img src="/src/assets/logo.svg" className='h-40 w-40 ' />
            </div>

            {/* Conditional Rendering */}
          </div>
            
        </div>

     </div>
  )
}
