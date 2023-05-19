import React, { useState,useRef } from 'react';

import { useReactToPrint } from "react-to-print";
import img  from "./logo.png";
import './Home.css'

const Home = () => {
    const componentRef = useRef()
    const [flag,setFlag] = useState(false);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    const [data,setData] = useState({uName:'',number:'',title:'',cCode:'',tName:'',tTitle:'',name:'',id:'',batch:'',dept:'',sDate:''})
  
    const handelChange = (e)=>
    {
        setData({...data,[e.target.name]:e.target.value});
    }
    const handelSubmit = (e)=>
    {
        e.preventDefault();
        setFlag(!flag);
    }
    return (
        <div className='container page-container'>
            <form action="" className='user-form' id='form' onSubmit={handelSubmit}>
                <h2 className='text-center'>Make Your Assignment Cover</h2>
                <div className="form-group">
                    <label htmlFor="">University Name</label>
                    <input type="text" required className='form-control mt-1' placeholder='University Name' name='uName' value={data.uName} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Assignment/LabReport</label>
                    <input type="text"  required className='form-control mt-1' placeholder='Assignment/LabReport-1' name='number' value={data.number} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Course Title</label>
                    <input type="text" required className='form-control mt-1' placeholder='Title' name='title' value={data.title} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Course Code</label>
                    <input type="text" required className='form-control mt-1' placeholder='cse-230' name='cCode' value={data.cCode} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Teacher Name</label>
                    <input type="text" required className='form-control mt-1' placeholder='Teacher Name' name='tName' value={data.tName} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Teacher's Occupation </label>
                    <input type="text" required className='form-control mt-1' placeholder="Teacher's Occupation" name='tTitle' value={data.tTile} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Name</label>
                    <input type="text" required className='form-control mt-1' placeholder='name' name='name' value={data.name} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">ID</label>
                    <input type="text" required className='form-control mt-1' placeholder='011201018' name='id' value={data.id} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Batch</label>
                    <input type="text" required className='form-control mt-1' placeholder='53' name='batch' value={data.batch} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Department</label>
                    <input type="text" required className='form-control mt-1' placeholder='CSE' name='dept' value={data.dept} onChange={handelChange}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">Submission Date</label>
                    <input type="date" required className='form-control mt-1' placeholder='12/12/2023' name='sDate' value={data.sDate} onChange={handelChange}/>
                </div>      
                <button className='btn btn-primary w-100 mt-4' type='submit'>Create Cover</button> 
            </form>
           {flag && <div className="page" >
                
                 {<div className="printedContainer p-4" ref={componentRef}>
                    <div className="logo-container mb-4">
                        <div className="logo-title">
                           <img src={img} alt="" className='logo'/>
                           <h1>U|O|D|A</h1>
                        </div>
                    </div>
                    <h1 className='text-center text-primary'>{data.uName}</h1>  
                    <h3 className='text-center m3-4 text-primary'>{data.number}</h3>
                    <hr className='text-primary'/>  
                    <h5 style={{paddingLeft:"120px"}}> <span className='fw-bold'>Course:</span>  {data.title}</h5> 
                    <h5 style={{paddingLeft:"120px"}}><span className='fw-bold'>Course Code:</span> {data.cCode}</h5>    

                     <h4 className='text-center mt-5 text-primary'>Submitted To</h4>
                     <div className="submitted">
                        <h5 className='fw-bold'>{data.tName}</h5>
                        <h5>{data.tTitle}</h5>
                     </div>
                     <h4 className='text-center mt-5 text-primary'>Submitted By</h4>
                     <div className="submittedBy">
                        <h5>Name: {data.name}</h5>
                        <h5>ID: {data.id}</h5>
                        <h5>Batch: {data.batch}</h5>
                        <h5>Dept: {data.dept}</h5>
                     </div>
                    <span className='mt-5 submission-date'> <span className='fw-bold'>Submission Date: </span>{data.sDate}</span>
                    <p className='mmt'>@mmt</p>
                </div>}
                <span className='btn btn-outline-danger ms-1 mb-3' onClick={()=>
                {
                    handlePrint();
                    setFlag(!flag);
                }}>print</span>
            </div>}
            
        </div>
    );
};

export default Home;