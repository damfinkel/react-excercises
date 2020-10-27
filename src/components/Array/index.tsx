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

  return (
    <div>
      <h1>User Information:</h1>
      <div>
        <h2>List of all user ages:</h2>
        {/* List all user ages, one below the other */}
      </div>
      <div>
        <h2>Are all users active?</h2>
        <span>{/* Show "yes" if all users are active, "no" if there isn't  */}</span>
      </div>
      <div>
        <h2>Is there a minor?</h2>
        <span>{/* Show "yes" if any user is a minor (<18), "no" if there isn't any minor. Do not use "find". */}</span>
      </div>
      <div>
        <h2>User whose age is 40:</h2>
        <span>{/* Show the name of the user that is 40*/}</span>
      </div>
      <div>
        <h2>All users with age greater than 18</h2>
        {/* Show all the names of the users with age greater than 18*/}
      </div>
      <div>
        <h2>All user names separated by commas</h2>
        {/* e.g.: John,Mary,Tony... */}
      </div>
      <div>
        <h2>Average age:</h2>
        <span>{/* Display average age: */}</span>
      </div>
    </div>
  )
}

export default Array;