import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [active, setActive] = useState(null);

  const onSelectItem = (index) => {
    setActive(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={active === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={active === index ? 'active' : ''}
              key={`${name}_${index}`}
              onClick={() => onSelectItem(index)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
