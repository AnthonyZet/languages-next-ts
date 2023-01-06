"use client"

import { FC } from 'react'
import Navbar from '../../../../sections/Navbar'
import { OxfordB1 } from '../../../../myData'
import Oxford from '../../../../components/card/Card'



const page:FC = () => {

  return (
    <div>
      <Navbar />
      <Oxford dataJSON={OxfordB1}/>
    </div>
  )
}

export default page