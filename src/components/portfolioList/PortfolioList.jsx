import './portfolioList.scss'

export default function PortfolioList({ title, id, active, setSelected }) {
  return (
    <li
      className={active ? 'portfolio-list active' : 'portfolio-list'}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}
