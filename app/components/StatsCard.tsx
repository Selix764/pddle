"use client"

import { Filter } from "lucide-react"

export default function StatsCard() {
  const stats = [
    { number: "63", label: "Lockere Inteligente", color: "text-[#e85a4f]" },
    { number: "47", label: "Disponibile Acum", color: "text-green-500" },
    { number: "24/7", label: "Mereu Deschis", color: "text-[#e85a4f]" },
    { number: "6", label: "Orașe", color: "text-[#e85a4f]" },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mx-4 my-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#faf2e1] rounded-xl p-4 text-center">
            <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
              {stat.number}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center mb-4">
          <Filter className="w-5 h-5 text-[#e85a4f] mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Găsește Lockerul Tău Perfect</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] bg-white transition-all duration-300">
            <option>Toate Orașele</option>
            <option>București</option>
            <option>Cluj-Napoca</option>
            <option>Timișoara</option>
            <option>Iași</option>
            <option>Constanța</option>
            <option>Brașov</option>
          </select>
          
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] bg-white transition-all duration-300">
            <option>Toate Tipurile de Locker</option>
            <option>Standard</option>
            <option>Premium</option>
            <option>Family</option>
            <option>Pro</option>
          </select>
          
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f] bg-white transition-all duration-300">
            <option>Toate Statusurile</option>
            <option>Disponibil</option>
            <option>Ocupat</option>
            <option>Mentenanță</option>
          </select>
          
          <button className="bg-[#e85a4f] hover:bg-[#d4472f] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Aplică Filtrele
          </button>
        </div>
      </div>
    </div>
  )
} 