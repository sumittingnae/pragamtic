import React, { useState } from 'react';
import Header from '../../component/header/header';
//import Form from 'react-bootstrap/Form';
import './career.scss'

 function Career (){
 const[name,setName]=useState("");
 const[email,setEmail]=useState("");
 const[mobile,setMobile]=useState("");
 const[description,setDescr]=useState("");
 const[file,setFile]=useState("");

 async function contact(){
    console.warn(name,email,mobile,description,file);
    const formData=new FormData();
    formData.append('file',file);
     formData.append('name',name);
      formData.append('email',email);
       formData.append('description',description);
       formData.append('mobile',mobile);
       let result = await fetch("http://localhost:8000/api/contact",{
        method:'POST',
        // headers:{
        //     "Content-type":"multipart/form-data",
        //     "Accept":"application/json"
        // },
        body:formData
       });
       console.warn(result);
       alert('submit succesffuly');
 }    
return(

        <>
        <Header/>
          <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-10'>
                        <div className='wrappe'>
                            <div className='row no-gutters'>
                                <div className='col-md-12'>
                                <div className="home-wrap w-100 p-lg-5 p-4">
                                <h1 className='text-lg-center'>Contact</h1>
                                <div className="input-field">
                                    <input type="text" placeholder='Name' id='input-field' onChange={(e)=>setName(e.target.value)}/><br/>
                                    <input type="file" id='input-field' onChange={(e)=>setFile(e.target.files[0])} /><br/>
                                    <input type="email" placeholder='Email' id='input-field' onChange={(e)=>setEmail(e.target.value)}/><br/>
                                     <input type="phone" placeholder='Mobile' id='input-field' onChange={(e)=>setMobile(e.target.value)}/><br/>
                                    <textarea type="text" placeholder='Description' id='input-field' onChange={(e)=>setDescr(e.target.value)}/><br/>
                                    <button className='btn btn-danger' onClick={contact}>Submit</button>
                               
                                </div>
                               
                                </div>
                               
                                </div>

                            </div>
                          
                        </div>

                    </div>
                    
                </div>

            </div>


         


        </>

    )

}
export default Career;