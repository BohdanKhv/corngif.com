import { useEffect, useState } from "react"
import { Splash, Nav, Footer } from "../components"

const Home = () => {

  return (
    <div>
      {/* <Splash /> */}
      <Nav />
      <div className="divider divider-minus-body"/>
      <Footer/>
    </div>
  )
}

export default Home