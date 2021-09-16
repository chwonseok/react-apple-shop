// ITS ABOUT ASYNC of useState
// import { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';

// export default function Practice() {
//   const [count, setCount] = useState(0);
//   const [age, setAge] = useState(20);

//   useEffect(() => {
//     if (count !== 0 && count < 3) setAge(age + 1);
//   }, [count]);

//   function ageHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <div>hey I'm {age} years old</div>
//       <div>you've clicked {count} times</div>
//       <Button onClick={ageHandler}>add age</Button>
//     </div>
//   );
// }
