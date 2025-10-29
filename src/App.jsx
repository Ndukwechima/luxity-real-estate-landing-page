import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import PropertyGallery from './components/PropertyGallery'
import PropertyDetails from './components/PropertyDetails'
import PricingSection from './components/PricingSection'
import PromoOffer from './components/PromoOffer'
import InspectionBooking from './components/InspectionBooking'
import FloatingWhatsapp from './components/FloatingWhatsapp'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Hero />
      <Highlights />
      <PropertyGallery />
      <PropertyDetails />
      <PricingSection showPrice={false} />
      <PromoOffer />
      <InspectionBooking />
      <FloatingWhatsapp />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App
