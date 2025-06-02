// // import React, { useState, useEffect } from 'react';

// // const ListCard = ({ list, onChange, editable }) => {

// //   const handleNameChange = (e) => {
// //     onChange({ ...list, name: e.target.value });
// //   };

// //   const handleItemChange = (index, value) => {
// //     const newItems = [...list.items];
// //     newItems[index] = value;
// //     onChange({ ...list, items: newItems });
// //   };

// //   const handleAddItem = () => {
// //     onChange({ ...list, items: [...list.items, ''] });
// //   };

// //   const handleRemoveItem = (index) => {
// //     const newItems = list.items.filter((_, i) => i !== index);
// //     onChange({ ...list, items: newItems });
// //   };

// //   return (
// //     <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', maxHeight: '300px', overflowY: 'auto' }}>
// //       {editable ? (
// //         <input 
// //           type="text" 
// //           value={list.name} 
// //           onChange={handleNameChange} 
// //           style={{ fontSize: '18px', fontWeight: 'bold', width: '100%', marginBottom: '10px' }} 
// //         />
// //       ) : (
// //         <h4>{list.name}</h4>
// //       )}
      
// //       <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
// //         {list.items.map((item, index) => (
// //           <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
// //             {editable ? (
// //               <>
// //                 <input 
// //                   type="text" 
// //                   value={item} 
// //                   onChange={(e) => handleItemChange(index, e.target.value)} 
// //                   style={{ flex: 1, marginRight: '8px' }} 
// //                 />
// //                 <button onClick={() => handleRemoveItem(index)}>Remove</button>
// //               </>
// //             ) : (
// //               <span>{item}</span>
// //             )}
// //           </li>
// //         ))}
// //       </ul>

// //       {editable && <button onClick={handleAddItem}>Add Item</button>}
// //     </div>
// //   );
// // };

// // const App = () => {
// //   const [lists, setLists] = useState([]);

// //   useEffect(() => {
// //     // Fetch posts for first list (10 items)
// //     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
// //       .then(res => res.json())
// //       .then(data1 => {
// //         const list1 = {
// //           id: 1,
// //           name: 'List 1 - Posts',
// //           items: data1.map(post => post.title),
// //           editable: false,
// //         };

// //         // Fetch todos for second list (10 items)
// //         fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
// //           .then(res => res.json())
// //           .then(data2 => {
// //             const list2 = {
// //               id: 2,
// //               name: 'List 2 - Todos',
// //               items: data2.map(todo => todo.title),
// //               editable: false,
// //             };
// //             setLists([list1, list2]);
// //           });
// //       });
// //   }, []);

// //   const addNewList = () => {
// //     const newListId = lists.length + 1;
// //     const newList = {
// //       id: newListId,
// //       name: `New List ${newListId}`,
// //       items: [''],
// //       editable: true,
// //     };
// //     setLists([...lists, newList]);
// //   };

// //   const updateList = (updatedList) => {
// //     setLists(lists.map(list => (list.id === updatedList.id ? updatedList : list)));
// //   };

// //   return (
// //     <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
// //       {/* <h2>Lists from Public API + Editable New Lists</h2> */}
// //         <div style={{ textAlign: 'center', marginBottom: '20px' }}>
// //       <button onClick={addNewList}style={{
// //     display: 'block',
// //     margin: '0 auto 20px auto',
// //     backgroundColor: '#007BFF', // Bootstrap blue
// //     color: 'white',
// //     border: 'none',
// //     padding: '10px 20px',
// //     borderRadius: '5px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// //   }}>Create New List</button>
// //     </div>
// //       {/* <button onClick={addNewList} style={{ marginBottom: '20px' }}>Create New List</button> */}

// //       {lists.map(list => (
// //         <ListCard 
// //           key={list.id} 
// //           list={list} 
// //           editable={list.editable} 
// //           onChange={updateList} 
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from "react";

// const ListCard = ({ name, items }) => (
//   <div
//     style={{
//       border: "1px solid #ccc",
//       margin: "10px",
//       padding: "10px",
//       maxHeight: "150px",
//       overflowY: "auto",
//       backgroundColor: "#e6f0ff", // light blue background for list
//       borderRadius: "8px",
//     }}
//   >
//     <h4>{name}</h4>
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

// const App = () => {
//   const [lists, setLists] = useState([
//     { id: 1, name: "List 1", items: [] },
//     { id: 2, name: "List 2", items: [] },
//   ]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch 20 posts from jsonplaceholder
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts?_limit=20"
//         );
//         const data = await response.json();

//         // Split first 10 for list 1, next 10 for list 2
//         setLists([
//           {
//             id: 1,
//             name: "List 1",
//             items: data.slice(0, 10).map((post) => post.title),
//           },
//           {
//             id: 2,
//             name: "List 2",
//             items: data.slice(10, 20).map((post) => post.title),
//           },
//         ]);
//       } catch (error) {
//         console.error("Failed to fetch posts:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const addNewList = () => {
//     const newListId = lists.length + 1;
//     setLists([
//       ...lists,
//       { id: newListId, name: `List ${newListId}`, items: [] },
//     ]);
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
//       <button
//         onClick={addNewList}
//         style={{
//           backgroundColor: "#007BFF", // blue color
//           color: "white",
//           border: "none",
//           padding: "10px 20px",
//           borderRadius: "5px",
//           cursor: "pointer",
//           fontSize: "16px",
//           marginBottom: "20px",
//           display: "block",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         Create New List
//       </button>

//       {lists.map((list) => (
//         <ListCard key={list.id} name={list.name} items={list.items} />
//       ))}
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";

const ListCard = ({ name, items, editable, onAddItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleAdd = () => {
    if (newItem.trim() === "") return;
    onAddItem(newItem.trim());
    setNewItem("");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        maxHeight: "200px",
        overflowY: "auto",
        backgroundColor: "#e6f0ff",
        borderRadius: "8px",
        textAlign: "left",
      }}
    >
      <h4>{name}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {editable && (
        <div style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
            style={{
              padding: "5px",
              width: "70%",
              marginRight: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Item
          </button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [lists, setLists] = useState([
    { id: 1, name: "List 1", items: [] },
    { id: 2, name: "List 2", items: [] },
  ]);
  const [editableListId, setEditableListId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=20"
        );
        const data = await response.json();

        setLists([
          {
            id: 1,
            name: "List 1",
            items: data.slice(0, 10).map((post) => post.title),
          },
          {
            id: 2,
            name: "List 2",
            items: data.slice(10, 20).map((post) => post.title),
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, []);

  const addNewList = () => {
    const newListId = lists.length + 1;
    setLists([
      ...lists,
      { id: newListId, name: `List ${newListId}`, items: [] },
    ]);
    setEditableListId(newListId);
  };

  const handleAddItem = (listId, newItem) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, items: [...list.items, newItem] }
          : list
      )
    );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
      <button
        onClick={addNewList}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Create New List
      </button>

      {lists.map((list) => (
        <ListCard
          key={list.id}
          name={list.name}
          items={list.items}
          editable={list.id === editableListId}
          onAddItem={(item) => handleAddItem(list.id, item)}
        />
      ))}
    </div>
  );
};

export default App;
