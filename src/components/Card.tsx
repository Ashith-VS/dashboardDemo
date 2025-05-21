import React from 'react'

interface CardProps {
    title?: String,
    value?: String | number
}

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <div className="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className='text-gray-500 text-sm font-medium text-center rounded-4xl p-2 dark:text-white'>{title}</h3>
            <p className='text-2xl font-bold text-center dark:text-gray-200'>{value}</p>
        </div>
    )
}

export default Card