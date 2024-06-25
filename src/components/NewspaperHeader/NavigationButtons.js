export default function NavigationButtons() {
  const leftLinks = [
    { id: 0, title: 'U.S.' },
    { id: 1, title: 'World' },
    { id: 2, title: 'Business' },
    { id: 3, title: 'Arts' },
    { id: 4, title: 'Lifestyle' },
  ]
  const rightLinks = [
    { id: 100, title: 'Audio' },
    { id: 101, title: 'Games' },
    { id: 102, title: 'Cooking' },
    { id: 103, title: 'Wirecutter' },
    { id: 104, title: 'The Athletic' },
  ]
  const leftListItems = leftLinks.map(link => <li key={link.id}><a key={link.id} href="">{link.title} <svg class="css-1gq8co7" viewBox="0 0 13 8"><polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon></svg></a></li>)
  const rightListItems = rightLinks.map(link => <li key={link.id}><a key={link.id} href="">{link.title} <svg class="css-1gq8co7" viewBox="0 0 13 8"><polygon fill="#979797" points="6.5,8 0,1.4 1.4,0 6.5,5.2 11.6,0 13,1.4"></polygon></svg></a></li>)

  return (
    <div className="NavigationButtons">
      <ul>
        {leftListItems}
      </ul>
      |
      <ul>
        {rightListItems}
      </ul>
    </div>
  )
}