import FormRC from "../Form/FormRC";
import Form from "../Form/Form";
import FormSoloon from "../Form/FormSoloon";
import FormComet from "../Form/FormComet";
import {deletePolyanets, postPolyanets, postSoloons, deleteSoloons, deleteComeths, postComeths } from "../../libs/postAPI";

const TestingAPI = () => {
    
  
  const drowPolyanet=async(data:any)=>{
    await postPolyanets(data)     
  }
  const delPolyanet=async(data:any)=>{
    await deletePolyanets(data)    
  }

  const createSoloon=async(data:any)=>{
    await postSoloons(data)     
  }
  const deleteSoloon=async(data:any)=>{
    await deleteSoloons(data)    
  }

  const createComet=async(data:any)=>{
    await postComeths(data)     
  }
  const deleteComet=async(data:any)=>{
    await deleteComeths(data)      
  }
   
    return (
      <> 
        <br />
        Create Poly:
        <FormRC handleForm={drowPolyanet}/> 
        Delete Poly:
        <FormRC handleForm={delPolyanet}/> 
        <br />
        Create Soloon:
        <FormSoloon handleForm={createSoloon}/> 
        Delete Soloon:
        <FormSoloon handleForm={deleteSoloon}/> 
        <br />
        Create Comet:
        <FormComet handleForm={createComet} /> 
        Delete Comet:
        <FormComet handleForm={deleteComet}/> 
        <br />
      </>
    )
  }
  export default TestingAPI;
