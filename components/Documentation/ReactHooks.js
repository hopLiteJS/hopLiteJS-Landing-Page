import React, { useState } from 'react';
import Component1 from './ReactHooksComponents/Part1'
// export default function Example() {
//  const part1 = "sadsadassdadsaasd part 1"
//  const part2 = "sadsadassdadsaasd part 2"
//  const part3 = "sadsadassdadsaasd part 3"
//   var [count] = useState();



//   return (
//     <div>
//       <p className = "documentation"> You clicked {count} times</p>
//       <button onClick={() => count = part1}>
//        Part1
//       </button>
//       <button onClick={() => count = part2}>
//        Part2
//       </button>
//     </div>
//   );
// }

/*

this.state = {part: "", subscriber: ""}


*/
export default function Example (){
  const part1 = <Component1 />
  const part2 = "sadsadassdadsaasd part 2"

  const [part, setPart] = useState("Reuben");
  const [subscribe, setSubscribe] =useState(0)
  //[this.state, setState] = this.state = ____
  return (
    <div>
    {part}
    {subscribe}
  
    <button onClick={() => setPart(part1)}>
     Part1
    </button>
    <button onClick={() => setPart(part2)}>
    Part2
    </button>
     <button onClick={() => setSubscribe(subscribe + 1)}>
     Subscribe
     </button>
    
    </div>
  )
}