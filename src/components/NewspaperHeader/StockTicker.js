import { useState, useEffect } from 'react'

export default function StockTicker() {
  const stockNames = ['Nasdaq', 'S&P 500']

  const [stockTicker, setStockTicker] = useState({
    name: 'Nasdaq',
    percentageChange: -0.03,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * (stockNames.length));
      const randomPercentageChange = Math.random().toFixed(2);
      const randomSign = Math.floor(Math.random() * 2)

      if (randomSign == 0) {
        setStockTicker({
          name: stockNames[randomIndex],
          percentageChange: randomPercentageChange * -1,
        })
      }
      else {
        setStockTicker({
          name: stockNames[randomIndex],
          percentageChange: randomPercentageChange,
        })
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="StockTicker">
      <p transition="0.8s linear">{stockTicker.name}
        {stockTicker.percentageChange < 0 ? (
          <span className="TextRed">{` ${stockTicker.percentageChange}%`} <svg aria-hidden="true" width="5px" height="9px" viewBox="0 0 5 9" className="StockTickerDownArrow"><title>Group</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard"><g id="Group"><path d="M2.5,9 L2.5,3.373" id="Shape" stroke="#a61b1e"></path><polyline id="Shape" fill="#a61b1e" fill-rule="nonzero" points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"></polyline></g></g></g></svg></span>
        ) : (
          <span className="TextGreen">{` +${stockTicker.percentageChange}%`} <svg aria-hidden="true" width="5px" height="9px" viewBox="0 0 5 9" class=""><title>Group</title><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard"><g id="Group"><path d="M2.5,9 L2.5,3.373" id="Shape" stroke="#3f893b"></path><polyline id="Shape" fill="#3f893b" fill-rule="nonzero" points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"></polyline></g></g></g></svg></span>
        )}
      </p>
    </div>
  )
}