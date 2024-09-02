'use client'

import React, { useState, useMemo } from 'react'

const airports = [
  { id: 'HND', name: '羽田', lat: 35.5494, lon: 139.7798 },
  { id: 'NRT', name: '成田', lat: 35.7647, lon: 140.3864 },
  { id: 'CTS', name: '新千歳', lat: 42.7752, lon: 141.6923 },
  { id: 'FUK', name: '福岡', lat: 33.5859, lon: 130.4512 },
  { id: 'KIX', name: '関西', lat: 34.4347, lon: 135.2442 },
  { id: 'NGO', name: '中部', lat: 34.8584, lon: 136.8054 },
  { id: 'ITM', name: '伊丹', lat: 34.7855, lon: 135.4382 },
  { id: 'OKA', name: '那覇', lat: 26.1958, lon: 127.646 },
  { id: 'KOJ', name: '鹿児島', lat: 31.8034, lon: 130.7194 },
  { id: 'HIJ', name: '広島', lat: 34.4361, lon: 132.9194 },
  { id: 'SDJ', name: '仙台', lat: 38.1397, lon: 140.9176 },
  { id: 'KMQ', name: '小松', lat: 36.3946, lon: 136.4066 },
  { id: 'AXT', name: '秋田', lat: 39.6156, lon: 140.2183 },
  { id: 'AOJ', name: '青森', lat: 40.7347, lon: 140.6901 },
  { id: 'KKJ', name: '北九州', lat: 33.8459, lon: 131.0355 },
  { id: 'UKB', name: '神戸', lat: 34.6328, lon: 135.2239 },
  { id: 'OBO', name: '帯広', lat: 42.7339, lon: 143.2169 },
  { id: 'AKJ', name: '旭川', lat: 43.6708, lon: 142.4475 },
  { id: 'KMI', name: '宮崎', lat: 31.8772, lon: 131.4494 },
  { id: 'KCZ', name: '高知', lat: 33.5461, lon: 133.6697 },
  { id: 'TAK', name: '高松', lat: 34.214, lon: 134.0155 },
  { id: 'TKS', name: '徳島', lat: 34.1328, lon: 134.6069 },
  { id: 'OIT', name: '大分', lat: 33.4792, lon: 131.7364 },
  { id: 'NGS', name: '長崎', lat: 32.9169, lon: 129.9144 },
  { id: 'KMJ', name: '熊本', lat: 32.8373, lon: 130.855 },
  { id: 'MMY', name: '宮古', lat: 24.7828, lon: 125.294 },
  { id: 'ISG', name: '石垣', lat: 24.3964, lon: 124.245 },
  { id: 'WAK', name: '稚内', lat: 45.4042, lon: 141.8006 },
  { id: 'MBE', name: '紋別', lat: 44.3048, lon: 143.4043 },
  { id: 'SHB', name: '中標津', lat: 43.5775, lon: 144.9597 },
  { id: 'KUH', name: '釧路', lat: 43.041, lon: 144.1934 },
  { id: 'HKD', name: '函館', lat: 41.77, lon: 140.8227 },
  { id: 'ONJ', name: '大館能代', lat: 40.1919, lon: 140.3713 },
  { id: 'SYO', name: '庄内', lat: 38.8122, lon: 139.7872 },
  { id: 'TOY', name: '富山', lat: 36.6483, lon: 137.1875 },
  { id: 'NTQ', name: '能登', lat: 37.293, lon: 136.9614 },
  { id: 'HAC', name: '八丈島', lat: 33.115, lon: 139.785 },
  { id: 'OKJ', name: '岡山', lat: 34.7569, lon: 133.8548 },
  { id: 'IWK', name: '岩国', lat: 34.1439, lon: 132.2356 },
  { id: 'UBJ', name: '山口宇部', lat: 33.93, lon: 131.2792 },
  { id: 'TTJ', name: '鳥取', lat: 35.5306, lon: 134.167 },
  { id: 'YGJ', name: '米子', lat: 35.4922, lon: 133.2364 },
  { id: 'IWJ', name: '萩・石見', lat: 34.6764, lon: 131.79 },
  { id: 'TSJ', name: '対馬', lat: 34.2849, lon: 129.3317 },
  { id: 'FUJ', name: '福江', lat: 32.6663, lon: 128.8325 },
  { id: 'SHM', name: '南紀白浜', lat: 33.6622, lon: 135.3583 },
  { id: 'KUM', name: '屋久島', lat: 30.3866, lon: 130.6596 },
  { id: 'OIM', name: '大島', lat: 34.7825, lon: 139.36 },
  { id: 'KKX', name: '喜界島', lat: 28.3213, lon: 129.9278 },
  { id: 'OES', name: '奥尻', lat: 42.0717, lon: 139.4325 },
]

