export default function NavigationButtons() {
  const links = [
    { id: 0, title: 'U.S.' },
    { id: 0, title: 'World' },
    { id: 0, title: 'Business' },
  ]
  const listItems = links.map(link => <li><a key={link.id} href="">{link.title}</a></li>)

  return (
    <div className="NavigationButtons">
      <ul>
        {listItems}
      </ul>
    </div>
  )
}