import React from 'react'
import Header from '../components/HeaderContainer/Header'
import CardList from '../components/Card/Cardlist'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import OurExpertiseBanner from '../components/OurExpertiseBanner/OurExpertiseBanner'
import OurClient from '../components/OurClient/OurClient'
import Work from '../components/Work/Work'

// import WhatWeDo from '../components/WhatWeDo/WhatWeDo'

const HomePage = () => {
  return (
    <>
      <Header />
      <CardList />
      <WhatWeDo />
      <OurExpertiseBanner />
      <OurClient />
      <Work />
    </>
  )
}

export default HomePage