const routes = [
  // ANA
  { from: 'NRT', to: 'NGO', airline: 'ANA' },
  { from: 'NRT', to: 'ITM', airline: 'ANA' },
  { from: 'NRT', to: 'CTS', airline: 'ANA' },
  { from: 'HND', to: 'CTS', airline: 'ANA' },
  { from: 'HND', to: 'WKJ', airline: 'ANA' },
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
  { from: 'HND', to: 'HSG', airline: 'ANA' },
  { from: 'HND', to: 'OIT', airline: 'ANA' },
  { from: 'HND', to: 'KMJ', airline: 'ANA' },
  { from: 'HND', to: 'NGS', airline: 'ANA' },
  { from: 'HND', to: 'KMI', airline: 'ANA' },
  { from: 'HND', to: 'KOJ', airline: 'ANA' },
  { from: 'HND', to: 'OKA', airline: 'ANA' },
  { from: 'HND', to: 'MMY', airline: 'ANA' },
  { from: 'HND', to: 'ISG', airline: 'ANA' },
  { from: 'NGO', to: 'CTS', airline: 'ANA' },
  { from: 'NGO', to: 'MMB', airline: 'ANA' },
  { from: 'NGO', to: 'AKJ', airline: 'ANA' },
  { from: 'NGO', to: 'HKD', airline: 'ANA' },
  { from: 'NGO', to: 'AXT', airline: 'ANA' },
  { from: 'NGO', to: 'SDJ', airline: 'ANA' },
  { from: 'NGO', to: 'MYJ', airline: 'ANA' },
  { from: 'NGO', to: 'FUK', airline: 'ANA' },
  { from: 'NGO', to: 'KMI', airline: 'ANA' },
  { from: 'NGO', to: 'NGS', airline: 'ANA' },
  { from: 'NGO', to: 'KMJ', airline: 'ANA' },
  { from: 'NGO', to: 'KOJ', airline: 'ANA' },
  { from: 'NGO', to: 'OKA', airline: 'ANA' },
  { from: 'NGO', to: 'MMY', airline: 'ANA' },
  { from: 'NGO', to: 'ISG', airline: 'ANA' },
  { from: 'KIX', to: 'CTS', airline: 'ANA' },
  { from: 'KIX', to: 'OKA', airline: 'ANA' },
  { from: 'KIX', to: 'MMY', airline: 'ANA' },
  { from: 'KIX', to: 'ISG', airline: 'ANA' },
  { from: 'ITM', to: 'CTS', airline: 'ANA' },
  { from: 'ITM', to: 'HKD', airline: 'ANA' },
  { from: 'ITM', to: 'AOJ', airline: 'ANA' },
  { from: 'ITM', to: 'AXT', airline: 'ANA' },
  { from: 'ITM', to: 'SDJ', airline: 'ANA' },
  { from: 'ITM', to: 'FKS', airline: 'ANA' },
  { from: 'ITM', to: 'KIJ', airline: 'ANA' },
  { from: 'ITM', to: 'MYJ', airline: 'ANA' },
  { from: 'ITM', to: 'KCZ', airline: 'ANA' },
  { from: 'ITM', to: 'FUK', airline: 'ANA' },
  { from: 'ITM', to: 'OIT', airline: 'ANA' },
  { from: 'ITM', to: 'KMJ', airline: 'ANA' },
  { from: 'ITM', to: 'NGS', airline: 'ANA' },
  { from: 'ITM', to: 'KMI', airline: 'ANA' },
  { from: 'ITM', to: 'KOJ', airline: 'ANA' },
  { from: 'ITM', to: 'OKA', airline: 'ANA' },
  { from: 'ITM', to: 'ISG', airline: 'ANA' },
  { from: 'CTS', to: 'RIS', airline: 'ANA' },
  { from: 'CTS', to: 'WKJ', airline: 'ANA' },
  { from: 'CTS', to: 'MMB', airline: 'ANA' },
  { from: 'CTS', to: 'SHB', airline: 'ANA' },
  { from: 'CTS', to: 'KUH', airline: 'ANA' },
  { from: 'CTS', to: 'HKD', airline: 'ANA' },
  { from: 'CTS', to: 'AOJ', airline: 'ANA' },
  { from: 'CTS', to: 'AXT', airline: 'ANA' },
  { from: 'CTS', to: 'SDJ', airline: 'ANA' },
  { from: 'CTS', to: 'FKS', airline: 'ANA' },
  { from: 'CTS', to: 'FSZ', airline: 'ANA' },
  { from: 'CTS', to: 'KIJ', airline: 'ANA' },
  { from: 'CTS', to: 'TOY', airline: 'ANA' },
  { from: 'CTS', to: 'KMQ', airline: 'ANA' },
  { from: 'CTS', to: 'OKJ', airline: 'ANA' },
  { from: 'CTS', to: 'HIJ', airline: 'ANA' },
  { from: 'CTS', to: 'FUK', airline: 'ANA' },
  { from: 'FUK', to: 'KMQ', airline: 'ANA' },
  { from: 'FUK', to: 'TSJ', airline: 'ANA' },
  { from: 'FUK', to: 'FUJ', airline: 'ANA' },
  { from: 'FUK', to: 'KMI', airline: 'ANA' },
  { from: 'FUK', to: 'OKA', airline: 'ANA' },
  { from: 'OKA', to: 'SDJ', airline: 'ANA' },
  { from: 'OKA', to: 'FSZ', airline: 'ANA' },
  { from: 'OKA', to: 'HIJ', airline: 'ANA' },
  { from: 'OKA', to: 'IWK', airline: 'ANA' },
  { from: 'OKA', to: 'TAK', airline: 'ANA' },
  { from: 'OKA', to: 'MYJ', airline: 'ANA' },
  { from: 'OKA', to: 'KMJ', airline: 'ANA' },
  { from: 'OKA', to: 'MMY', airline: 'ANA' },
  { from: 'OKA', to: 'ISG', airline: 'ANA' },
  { from: 'ISG', to: 'MMY', airline: 'ANA' },

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
  { from: 'HND', to: 'MMB', airline: 'JAL' },
  { from: 'HND', to: 'RJS', airline: 'JAL' },
  { from: 'HND', to: 'HNA', airline: 'JAL' },
  { from: 'HND', to: 'KMJ', airline: 'JAL' },
  { from: 'HND', to: 'MMB', airline: 'JAL' },
  { from: 'NRT', to: 'NGO', airline: 'JAL' },
  { from: 'NRT', to: 'ITM', airline: 'JAL' },
  { from: 'NRT', to: 'CTS', airline: 'JAL' },
  { from: 'NRT', to: 'AKJ', airline: 'JAL' },
  { from: 'NRT', to: 'KUH', airline: 'JAL' },
  { from: 'NRT', to: 'OBO', airline: 'JAL' },
  { from: 'NRT', to: 'HKD', airline: 'JAL' },
  { from: 'NRT', to: 'AOJ', airline: 'JAL' },
  { from: 'NRT', to: 'MSJ', airline: 'JAL' },
  { from: 'NRT', to: 'AXT', airline: 'JAL' },
  { from: 'NRT', to: 'GAJ', airline: 'JAL' },
  { from: 'NRT', to: 'KMQ', airline: 'JAL' },
  { from: 'NRT', to: 'SHM', airline: 'JAL' },
  { from: 'NRT', to: 'OKJ', airline: 'JAL' },
  { from: 'NRT', to: 'IZO', airline: 'JAL' },
  { from: 'NRT', to: 'HIJ', airline: 'JAL' },
  { from: 'NRT', to: 'UBJ', airline: 'JAL' },
  { from: 'NRT', to: 'TKS', airline: 'JAL' },
  { from: 'NRT', to: 'TAK', airline: 'JAL' },
  { from: 'NRT', to: 'KCZ', airline: 'JAL' },
  { from: 'NRT', to: 'MYJ', airline: 'JAL' },
  { from: 'NRT', to: 'KKJ', airline: 'JAL' },
  { from: 'NRT', to: 'OIT', airline: 'JAL' },
  { from: 'NRT', to: 'KMJ', airline: 'JAL' },
  { from: 'NRT', to: 'NGS', airline: 'JAL' },
  { from: 'NRT', to: 'KMI', airline: 'JAL' },
  { from: 'NRT', to: 'KOJ', airline: 'JAL' },
  { from: 'NRT', to: 'OKA', airline: 'JAL' },
  { from: 'NRT', to: 'MMY', airline: 'JAL' },
  { from: 'NRT', to: 'ISG', airline: 'JAL' },

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

    const size =
      baseSize + (connections / maxConnections) * (maxSize - baseSize)
    // SVGの範囲を超えないようにサイズを調整

    const lat = airports.find((a) => a.id === airportId)?.lat ?? 0
    const lon = airports.find((a) => a.id === airportId)?.lon ?? 0
    // SVGの範囲内に収まるようにサイズを調整するためのマージンを追加
    const margin = 20 // マージン値は適宜調整
    // 緯度経度をSVGの座標に変換
    const x = longitudeToX(lon)
    const y = latitudeToY(lat)
    const adjustedSize = Math.min(
      size,
      x - margin,
      y - margin,
      1000 - x - margin,
      1000 - y - margin
    )
    return Math.max(baseSize, adjustedSize)
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
        <svg width="1000" height="1000" viewBox="0 0 1000 1000">
          {/* 空港 */}
          {airports.map((airport) => (
            <g
              key={airport.id}
              onClick={() => handleAirportClick(airport.id)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                // 緯度経度を使用するように変更
                cx={longitudeToX(airport.lon)}
                cy={latitudeToY(airport.lat)}
                r={getNodeSize(airport.id)}
                fill={airport.id === selectedAirport ? 'blue' : 'red'}
              />
              <text
                // 緯度経度を使用するように変更
                x={longitudeToX(airport.lon) + 10}
                y={latitudeToY(airport.lat)}
                fontSize="10"
              >
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
                x1={longitudeToX(from.lon)}
                y1={latitudeToY(from.lat)}
                x2={longitudeToX(to.lon)}
                y2={latitudeToY(to.lat)}
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

function latitudeToY(lat: number): number {
  // 日本の緯度に合わせて調整
  return 1000 - (lat - 24) * (1000 / (45 - 24)) // 北が上になるように調整
}

function longitudeToX(lon: number): number {
  // 日本の経度に合わせて調整
  return (lon - 123) * (1000 / (153 - 123)) // 東が右になるように調整
}

export default JapanAirportMap
