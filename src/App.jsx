import {useState} from 'react';
function App(){
  const[name,setname]=useState('');
  const[email, setemail]=useState('');
  const[phone,setphone]=useState('');
  const[role,setrole]=useState('');
  const[application,setapplication]=useState([]);
  function createApplication(){
    if(name===''||email===''||phone===''||role===''){
      alert('please fil all details');
    }
    setapplication([...application],{name,email,phone,role});
    setname('');
    setemail('');
    setphone('');
    setrole('');
  }
  return(
    <div>
       <h1>JOB APPLICATION</h1>
       <input
       type="text"
       placeholder="enter name"
       value={name}
       onChange={(e)=>setname(e.target.value)}
       />
       <br></br>
       <input
       type="text"
       placeholder="enter email"
       value={email}
       onChange={(e)=>setemail(e.target.value)}
       />
       <br></br>
       <input
       type="number"
       placeholder="enter phonenumber"
       value={phone}
       onChange={(e)=>setphone(e.target.value)}
       />
       <br></br>
       <input
       type="text"
       placeholder="role"
       value={role}
       onChange={(e)=>setrole(e.target.value)}
       />
       <br></br>
       <button onClick ={createApplication}>add</button> 
    </div>
  )
}
export default App;