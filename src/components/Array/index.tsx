import React from 'react';

const data = [
  {
    id: 1,
    name: 'John',
    age: 23,
    active: true
  },
  {
    id: 2,
    name: 'Mary',
    age: 40,
    active: true
  },
  {
    id: 3,
    name: 'Tony',
    age: 56,
    active: true
  },
  {
    id: 4,
    name: 'Susan',
    age: 12,
    active: true
  },
  {
    id: 5,
    name: 'Carl',
    age: 18,
    active: true
  },
  {
    id: 6,
    name: 'Jasmine',
    age: 27,
    active: false
  }
]

// Excercise: Find the best array methods to solve each problem. 
// Do not repeat array methods (one method for each excercise)
function Array() {
  // Execute 1 console log for each user displaying all user information
  const mostrarData = (item: any) => {
    console.log(item);
  };
  data.forEach(mostrarData);
  // data.forEach(console.log);

  // const item = data.find(item => item.age === 40);

  return (
    <div>
      <h1>User Information:</h1>
      <div>
        <h2>List of all user ages:</h2>
        {/* List all user ages, one below the other */}
        {data.map(item => <p key={item.id}>{item.age}</p> )}
      </div>
      <div>
        <h2>Are all users active?</h2>
        <span>{data.every(item => item.active) ? 'YES' : 'NO'}</span>
      </div>
      <div>
        <h2>Is there a minor?</h2>
        <span>{data.some(item => item.age < 18) ? 'YES' : 'NO'}</span>
      </div>
      <div>
        <h2>User whose age is 40:</h2>
        {/* <span>{item?.name}</span> */}
        <span>{data.find(item => item.age === 40)?.name}</span>
      </div>
      <div>
        <h2>All users with age greater than 18</h2>
        {console.log(data.filter(item => item.age > 18))}
        <ul>{data.filter(item => item.age > 18).map(item => <li key={item.id}>{item.name}</li>)}</ul>
      </div>
      <div>
        <h2>All user names separated by commas</h2>
        {/* e.g.: John,Mary,Tony... */}
        {/* {console.log(data.reduce((acc, item) => acc.concat(item.name), ['']).join(','))} */}
        {/* {console.log(data.map(item => item.name.toString()).join(','))} */}
        <span>{data.map(item => item.name.toString()).join(',')}</span>
      </div>
      <div>
        <h2>Average age:</h2>
        <span>{((data.reduce((suma, item) => suma + item.age, 0)) / data.length).toFixed()}</span>
      </div>
    </div>
  )
}

export default Array;