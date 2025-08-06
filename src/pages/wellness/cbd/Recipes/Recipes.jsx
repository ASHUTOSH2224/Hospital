import React, { useEffect, useState } from 'react'
import HealthlineRecipesPage from './Recipeshero'
import RecipesLandingPage from './RecipeLanding'
import RecipesNewsletterLayout from './RecipeNewslayout'
import ContactPopup from '@/component/ContactPopup'

const Recipes = () => {

      const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
    
  
    useEffect(() => {
      // setIsVisible(true)
      const timer = setTimeout(() => setIsContactPopupOpen(true), 1000);
      return () => clearTimeout(timer);
    }, [])
  
    const closeContactPopup = () => {
      setIsContactPopupOpen(false);
    };

  return (
    <div>
      <ContactPopup isOpen={true} onClose={closeContactPopup} />
            <HealthlineRecipesPage/>
            <RecipesLandingPage/>
            <RecipesNewsletterLayout/>

    </div>
  )
}

export default Recipes
