import React from 'react'
import img from '../veinal.jpg'
export default function Table3() {
    let array=[{
        name:"Veinal",
        phone:7204199920,
        email:"veinalseq@gmail.com",
        address:"mangalore",
        image:img
    },
    {
        name:"Ramesh",
        phone:9876543210,
        email:"ramesh@gmail.com",
        address:"bangalore"
    },
    {
        name:"Suresh",
        phone:1234567890,
        email:"suresh@gmail.com",
        address:"dubai"
    }]
    const Delete3=(name)=>{
        // alert('deleted  '+name)
        alert(`${name}'s data deleted`)
    }
  return (
    <div>
        <table class="table">
        <thead>
            <tr>
            <th>Sl no</th>
            <th>Pic</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {array.map((item,index)=>{
                return(
                    <>
                    <tr>
                        <td>{index +1}</td>
                        <img src={item.image} alt="no image found" style={{width:"60px"}}></img>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>
                            <button className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target={`#editmodal${index}`}>Edit </button>
                            <button className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target={`#viewModal${index}`}>View </button>
                            <button className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={`#deleteModal${index}`}>Delete</button>
                        </td>
                    </tr>
                    {/*Edit Modal*/}

                    <div class="modal fade" id={`editmodal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput" value={item.name}/>
                            </div>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput2" value={item.phone}/>
                            </div>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput2" value={item.email}/>
                            </div>
                            <div class="mb-3">
                            {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                            <input type="text" class="form-control" id="formGroupExampleInput2" value={item.address}/>
                            </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/*view modal*/}
                    <div class="modal fade" id={`viewModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src={item.image} alt="no image found" style={{width:"300px", height:"300px"}}/>
                            <p><strong>Name:</strong>{item.name}</p>
                            <p><strong>Phone:</strong>{item.phone}</p>
                            <p><strong>Email:</strong>{item.email}</p>
                            <p><strong>Address:</strong>{item.address}</p>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/*delete modal*/}
                    <div class="modal fade" id={`deleteModal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        Do you want to delete {item.name}'s data?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={()=>Delete3(item.name)} type="button" class="btn btn-primary">Delete</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </>
                )
            })}

            
        </tbody>
        </table>

        
    </div>
  )
}
