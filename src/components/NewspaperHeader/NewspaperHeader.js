import "./NewspaperHeader.css"
import ChangeLanguageButtons from "./ChangeLanguageButtons"
import NavigationButtons from "./NavigationButtons"
import NewspaperDetails from "./NewspaperDetails"
import SearchToolButton from "./SearchToolButton"
import SignUpAndLoginButtons from "./SignUpAndLoginButtons"
import StockTicker from "./StockTicker"

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
