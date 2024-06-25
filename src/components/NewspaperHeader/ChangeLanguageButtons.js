export default function ChangeLanguageButtons() {
  const links = [
    { id: 0, title: 'U.S.' },
    { id: 1, title: 'INTERNATIONAL' },
    { id: 2, title: 'CANADA' },
    { id: 3, title: 'ESPAÑOL' },
    { id: 4, title: '中文' },
  ]
  const listItems = links.map(link => <li key={link.id}><a href="">{link.title}</a></li>)

  return (
    <div className="ChangeLanguageButtons">
      <ul>
        {listItems}
      </ul>
    </div>
  )
}