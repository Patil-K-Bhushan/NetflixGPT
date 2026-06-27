import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGIN_BACKGROUND_IMAGE } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={LOGIN_BACKGROUND_IMAGE} alt='Backgrounf Imge'/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage