// import React from 'react';

// const ListCard = ({ name }) => (
//   <div className="list-card">
//     <p>{name}</p>
//   </div>
// );

// export default ListCard;


// ListCard.jsx
import React from 'react';

const ListCard = ({ items }) => {
  return (
    <div className="list-card">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
