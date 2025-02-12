import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Header from "./component/Header";

const arr = [{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Pant", Offer:"30-50%Off"},{cloth:"Skirt", Offer:"10-20%Off"},{cloth:"Kurta", Offer:"30-60%Off"},{cloth:"Patloon", Offer:"11-40%Off"},{cloth:"Shoes", Offer:"40-60%Off"},{cloth:"Shirt", Offer:"10-20%Off"},
    {cloth:"UNderwear",Offer:"15-20%Off"}
  ]
  
function App(){
  return(<>
     <Header/>
      
    <div className="middle"style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
       
        {
          arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)   
        }
       
    </div>
    </>
  )
}



const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
