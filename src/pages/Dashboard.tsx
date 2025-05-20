import { statsCards } from '../utils/constants'
import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'

const Dashboard = () => {

  return (
    <div className="p-8">
      <div className="flex justify-center items-center">
        <h1 className='text-2xl font-bold'>Dashboard</h1>
      </div>
      {/* card status */}
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className='bg-gray-500 text-sm font-medium text-center rounded-4xl p-2'>Users</h3>
          <p className='text-2xl font-bold text-center'>{statsCards.usersCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className='bg-gray-500 text-sm font-medium text-center rounded-4xl p-2'>Active Sessions</h3>
          <p className='text-2xl font-bold text-center'>{statsCards.activeSessions}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className='bg-gray-500 text-sm font-medium text-center rounded-4xl p-2'>Pending Requests</h3>
          <p className='text-2xl font-bold text-center'>{statsCards.pendingRequests}</p>
        </div>
      </div>
      {/* graphs */}
      <div className="grid grid-cols-2 gap-8">
        <div className="p-8 bg-white rounded-2xl shadow">
          <h3 className='text-center text-lg font-medium mb-4'>User Registrations Over Time </h3>
          <LineChart />
        </div>
        <div className="p-8 bg-white rounded-2xl shadow">
          <h3 className='text-center text-lg font-medium mb-4'>Active Users by Role </h3>
          <BarChart />
        </div>

      </div>
      
    </div>
  )
}

export default Dashboard