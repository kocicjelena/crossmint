import axios from 'axios'

const getGoalTest = async (urlstring: string)=> {
   
    try {
 
      const response = await axios({
        method: 'get',
        url: urlstring
      })
      .catch(error => {
          console.log(error.response)
      });
      console.log(response);
     const responseData = response;
       return responseData
    } catch (error) {
     console.log(error,'er');
      return null;
    }
  };
  export default getGoalTest