import React from 'react'
import ComprehensiveMigrainerNewsletterLayout from './Migranenewsletter'
import MigrainerHealthResources from './MigraneReource'
import MigrainehealthApp from './MigraneHealthApp'

const Migraine = () => {
  return (
    <div>
      <MigrainehealthApp/>
      <MigrainerHealthResources/>
      <ComprehensiveMigrainerNewsletterLayout/>
    </div>
  )
}

export default Migraine