import React, { useEffect, useRef, useState } from "react";
import { addPassword, deletePassword, getPassword, listPasswords, updatePassword } from "../service/PasswordService";
import { useNavigate, useParams } from "react-router-dom";
const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();

  useEffect(()=>{
    listPasswords().then((response)=>{
      setpasswords(response.data);
    }).catch(error =>{
      console.log(error);
    })
  })

  const [passwords,setpasswords] = useState([]);
  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src = "icons/hidden.png";
      
    }
  };

  const [url,setUrl]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const navigator = useNavigate();
  
  function saveOrUpdatePassword(e){
    e.preventDefault();
    const pass = {url,username,password};
    
    if(id){
      updatePassword(id,pass).then((response)=>{
        console.log(response.data);
        navigator("/passwords");
    }).catch(error=>{
      console.log(error);
    })
    }else{
      addPassword(pass).then((response)=>{
        console.log(response.data);
        navigator("/passwords");
    }).catch(error=>{
      console.log(error);
    })}}; 

  function editPassword(id){
    navigator(`/edit-password/${id}`)
  }

  const {id} = useParams();
  useEffect(()=>{
    if(id){
      getPassword(id).then((response)=>{
        setUrl(response.data.url);
        setUsername(response.data.username);
        setPassword(response.data.password);
      }).catch(error=>{
        console.log(error);
      })
    }
  },[id])

  function removePassword(id){
    deletePassword(id).then((response)=>{
      console.log(response.data);
  }).catch(error=>{
    console.log(error);
 })};

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="p-2 pt-3 md:mycontainer mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your Own Password Manager
        </p>
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            onChange={(e)=>setUrl(e.target.value)}
            type="text"
            value={url}
            name="url"
            id="url"
          />
          <div className="flex flex-col md:flex-row w-full justify-center gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              onChange={(e)=>setUsername(e.target.value)}
              type="text"
              value={username}
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                value={password}
                name="password"
                id="password"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="icons/eye.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>
          <button className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full gap-2 px-8 py-2 w-fit border border-green-900"
          onClick={saveOrUpdatePassword}>
            
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwords.length===0 && <div>No passwords to show</div>}
          {passwords.length!=0 && <table className="table-auto w-full ">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {
                passwords.map(password =>
                  <tr key={password.id}>
                      <td className="text-center py-2 w-32 border border-white">{password.url}</td>
                      <td className="text-center py-2 w-32 border border-white">{password.username}</td>
                      <td className="text-center py-2 w-32 border border-white">{password.password}</td>
                      <td className="text-center py-2 w-32 border border-white">
                          <button className='max-sm:px-0 sm:px-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={()=>editPassword(password.id)}>Edit</button>
                          <button className='max-sm:px-0 max-sm:ml-1 sm:px-1 sm:ml-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4  border border-red-500 hover:border-transparent rounded ml-6 ' onClick={()=>removePassword(password.id)}>Delete</button>
                      </td>
                  </tr>)
              }
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
