'use client'

import React, { useState, useMemo } from 'react'

const airports = [
  { id: 'HND', name: '羽田', x: 400, y: 280 },
  { id: 'NRT', name: '成田', x: 420, y: 270 },
  { id: 'CTS', name: '新千歳', x: 420, y: 80 },
  { id: 'FUK', name: '福岡', x: 280, y: 340 },
  { id: 'KIX', name: '関西', x: 360, y: 320 },
  { id: 'NGO', name: '中部', x: 380, y: 300 },
  { id: 'ITM', name: '伊丹', x: 350, y: 310 },
  { id: 'OKA', name: '那覇', x: 280, y: 420 },
  { id: 'KOJ', name: '鹿児島', x: 300, y: 380 },
  { id: 'HIJ', name: '広島', x: 320, y: 330 },
  { id: 'SDJ', name: '仙台', x: 430, y: 220 },
  { id: 'KMQ', name: '小松', x: 370, y: 270 },
  { id: 'AXT', name: '秋田', x: 410, y: 180 },
  { id: 'AOJ', name: '青森', x: 420, y: 150 },
  { id: 'KKJ', name: '北九州', x: 290, y: 330 },
  { id: 'UKB', name: '神戸', x: 355, y: 315 },
  { id: 'OBO', name: '帯広', x: 440, y: 100 },
  { id: 'AKJ', name: '旭川', x: 430, y: 60 },
  { id: 'KMI', name: '宮崎', x: 310, y: 370 },
  { id: 'KCZ', name: '高知', x: 330, y: 350 },
  { id: 'TAK', name: '高松', x: 340, y: 330 },
  { id: 'TKS', name: '徳島', x: 350, y: 340 },
  { id: 'OIT', name: '大分', x: 300, y: 350 },
  { id: 'NGS', name: '長崎', x: 270, y: 350 },
  { id: 'KMJ', name: '熊本', x: 290, y: 360 },
  { id: 'MMY', name: '宮古', x: 260, y: 440 },
  { id: 'ISG', name: '石垣', x: 240, y: 460 },
  { id: 'WAK', name: '稚内', x: 440, y: 50 },
  { id: 'MBE', name: '紋別', x: 450, y: 80 },
  { id: 'SHB', name: '中標津', x: 460, y: 100 },
  { id: 'KUH', name: '釧路', x: 470, y: 120 },
  { id: 'HKD', name: '函館', x: 480, y: 140 },
  { id: 'ONJ', name: '大館能代', x: 490, y: 160 },
  { id: 'SYO', name: '庄内', x: 500, y: 180 },
  { id: 'TOY', name: '富山', x: 510, y: 200 },
  { id: 'NTQ', name: '能登', x: 520, y: 220 },
  { id: 'HAC', name: '八丈島', x: 530, y: 240 },
  { id: 'OKJ', name: '岡山', x: 540, y: 260 },
  { id: 'IWK', name: '岩国', x: 550, y: 280 },
  { id: 'UBJ', name: '山口宇部', x: 560, y: 300 },
  { id: 'TTJ', name: '鳥取', x: 570, y: 320 },
  { id: 'YGJ', name: '米子', x: 580, y: 340 },
  { id: 'IWJ', name: '萩・石見', x: 590, y: 360 },
  { id: 'TSJ', name: '対馬', x: 600, y: 380 },
  { id: 'FUJ', name: '福江', x: 610, y: 400 },
  { id: 'SHM', name: '南紀白浜', x: 620, y: 420 },
  { id: 'KUM', name: '屋久島', x: 630, y: 440 },
  { id: 'OIM', name: '大島', x: 640, y: 460 },
  { id: 'KKX', name: '喜界島', x: 650, y: 480 },
  { id: 'OES', name: '奥尻', x: 660, y: 500 },
]

