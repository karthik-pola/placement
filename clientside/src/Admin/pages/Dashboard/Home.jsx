import React, { useState } from 'react'
import AdminDashboard from '../../components/AdminDashboard.jsx'
import { Chart } from 'chart.js'
import  BarChart  from './components/BarChart.jsx'
import {UserData} from './Data.jsx'
import BarGraph from './BarGraph.jsx'
import LineGraph from './LineGraph.jsx'

const Home = () => {
  const [userData,setUserData] = useState({
    label: UserData.map((e)=>(
      e.year
    )),
    datasets: [{
      label:"Users Gained",
      data: UserData.map((e)=>(
        e.userGain
      )),
    }]
  })
  return (
    <div>
       <AdminDashboard >
        <div className='w-[800px] border-[2px]'>
          {/* <BarChart chartData = {userData} /> */}
          <BarGraph />
          <LineGraph />
          </div>
       </AdminDashboard>
    </div>
  )
}

export default Home
