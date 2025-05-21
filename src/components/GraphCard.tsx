import React from 'react'

interface GraphCardProps {
    title?: string
    children?: React.ReactNode
}

const GraphCard: React.FC<GraphCardProps> = ({ title, children }) => {
    return (
        <div className="p-8 bg-white  dark:bg-gray-800 rounded-2xl shadow">
            <h3 className='text-center text-lg font-medium mb-4 dark:text-gray-300'>{title}</h3>
            {children}
        </div>
    )
}

export default GraphCard