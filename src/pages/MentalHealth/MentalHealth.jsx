import React from 'react'
import MentalHealthApp from './MentalHealthApp'
import MentalHealthResources from './MentalHealthResources'
import MentalHealthNewsletterLayout from './MentalHealthNewsletterLayout'

const MentalHealth = () => {
  return (
    <div>
      <MentalHealthApp/>
      <MentalHealthResources/>
      <MentalHealthNewsletterLayout/>
    </div>
  )
}

export default MentalHealth