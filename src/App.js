import React, { useEffect, useState } from "react";
import { useForm } from './useForm';
import { useFetch } from './useFetch';

const App = () => {
  // Store states    
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);


  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  // useEffect willl execute everytime the component render
  // useEffect(() => {
  //   console.log("render");
  // }, [values.password]);
  // //[values.password] = just execute when you change passsword
  // //[] = empty array means the function will execute just whe it mounts, when it renders at first time
  return (
    <div>
      <div>{!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <>
        {/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
        {/* {showHello && <Hello />} */}
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

// const App = () => {
//   //Set more that 1 state, it can be object
//   const [count, setCount] = useState(10)
//   const [count2, setCount2] = useState(20)
//   return (
//     <div className="App">
//       <button onClick={() => {
//         setCount(c => c + 1)
//         setCount2(c => c + 1)
//       }
//       }> + </button>
//       <div>{count}</div>
//       <div>{count2}</div>

//     </div>
//   );
// }

export default App;
