import "./NewspaperHeader.css"
import ChangeLanguageButtons from "./ChangeLanguageButtons"

export default function NewspaperHeader() {
  return (
    <header className="NewspaperHeader">
      <div className="NewspaperHeaderRow">
        <SearchToolButton />
        <ChangeLanguageButtons />
        <SignUpAndLoginButtons />
      </div>
      <div className="NewspaperHeaderRow">
        <NewspaperDetails />
        <h1>The New York Times</h1>
        <StockTicker />
      </div>
      <NavigationButtons />
    </header>
  )
}

function NewspaperDetails() {
  return (
    <div className="NewspaperDetails">
      <p>
        Monday, June 24, 2024
        <br />
        Today's paper
      </p>
    </div>
  )
}

function StockTicker() {
  return (
    <div className="StockTicker">
      <p>Nasdaq -></p>
    </div>
  )
}

function SearchToolButton() {
  return (
    <div className="SearchToolButton">
      <button>search</button>
    </div>
  )
}

function SignUpAndLoginButtons() {
  return (
    <div className="SignUpAndLoginButtons">
      <button>THE TIMES SALE</button>
      <button>LOG IN</button>
    </div>
  )
}

function NavigationButtons() {
  return (
    <div className="NavigationButtons">
      <ul>
        <li>
          <a href="">U.S.</a>
        </li>
        <li>
          <a href="">World</a>
        </li>
        <li>
          <a href="">Business</a>
        </li>
      </ul>
    </div>
  )
}