const routes = [
  { from: 'NRT', to: 'NGO', airline: 'ANA' },
  { from: 'NRT', to: 'ITM', airline: 'ANA' },
  { from: 'NRT', to: 'CTS', airline: 'ANA' },
  { from: 'HND', to: 'CTS', airline: 'ANA' },
  { from: 'HND', to: 'WAK', airline: 'ANA' },
  { from: 'HND', to: 'MBE', airline: 'ANA' },
  { from: 'HND', to: 'SHB', airline: 'ANA' },
  { from: 'HND', to: 'KUH', airline: 'ANA' },
  { from: 'HND', to: 'HKD', airline: 'ANA' },
  { from: 'HND', to: 'ONJ', airline: 'ANA' },
  { from: 'HND', to: 'AXT', airline: 'ANA' },
  { from: 'HND', to: 'SYO', airline: 'ANA' },
  { from: 'HND', to: 'NGO', airline: 'ANA' },
  { from: 'HND', to: 'TOY', airline: 'ANA' },
  { from: 'HND', to: 'KMQ', airline: 'ANA' },
  { from: 'HND', to: 'NTQ', airline: 'ANA' },
  { from: 'HND', to: 'HAC', airline: 'ANA' },
  { from: 'HND', to: 'KIX', airline: 'ANA' },
  { from: 'HND', to: 'ITM', airline: 'ANA' },
  { from: 'HND', to: 'UKB', airline: 'ANA' },
  { from: 'HND', to: 'OKJ', airline: 'ANA' },
  { from: 'HND', to: 'HIJ', airline: 'ANA' },
  { from: 'HND', to: 'IWK', airline: 'ANA' },
  { from: 'HND', to: 'UBJ', airline: 'ANA' },
  { from: 'HND', to: 'TTJ', airline: 'ANA' },
  { from: 'HND', to: 'YGJ', airline: 'ANA' },
  { from: 'HND', to: 'IWJ', airline: 'ANA' },
  { from: 'HND', to: 'TKS', airline: 'ANA' },
  { from: 'HND', to: 'TAK', airline: 'ANA' },
  { from: 'HND', to: 'MYJ', airline: 'ANA' },
  { from: 'HND', to: 'KCZ', airline: 'ANA' },
  { from: 'HND', to: 'FUK', airline: 'ANA' },
  { from: 'HND', to: 'KKJ', airline: 'ANA' },
  { from: 'HND', to: 'TSJ', airline: 'ANA' },
  { from: 'HND', to: 'OIT', airline: 'ANA' },
  { from: 'HND', to: 'KMJ', airline: 'ANA' },
  { from: 'HND', to: 'NGS', airline: 'ANA' },
  { from: 'HND', to: 'KMI', airline: 'ANA' },
  { from: 'HND', to: 'KOJ', airline: 'ANA' },
  { from: 'HND', to: 'OKA', airline: 'ANA' },
  { from: 'HND', to: 'MMY', airline: 'ANA' },
  { from: 'HND', to: 'ISG', airline: 'ANA' },
  // 日本航空 (JAL)
  { from: 'HND', to: 'ITM', airline: 'JAL' },
  { from: 'HND', to: 'KIX', airline: 'JAL' },
  { from: 'HND', to: 'CTS', airline: 'JAL' },
  { from: 'HND', to: 'NGO', airline: 'JAL' },
  { from: 'HND', to: 'FUK', airline: 'JAL' },
  { from: 'HND', to: 'OKA', airline: 'JAL' },
  { from: 'HND', to: 'MBE', airline: 'JAL' },
  { from: 'HND', to: 'AKJ', airline: 'JAL' },
  { from: 'HND', to: 'KUH', airline: 'JAL' },
  { from: 'HND', to: 'OBO', airline: 'JAL' },
  { from: 'HND', to: 'HKD', airline: 'JAL' },
  { from: 'HND', to: 'AOJ', airline: 'JAL' },
  { from: 'HND', to: 'MSJ', airline: 'JAL' },
  { from: 'HND', to: 'AXT', airline: 'JAL' },
  { from: 'HND', to: 'GAJ', airline: 'JAL' },
  { from: 'HND', to: 'KMQ', airline: 'JAL' },
  { from: 'HND', to: 'SHM', airline: 'JAL' },
  { from: 'HND', to: 'OKJ', airline: 'JAL' },
  { from: 'HND', to: 'IZO', airline: 'JAL' },
  { from: 'HND', to: 'HIJ', airline: 'JAL' },
  { from: 'HND', to: 'UBJ', airline: 'JAL' },
  { from: 'HND', to: 'TKS', airline: 'JAL' },
  { from: 'HND', to: 'TAK', airline: 'JAL' },
  { from: 'HND', to: 'KCZ', airline: 'JAL' },
  { from: 'HND', to: 'MYJ', airline: 'JAL' },
  { from: 'HND', to: 'KKJ', airline: 'JAL' },
  { from: 'HND', to: 'OIT', airline: 'JAL' },
  { from: 'HND', to: 'KMJ', airline: 'JAL' },
  { from: 'HND', to: 'NGS', airline: 'JAL' },
  { from: 'HND', to: 'KMI', airline: 'JAL' },
  { from: 'HND', to: 'KOJ', airline: 'JAL' },
  { from: 'HND', to: 'OKA', airline: 'JAL' },
  { from: 'HND', to: 'MMY', airline: 'JAL' },
  { from: 'HND', to: 'ISG', airline: 'JAL' },

  // ピーチアビエーション (Peach)
  { from: 'KIX', to: 'CTS', airline: 'Peach' },
  { from: 'KIX', to: 'MBE', airline: 'Peach' },
  { from: 'KIX', to: 'KUH', airline: 'Peach' },
  { from: 'KIX', to: 'SDJ', airline: 'Peach' },
  { from: 'KIX', to: 'KIJ', airline: 'Peach' },
  { from: 'KIX', to: 'NRT', airline: 'Peach' },
  { from: 'KIX', to: 'FUK', airline: 'Peach' },
  { from: 'KIX', to: 'NGS', airline: 'Peach' },
  { from: 'KIX', to: 'KMI', airline: 'Peach' },
  { from: 'KIX', to: 'KOJ', airline: 'Peach' },
  { from: 'KIX', to: 'ASJ', airline: 'Peach' },
  { from: 'KIX', to: 'OKA', airline: 'Peach' },
  { from: 'KIX', to: 'ISG', airline: 'Peach' },
  { from: 'NRT', to: 'CTS', airline: 'Peach' },
  { from: 'NRT', to: 'FUK', airline: 'Peach' },
  { from: 'NRT', to: 'OIT', airline: 'Peach' },
  { from: 'NRT', to: 'ASJ', airline: 'Peach' },
  { from: 'NRT', to: 'OKA', airline: 'Peach' },
  { from: 'NRT', to: 'ISG', airline: 'Peach' },
  { from: 'CTS', to: 'OKA', airline: 'Peach' },
  { from: 'SDJ', to: 'CTS', airline: 'Peach' },
  { from: 'NGO', to: 'CTS', airline: 'Peach' },
  { from: 'NGO', to: 'SDJ', airline: 'Peach' },
  { from: 'NGO', to: 'OKA', airline: 'Peach' },
  { from: 'FUK', to: 'CTS', airline: 'Peach' },
  { from: 'FUK', to: 'OKA', airline: 'Peach' },
  { from: 'FUK', to: 'ISG', airline: 'Peach' },

  // フジドリームエアラインズ (FDA)
  { from: 'NKM', to: 'GAJ', airline: 'FDA' },
  { from: 'NKM', to: 'KIJ', airline: 'FDA' },
  { from: 'NKM', to: 'IZO', airline: 'FDA' },
  { from: 'NKM', to: 'KCZ', airline: 'FDA' },
  { from: 'NGO', to: 'IZO', airline: 'FDA' },
  { from: 'NGO', to: 'KCZ', airline: 'FDA' },
  { from: 'MMJ', to: 'UKB', airline: 'FDA' },
  { from: 'UKB', to: 'KCZ', airline: 'FDA' },
  { from: 'NKM', to: 'AOJ', airline: 'FDA' },
  { from: 'NKM', to: 'HNA', airline: 'FDA' },
  { from: 'NKM', to: 'FUK', airline: 'FDA' },
  { from: 'NKM', to: 'KMJ', airline: 'FDA' },
  { from: 'UKB', to: 'KIJ', airline: 'FDA' },
  { from: 'CTS', to: 'GAJ', airline: 'FDA' },
  { from: 'NKM', to: 'OKD', airline: 'FDA' },
  { from: 'FSZ', to: 'CTS', airline: 'FDA' },
  { from: 'FSZ', to: 'OKD', airline: 'FDA' },
  { from: 'FSZ', to: 'FUK', airline: 'FDA' },
  { from: 'FSZ', to: 'KMJ', airline: 'FDA' },
  { from: 'FSZ', to: 'KOJ', airline: 'FDA' },
  { from: 'MMJ', to: 'CTS', airline: 'FDA' },
  { from: 'MMJ', to: 'OKD', airline: 'FDA' },
  { from: 'MMJ', to: 'FUK', airline: 'FDA' },
  { from: 'UKB', to: 'AOJ', airline: 'FDA' },
  { from: 'UKB', to: 'HNA', airline: 'FDA' },
  { from: 'FUK', to: 'KIJ', airline: 'FDA' },

  // スカイマーク (Skymark)
  { from: 'HND', to: 'CTS', airline: 'Skymark' },
  { from: 'HND', to: 'UKB', airline: 'Skymark' },
  { from: 'HND', to: 'FUK', airline: 'Skymark' },
  { from: 'HND', to: 'KOJ', airline: 'Skymark' },
  { from: 'HND', to: 'OKA', airline: 'Skymark' },
  { from: 'HND', to: 'SHI', airline: 'Skymark' },
  { from: 'CTS', to: 'IBR', airline: 'Skymark' },
  { from: 'CTS', to: 'NGO', airline: 'Skymark' },
  { from: 'CTS', to: 'UKB', airline: 'Skymark' },
  { from: 'CTS', to: 'FUK', airline: 'Skymark' },
  { from: 'SDJ', to: 'UKB', airline: 'Skymark' },
  { from: 'IBR', to: 'UKB', airline: 'Skymark' },
  { from: 'IBR', to: 'FUK', airline: 'Skymark' },
  { from: 'IBR', to: 'OKA', airline: 'Skymark' },
  { from: 'NGO', to: 'KOJ', airline: 'Skymark' },
  { from: 'NGO', to: 'OKA', airline: 'Skymark' },
  { from: 'UKB', to: 'NGS', airline: 'Skymark' },
  { from: 'UKB', to: 'KOJ', airline: 'Skymark' },
  { from: 'UKB', to: 'OKA', airline: 'Skymark' },
  { from: 'UKB', to: 'SHI', airline: 'Skymark' },
  { from: 'FUK', to: 'OKA', airline: 'Skymark' },
  { from: 'FUK', to: 'SHI', airline: 'Skymark' },
  { from: 'KOJ', to: 'ASJ', airline: 'Skymark' },
  { from: 'OKA', to: 'SHI', airline: 'Skymark' },

  // ソラシドエア (Solaseed Air)
  { from: 'HND', to: 'KMI', airline: 'Solaseed Air' },
  { from: 'HND', to: 'KMJ', airline: 'Solaseed Air' },
  { from: 'HND', to: 'NGS', airline: 'Solaseed Air' },
  { from: 'HND', to: 'KOJ', airline: 'Solaseed Air' },
  { from: 'HND', to: 'OIT', airline: 'Solaseed Air' },
  { from: 'HND', to: 'OKA', airline: 'Solaseed Air' },
  { from: 'OKA', to: 'KMI', airline: 'Solaseed Air' },
  { from: 'OKA', to: 'KOJ', airline: 'Solaseed Air' },
  { from: 'OKA', to: 'UKB', airline: 'Solaseed Air' },
  { from: 'OKA', to: 'NGO', airline: 'Solaseed Air' },
  { from: 'OKA', to: 'ISG', airline: 'Solaseed Air' },
  { from: 'OKA', to: 'FUK', airline: 'Solaseed Air' },
  { from: 'NGO', to: 'KMI', airline: 'Solaseed Air' },
  { from: 'NGO', to: 'KOJ', airline: 'Solaseed Air' },

  // IBEXエアラインズ (IBEX Airlines)
  { from: 'SDJ', to: 'CTS', airline: 'IBEX' },
  { from: 'SDJ', to: 'NGO', airline: 'IBEX' },
  { from: 'SDJ', to: 'ITM', airline: 'IBEX' },
  { from: 'SDJ', to: 'HIJ', airline: 'IBEX' },
  { from: 'SDJ', to: 'FUK', airline: 'IBEX' },
  { from: 'NGO', to: 'FUK', airline: 'IBEX' },
  { from: 'NGO', to: 'OIT', airline: 'IBEX' },
  { from: 'ITM', to: 'FKS', airline: 'IBEX' },
  { from: 'ITM', to: 'KIJ', airline: 'IBEX' },
  { from: 'ITM', to: 'FUK', airline: 'IBEX' },
  { from: 'ITM', to: 'OIT', airline: 'IBEX' },
  { from: 'ITM', to: 'KOJ', airline: 'IBEX' },
  { from: 'FUK', to: 'KIJ', airline: 'IBEX' },

  // AIRDO
  { from: 'CTS', to: 'HND', airline: 'AIRDO' },
  { from: 'CTS', to: 'UKB', airline: 'AIRDO' },
  { from: 'CTS', to: 'NGO', airline: 'AIRDO' },
  { from: 'CTS', to: 'SDJ', airline: 'AIRDO' },
  { from: 'CTS', to: 'FUK', airline: 'AIRDO' },
  { from: 'HND', to: 'MMB', airline: 'AIRDO' },
  { from: 'HND', to: 'KUH', airline: 'AIRDO' },
  { from: 'HND', to: 'AKJ', airline: 'AIRDO' },
  { from: 'HND', to: 'OBO', airline: 'AIRDO' },
  { from: 'HND', to: 'HKD', airline: 'AIRDO' },
  { from: 'HKD', to: 'NGO', airline: 'AIRDO' },

  // オリエンタルエアブリッジ (ORC)
  { from: 'NGS', to: 'IKI', airline: 'ORC' },
  { from: 'NGS', to: 'FUJ', airline: 'ORC' },
  { from: 'NGS', to: 'TSJ', airline: 'ORC' },
  { from: 'FUK', to: 'FUJ', airline: 'ORC' },
  { from: 'FUK', to: 'TSJ', airline: 'ORC' },
  { from: 'FUK', to: 'KMI', airline: 'ORC' },
  { from: 'FUK', to: 'KMQ', airline: 'ORC' },
  { from: 'NGO', to: 'KMI', airline: 'ORC' },
  { from: 'NGO', to: 'AXT', airline: 'ORC' },

  // スターフライヤー (StarFlyer)
  { from: 'KKJ', to: 'HND', airline: 'StarFlyer' },
  { from: 'FUK', to: 'HND', airline: 'StarFlyer' },
  { from: 'KIX', to: 'HND', airline: 'StarFlyer' },
  { from: 'UBJ', to: 'HND', airline: 'StarFlyer' },
  { from: 'FUK', to: 'NGO', airline: 'StarFlyer' },

  // 新中央航空 (New Central Airlines)
  { from: 'CHC', to: 'OIM', airline: 'New Central' },
  { from: 'CHC', to: 'NII', airline: 'New Central' },
  { from: 'CHC', to: 'KZD', airline: 'New Central' },
  { from: 'CHC', to: 'MYE', airline: 'New Central' },

  // 天草エアライン (Amakusa Airlines)
  { from: 'AXJ', to: 'FUK', airline: 'Amakusa Airlines' },
  { from: 'AXJ', to: 'KMJ', airline: 'Amakusa Airlines' },
  { from: 'KMJ', to: 'ITM', airline: 'Amakusa Airlines' },

  // トキエア (Toki Air)
  { from: 'KIJ', to: 'OKD', airline: 'Toki Air' },
  { from: 'KIJ', to: 'SDJ', airline: 'Toki Air' },

  // 第一航空 (Daiichi Air)
  { from: 'OKA', to: 'AGJ', airline: 'Daiichi Air' },
  { from: 'ISG', to: 'HTR', airline: 'Daiichi Air' },
  { from: 'ISG', to: 'TRA', airline: 'Daiichi Air' },
]

