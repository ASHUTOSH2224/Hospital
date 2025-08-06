import DigestiveHealthApp from '@/pages/DigestiveHealth/DigestiveHealthApp'
import React from 'react'

import CBDLayout from './Cbdhero'
import WellnessLandingPage from './Cbdlanding'
import CBDNewsletterLayout from './CBDnewsLetterLayout'

const Cbd = () => {
  return (
    <div>
        <CBDLayout/>
        <WellnessLandingPage/>
        <CBDNewsletterLayout/>
    </div>
  )
}

export default Cbd
