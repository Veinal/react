// import logo from './logo.svg';
import './App.css';
import image from './dp.jpg';
import image2 from './backimg-1.jpg';
import image3 from './backimg-2.jpg';
import './color.css';
import Demo1 from './components/Demo.jsx';
import Button from './components/Button';
import TextField from './components/TextField.jsx';
import Card from './components/Card.jsx';
import Profile from './components/Profile';
import Card2 from './components/Card2'
import Bootstrap from './components/Bootstrap'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Cardmdb from './components/Cardmdb'
import Table from './components/Table'
import Arrowfunction from './components/Arrowfunction';
import Variable from './components/Variable';
import Arraymethod from './components/Arraymethod';
import Table2 from './components/Table2';
import Table3 from './components/Table3';
import Card3 from './components/Card3'
import Ternaryoperator from './components/Ternaryoperator'
import Destructuring from './components/Destructuring';
import Spreadoperator from './components/Spreadoperator';
import Import from './components/Import';
import Export from './components/Export';
import Test from './components/Test';
import Router from './components/Router'
import Props from './components/Props';
import Class from './components/Class'
import Formtable from './components/Formtable'
import Form from './components/Form'

function App() {
  let myStyle = {
    backgroundColor: "green",
    color : 'white'
  }
  let divStyles={
    align: "center",
    border: '4px solid black ',
    borderRadius: '5%',
    width : "500px",
    height : "400px",
    marginTop: "20px",
    marginLeft: "500px",
    backgroundImage: `url(${image2})`,
    backgroundSize: "500px 400px"
  }
  // let page={
  //   backgroundImage: `url(${image3})`,
  //   backgroundSize:"1720px"
  // }

  let Variable="good morning"
  let v2="good afternoon"

  let arrayobj=[
    {
      name:"name1",
      phone:8476827642,
      email:"email1@gmail.com",
      address:"Address1"
    },
    {
      name:"name2",
      phone:9847387238,
      email:"emmail2@gmail.com",
      address:"Address2"
    }
  ]

  return (
    <>
    {/* <div>
      <h1 align="center">PROFILE</h1>
    <div align="center" style={divStyles} >
      <img src={image} style={{width:"100px", marginTop:"25px"}} />
      <h1 style={{color:"red"}} >NAME: Veinal sequeira</h1>
      <h1 style={{color:"blue"}}>AGE: 21</h1>
      <h1 style={{color:"green"}}>PHONE: 9876543210</h1>
      <h1 style={{color:"pink"}}>EMAIL: veinalseq@gmail.com</h1>
    </div>
      
    </div> */}

    {/* <Demo1 /> <br />
    <Button />  <br />
    <TextField /> <br />
    <Card />  <br />
    <Profile /> <br />
    <Card2 /><br />
    <Bootstrap /> <br/>
    <Modal/><br />
    <Navbar/> <br/>
    <Cardmdb/> <br/>
    <Table/> <br/>
    <Arrowfunction/> <br/>
    <Variable /> <br/>
    <Arraymethod/> <br/>
    <Table2/> <br/>
    <Table3/> <br/>
    <Card3/> <br/>
    <Ternaryoperator/> <br/>
    <Destructuring/> <br/>
    <Spreadoperator/> <br/>
    <Import/> <br/>
    <Export/> <br/>
    <Test/> <br/> */}
    <Router/> <br/>
    {/* <Props prop_name={Variable} prop_name2={v2} arrayobj={arrayobj}/> <br/>
    <Class /> <br/> */}
    {/* <Formtable arrayobj={arrayobj}/> <br/> */}
    {/* <Form /> <br/> */}
    <br/>
    </>
  );
}

export default App;
