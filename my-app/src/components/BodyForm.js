import React from 'react'
import { useState , useEffect } from 'react'
import Tables from './Tables';

export default function BodyForm() {
    
    // const [val, setval] = useState("");
    const [name, setname] = useState("");
    const [app_no, setAppNo] = useState("")
    const [mob_no, setMobNo] = useState("")
    const [pol_no, setPolNo] = useState("")
    const [pan, setPan] = useState("")
    // const [ress, setress] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault(); 
        setname('');
        setAppNo('');
        setMobNo('');
        setPan('');
        setPolNo('');
        console.log(name + app_no)

    }

    // useEffect(() => {
    //     const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
    //     fetch(apiUrl)
    //       .then(results => results.json())
    //       .then(data => {
    //         console.log(data)
    //         // console.log(data[0].node_id)
    //         console.log(data[0].name)
    //         // setress(data)
    //         // setName(data[0].name)
    //       });
    //   },[]);


  return (
    <div className='container'>
         <div className="row" id="top_box" >
            <form id="form" action="" onSubmit={handleSubmit} >
                <div className='row'>
                    <div className="col"><label htmlFor="values" id="label">Policy Number:</label></div>
                    {/* <div className="col"><select name="val" id="fields"  className='form-control' value={val} onChange={(e) => setval(e.target.value)}>
                    <option >--Select--</option>
                    <option value="field1">Policy Number</option>
                    <option value="field2">Mobile Number</option>
                    <option value="field3">PAN Number</option>
                    <option value="field4">Name</option>
                    <option value="field5">field5</option>
                </select></div> */}
                    <div className="col"><input type="text" name="inputt" id="enter_data" className='form-control' placeholder='Please Enter the Policy Number..' value={pol_no}  onChange={(e) => setPolNo(e.target.value)} /></div>
                
                </div>

                <div className='row'>
                    <div className="col"><label htmlFor="values" id="label">Name:</label></div>
                   
                    <div className="col"><input type="text" name="inputt" id="enter_data" className='form-control' placeholder='Please Enter the Name..' value={name}  onChange={(e) => setname(e.target.value)} /></div>
                
                </div>

                <div className='row'>
                    <div className="col"><label htmlFor="values" id="label">Mobile Number:</label></div>
                 
                    <div className="col"><input type="text" name="inputt" id="enter_data" className='form-control' placeholder='Please Enter the Mobile Number..' value={mob_no}  onChange={(e) => setMobNo(e.target.value)} /></div>
                
                </div>

                <div className='row'>
                    <div className="col"><label htmlFor="values" id="label">PAN:</label></div>
                  
                    <div className="col"><input type="text" name="inputt" id="enter_data" className='form-control' placeholder='Please Enter the PAN..' value={pan}  onChange={(e) => setPan(e.target.value)} /></div>
                
                </div>

                <div className='row'>
                    <div className="col"><label htmlFor="values" id="label">Application Number:</label></div>
                   
                    <div className="col"><input type="text" name="inputt" id="enter_data" className='form-control' placeholder='Please Enter the Application Number..' value={app_no}  onChange={(e) => setAppNo(e.target.value)} /></div>
                
                </div>
                <div className="col"><button type='submit' id='submit' className='form-control btn btn-primary'>Submit</button> </div>
            </form>
         </div>
    </div>

//     <section class="d-flex align-items-center flex-column">
 
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="#">Brand</a>

//       <button
//         class="navbar-toggler"
//         type="button"
//         data-mdb-toggle="collapse"
//         data-mdb-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i class="fas fa-bars"></i>
//       </button>

     
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item dropdown">
//             <a
//               class="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdown"
//               role="button"
//               data-mdb-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a class="dropdown-item" href="#">Action</a></li>
//               <li><a class="dropdown-item" href="#">Another action</a></li>
//               <li><hr class="dropdown-divider" /></li>
//               <li><a class="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//         </ul>
     
//          <div class="input-group ps-5">
//           <div id="navbar-search-autocomplete" class="form-outline">
//             <input type="search" id="form1" class="form-control" />
//             <label class="form-label" for="form1">Search</label>
//           </div>
//           <button type="button" class="btn btn-primary">
//             <i class="fas fa-search"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   </nav>
// </section>


  )
}
