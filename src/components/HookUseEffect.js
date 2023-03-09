import React, {useState, useEffect} from 'react'

const HookUseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
      document.title = `You clicked ${count} times`
    })
  return (
    <div>
        <button onClick={()=>setCount(count+1)}> click {count} times</button>
    </div>
  )
}

export default HookUseEffect;