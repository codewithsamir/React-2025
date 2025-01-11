import { useEffect, useState } from "react";
import "./App.css"
import { newYearQuotes } from "./utility/quotes";
const App = ()=>{
    // first hooks 
    // useState
    // this is for  counter app 
    const [count , setcount] =  useState(1)

    // let count = 1;
    // this is for mathmatical game 
    const [getnumber, setgetnumber] = useState({
       firstnumber:0,
       secondnumber:0, 
    })
    const [sum, setsum]=useState(0)

    // this is for todo 
    const [store, setstore]= useState("")
    const [todo, settodo]= useState([])

    // this is for quotes 
    const [quotes, setquotes]= useState(newYearQuotes[0])

    // this is for digital clock 
    const [time, settime] = useState("display time")






    function counter(){
        setcount(count + 1)
        // console.log(count)
    }
    //increase
    //decrease
    //neutral

    
const addnumber = ()=>{
    // console.log(getnumber)
     const sum = Number(getnumber.firstnumber) + Number(getnumber.secondnumber)
     setsum(sum)
    //  console.log(sum)
}
    //add
    //substract
    //multiply
    //divide

    // todo app basic
    const addtodo = ()=>{
        settodo([...todo,store])
        // console.log(todo)
    }

    // quotes app 
    const getrandomquotes = ()=>{
    const randomnum = Math.floor(Math.random()*newYearQuotes.length)
    // console.log(randomnum)
    setquotes(newYearQuotes[randomnum])
    }


    // digital clock 

  
const digitalclock = (date)=>{
const hour = date.getHours().toString().padStart(2,"0")
const minute = date.getMinutes().toString().padStart(2,"0")
const second = date.getSeconds().toString().padStart(2,"0")
settime(`${hour}:${minute}:${second}`)
}


useEffect(()=>{
    // console.log(date)
    const interval = setInterval(() => {
        
    digitalclock(new Date()) 
    
}, 1000);

return ()=> clearInterval(interval)

},[])


// color changer
let alphabet = "0123456789" 


const colorchanger = ()=>{
    let getcolorname = ""

    for(let i = 0; i<6;i++){
        const alpha = Math.floor(Math.random() * alphabet.length)
      

        getcolorname +=alphabet[alpha]
      
    }
    console.log(`#${getcolorname}`)
    document.body.style.backgroundColor=`#${getcolorname}`;

}
// colorchanger()

    return (
      <>
        {/* <h1>first project counter App</h1>  */}
        <div className="app time">
            <h1>{time}</h1>
        </div>

        <div className="app colorcha">
            <button 
            onClick={colorchanger}
            >change color</button>
        </div>


        <div className="couterapp app">
            <div className="value">{count}</div>
            <button 
            onClick={counter}
            >Count</button>
        </div>

        <div className="add app">
            <input type="number" value={getnumber.firstnumber}
            onChange={(e)=>setgetnumber({...getnumber,firstnumber:e.target.value})}
            />
            <input type="number" value={getnumber.secondnumber}
             onChange={(e)=>setgetnumber({...getnumber,secondnumber:e.target.value})}
            />
            <div className="value">{sum}</div>
            <button
            onClick={addnumber}
            >add</button>
        </div>


        <div className="app">
            <input type="text"
             value={store} 
             onChange={(e)=>setstore(e.target.value)}
             />
            <button
            onClick={addtodo}
            >add</button>
            <div className="display">
{todo && todo.map((data,index)=><h2 key={index+1}>{data}</h2>)}
            </div>
        </div>

        <div className="app quotes">
            <h1>{quotes}</h1>
            <button 
            onClick={getrandomquotes}
            >next</button>
        </div>
      </>
    )

}

export default App;
