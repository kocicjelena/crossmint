import axios from 'axios'
import BASE_URL from '../utils/baseurl';
import Candidate from '../utils/candidate';

const getGoalMap = async ()=> {
    const urlstring = BASE_URL + '/api/map/'+ Candidate + '/goal';
    try {
      const response = await axios({
        method: 'get',
        url: urlstring
      }).then((responseData)=>responseData.data.goal)
      .catch(error => {
          console.log(error.response)
      });
        const responseData = response;
       return responseData
    } catch (error) {
     console.log(error,'er');
      return null;
    }
  };
  export default getGoalMap