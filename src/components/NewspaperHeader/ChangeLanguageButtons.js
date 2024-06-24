export default function ChangeLanguageButtons() {
  const links = [
    { id: 0, title: 'U.S.' },
    { id: 1, title: 'International' },
    { id: 2, title: 'Canada' },
    { id: 3, title: 'Español' },
    { id: 4, title: '中文' },
  ]
  const listItems = links.map(link => <li><a key={link.id} href="">{link.title}</a></li>)

  return (
    <div className="ChangeLanguageButtons">
      <ul>
        {listItems}
      </ul>
    </div>
  )
}