import React,{ Component } from "react";
// import { Component } from "react";
// import data from "./data";
// import "./component/prod.css";
// class ProductList extends Component{
//     constructor(){
//         super();
//         this.state={
//             //message:"Default Message",
//              productList:data
//         }


        
//     }
//     showMessage = ()=>{
//         this.setState({message:document.getElementById("data").value});
        
//        }
//     Editfild=()=>{
//        alert("Heloo.....");
//         let m=document.getElementById("main");
//         m.className="d-none";

//         let fobj=document.getElementById("form");
//         fobj.className="d-block";
//         //  let mm=document.createElement("div");
//         //  mm.setAttribute("class","container mt-5");
//         // //  mm.innerText="heloo i am ";
//         // //  mm.setAttribute("style","background-color:red");
//         //  m.appendChild(mm);
     

          
       
//       }  
       
//     deleteMessage(index){
//         const update=[...this.state.productList];
//         update.splice(index,1);
        
//         this.setState({productList:update});
     
                    
//     }


//     render(){
//         // let productList=data;
//         const {productList}=this.state;

//       return (<> 
//       <div id="main">
//                <h1>Product List Component</h1>
//                <hr/>
//                <table className="table">
//                 <thead>
//                   <tr>
//                     <th>S.no</th>
//                     <th>Title</th>
//                     <th>Image</th>
//                     <th>Brand</th>
//                     <th>Price</th>
//                     <th>Edit</th>
//                     <th id="data">Delete</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {
//                     productList.map((product,index)=><tr key="{index}">
//                       <td>{index+1}</td>
//                       <td>{product.title}</td>
//                       <td><img src={product.thumbnail} width='100px' height='100px'/></td>
//                       <td>{product.brand}</td>
//                       <td>{product.price}</td>
//                       <td>{product.Edit}</td>
//                       <td><button className="btn btn-primary" onClick={()=>this.Editfild()}>Edit</button></td>
//                       <td><button className="btn btn-danger" onClick={()=>this.deleteMessage(index)}>Delete</button></td>
//                     </tr>)
//                   }
//                 </tbody>
//                </table>



//   </div >

// <div id="form" className="d-none">
//                <div class="login-box">
 
//  <form >
//    <div class="user-box">
// <input type="text" name="" required=""/>
// <label>Username</label>
// </div>
// <div class="user-box">
// <input type="password" name="" required=""/>
// <label>Password</label>
// </div><center>
// <a href="#">
// SEND
// <span></span>
// </a></center>
// </form>
// </div>
// </div>
// </>

//             )
//     }
// }
// export default ProductList;