const airlineColors: { [key: string]: string } = {
  ANA: '#00A1E9',
  JAL: '#DC0000',
  Peach: '#F5A6C3',
  Skymark: '#003DA5',
  StarFlyer: '#000000',
  'Solaseed Air': '#9ACD32',
  AIRDO: '#1E90FF',
  IBEX: '#FF6347',
}

const JapanAirportMap = () => {
  const [selectedAirport, setSelectedAirport] = useState<string | null>(null)

  const handleAirportClick = (airportId: string) => {
    setSelectedAirport(airportId === selectedAirport ? null : airportId)
  }

  const airportConnections = useMemo(() => {
    const connections: Record<string, number> = {}
    airports.forEach((airport) => {
      connections[airport.id] = routes.filter(
        (route) => route.from === airport.id || route.to === airport.id
      ).length
    })
    return connections
  }, [])

  const maxConnections = Math.max(...Object.values(airportConnections))

  const getNodeSize = (airportId: string) => {
    const baseSize = 3
    const maxSize = 15
    const connections = airportConnections[airportId]
    return baseSize + (connections / maxConnections) * (maxSize - baseSize)
  }

  const filteredRoutes = selectedAirport
    ? routes.filter(
        (route) =>
          route.from === selectedAirport || route.to === selectedAirport
      )
    : []

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">日本の空港マップと航空路線</h2>
      <p className="mb-2">
        空港をクリックすると、その空港の路線が表示されます。ノードの大きさは接続数を表しています。
      </p>
      <div className="flex">
        <svg width="500" height="500" viewBox="0 0 500 500">
          {/* 空港 */}
          {airports.map((airport) => (
            <g
              key={airport.id}
              onClick={() => handleAirportClick(airport.id)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={airport.x}
                cy={airport.y}
                r={getNodeSize(airport.id)}
                fill={airport.id === selectedAirport ? 'blue' : 'red'}
              />
              <text x={airport.x + 10} y={airport.y} fontSize="10">
                {airport.name}
              </text>
            </g>
          ))}

          {/* 航空路線 */}
          {filteredRoutes.map((route, index) => {
            const from = airports.find((a) => a.id === route.from)
            const to = airports.find((a) => a.id === route.to)
            if (!from || !to) return null
            return (
              <line
                key={index}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={airlineColors[route.airline]}
                strokeWidth="1"
                opacity="0.7"
              />
            )
          })}
        </svg>
        {selectedAirport && (
          <div className="ml-4 w-64">
            <h3 className="text-xl font-bold">
              {/* オプショナルチェイニングを使用してエラーを防ぐ */}
              {airports.find((a) => a.id === selectedAirport)?.name}空港の路線
            </h3>
            <p className="mt-2">
              接続数: {airportConnections[selectedAirport]}
            </p>
            <ul className="mt-2">
              {filteredRoutes.map((route, index) => (
                <li
                  key={index}
                  className="mb-1"
                  style={{ color: airlineColors[route.airline] }}
                >
                  {route.airline}:{' '}
                  {route.from === selectedAirport ? route.to : route.from}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default JapanAirportMap
