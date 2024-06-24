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
        <img src="./logo.png" alt="The New York Times" />
        <StockTicker />
      </div>
      <NavigationButtons />
    </header>
  )
}
