import React, { lazy } from 'react'
import { statsCards } from '../utils/constants'
const LineChart = lazy(() => import('../components/charts/LineChart'));
const BarChart = lazy(() => import('../components/charts/BarChart'));
const Card = lazy(() => import('../components/Card'));
const GraphCard = lazy(() => import('../components/GraphCard'));

const Dashboard: React.FC = () => {

  return (
    <div className="p-8">
      <div className="flex justify-center items-center">
        <h1 className='text-2xl font-bold dark:text-white'>Dashboard</h1>
      </div>
      {/* card status */}
      <div className="grid grid-cols-3 gap-4 my-8 ">
        <Card title='Users' value={statsCards.usersCount} />
        <Card title='Active Sessions' value={statsCards.activeSessions} />
        <Card title='Pending Requests' value={statsCards.pendingRequests} />
      </div>
      {/* graphs */}
      <div className="grid grid-cols-2 gap-8">
        <GraphCard title='User Registrations Over Time'>
          <LineChart />
        </GraphCard>
        <GraphCard title='Active Users by Role'>
          <BarChart />
        </GraphCard>
      </div>
    </div>
  )
}

export default Dashboard