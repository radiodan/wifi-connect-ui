export default ({ items, onSelected }) => (
  <ul>
    {items.map(item => (
      <li key={item} onClick={() => onSelected(item)}>
        {item}
      </li>
    ))}
  </ul>
);
