import { useState } from 'react'

import icon360 from './assets/icon360.svg'
import iconclosed from './assets/iconclosed.svg'
import sofa from './assets/sofa.png'
import sofagif from './assets/sofagif.gif'

export function App() {
  const [showImage360, setShowImage360] = useState<Boolean>(false)

  function handleShowImage() {
    setShowImage360(!showImage360)
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-[0.8125rem] max-md:flex-col">
      <div className="relative">
        <button
          className="absolute right-[3.125rem] top-[0.53rem] w-[2.0625rem] h-[1.4375rem] flex justify-center items-center"
          onClick={handleShowImage}
        >
          <img src={showImage360 ? iconclosed : icon360} />
        </button>

        <img
          className="w-[28.0625rem] h-[13.935rem]"
          src={showImage360 ? sofagif : sofa}
          alt="Imagem do Sofá Margot II - Rosé"
        />
      </div>
      <div>
        <div className="flex flex-col gap-3 mb-5">
          <span className="font-light text-[0.625rem] text-fuchsia-900">
            CÓDIGO: 42404
          </span>
          <h1 className="font-serif font-semibold text-[2rem] text-fuchsia-900">
            Sofá Margot II - Rosé
          </h1>
          <span className="font-normal text-base text-fuchsia-900 opacity-70">
            R$ 4.000
          </span>
        </div>
        <button
          className="px-4 py-2 border-[0.03125rem] 
                     border-solid border-fuchsia-900 rounded-full 
                     font-normal text-xs text-fuchsia-900 
                     transition duration-200200
                     hover:bg-fuchsia-900 hover:text-fuchsia-200"
        >
          ADICIONAR À CESTA
        </button>
      </div>
    </div>
  )
}
