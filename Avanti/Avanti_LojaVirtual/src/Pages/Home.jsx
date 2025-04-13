import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Lancamentos from '../Components/Lancamentos'
import ContainerOne from '../Components/ContainerOne'
import ContainerTwo from '../Components/ContainerTwo'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Lancamentos />
      <ContainerOne />
      <ContainerTwo />
      <ContainerOne />
      <Lancamentos />
      <Newsletter />
      <Footer />
    </div>
  )
}
