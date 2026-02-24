import React from 'react'

interface CoinSelectorProps {
  coins: string[]
  selected: string
  onSelect: (coin: string) => void
  loading?: boolean
}

const CoinSelector: React.FC<CoinSelectorProps> = ({
  coins,
  selected,
  onSelect,
  loading = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        Select Cryptocurrency
      </label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        disabled={loading}
        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary
                   disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {coins.map((coin) => (
          <option key={coin} value={coin}>
            {coin}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CoinSelector