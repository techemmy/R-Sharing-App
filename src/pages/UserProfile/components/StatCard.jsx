import React from 'react'

export default function StatCard({ name, description, number }) {
  return (
    <div className="transition-shadow bg-gray-50 rounded-lg hover:shadow-lg p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{name}</h3>
        <span className="text-2xl font-bold">{number.toLocaleString()}</span>
      </div>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  )
}

