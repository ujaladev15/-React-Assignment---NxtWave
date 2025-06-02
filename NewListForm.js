// import React, { useState } from 'react';

// const NewListForm = ({ onClose, onSubmit }) => {
//   const [listName, setListName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (listName.trim() !== '') {
//       onSubmit(listName);
//     }
//   };

//   return (
//     <div className="form-overlay">
//       <form className="new-list-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter list name"
//           value={listName}
//           onChange={(e) => setListName(e.target.value)}
//         />
//         <div className="form-buttons">
//           <button type="submit">Create</button>
//           <button type="button" onClick={onClose}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewListForm;



import React, { useState } from 'react';

const NewListForm = ({ onClose, onSubmit }) => {
  const [listName, setListName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listName.trim() === '') {
      setError('List name cannot be empty');
      return;
    }
    setError('');
    onSubmit(listName);
  };

  return (
    <div className="form-overlay">
      <form className="new-list-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter list name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        {error && <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>}
        <div className="form-buttons">
          <button type="submit">Create</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewListForm;
