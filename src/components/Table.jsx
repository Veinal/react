import React from 'react'

export default function Table() {
  const Delete=()=>{
    alert("yo")
  }
  return (
    <div>
    <table className="table align-middle mb-0 bg-white">
    <thead className="bg-light">
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Age</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{width: "45px", height: "45px"}}
                className="rounded-circle"
                />
            <div className="ms-3">
              <p className="fw-bold mb-1">Veinal</p>
              <p className="text-muted mb-0">Veinal sequeira</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">7204199920</p>
          <p className="text-muted mb-0">-</p>
        </td>
        <td>
            <p className="fw-normal mb-1">21</p>
          <span className="badge badge-success rounded-pill d-inline">Active</span>
        </td>
        <td>veinalseq@gmail.com</td>
        <td>
          <div className=''>
          <button type="button" className="btn btn-success btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Edit
          </button>
          <button type="button" className="btn btn-primary btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            View
          </button>
          <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            Delete
          </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                className="rounded-circle"
                alt=""
                style={{width: "45px", height: "45px"}}
                />
            <div className="ms-3">
              <p className="fw-bold mb-1">Ramesh</p>
              <p className="text-muted mb-0">ramesh shetty</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">9876543210</p>
          {/* <p className="text-muted mb-0">Finance</p> */}
        </td>
        <td>
            <p>22</p>
          <span className="badge badge-primary rounded-pill d-inline" >Onboarding</span>
        </td>
        <td>ramesh@gmail.com</td>
        <td>
        <div className=''>
          <button type="button" className="btn btn-success btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Edit
          </button>
          <button type="button" className="btn btn-primary btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            View
          </button>
          <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            Delete
          </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                className="rounded-circle"
                alt=""
                style={{width: "45px", height: "45px"}}
                />
            <div className="ms-3">
              <p className="fw-bold mb-1">Suresh</p>
              <p className="text-muted mb-0">Suresh kumar</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">1234567890</p>
          {/* <p className="text-muted mb-0">UI/UX</p> */}
        </td>
        <td>
            <p>23</p>
          <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
        </td>
        <td>suresh123@gmail.com</td>
        <td>
        <div className=''>
          <button type="button" className="btn btn-success btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            Edit
          </button>
          <button type="button" className="btn btn-primary btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            View
          </button>
          <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold m-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            Delete
          </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
      <br />


    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button> */}
    
    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">EDIT</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
            <div class="mb-3">
              {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Name"/>
            </div>
            <div class="mb-3">
              {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Phone"/>
            </div>
            <div class="mb-3">
              {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Age"/>
            </div>
            <div class="mb-3">
              {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Email"/>
            </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    {/* for view button */}

    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">VIEW</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    {/* for delete button*/}

    <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Warning!!!</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Do you want to delete this?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NO</button>
            <button onClick={Delete} type="button" className="btn btn-primary">YES</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
