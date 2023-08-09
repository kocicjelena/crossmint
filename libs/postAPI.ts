import axios from 'axios'
import BASE_URL from '../utils/baseurl';
import Candidate from '../utils/candidate';


import axiosRetry from 'axios-retry';

let retryCount = 0;

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    const delay = 1000 * Math.pow(2, retryCount);
    return delay;
  },
  retryCondition: (error) => {
   
    return error.response?.status === 429;
  }
});


export const postPolyanets = async (data:any)=> {
    const urlstring = BASE_URL + '/api/polyanets';
    const postData = {
      row: data.row,
      column: data.column,
      candidateId: Candidate,
    }
    try {
    const response = await axios.post(
    urlstring,
    postData,
        {
        headers: {
            'Content-Type': 'application/json'
        }
    })
   
    let respond
    if (response.status === 200) {respond =response}
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return respond;
  } catch (error: Error | any) {
    console.log(error);
    return null;
  }

}


export const deletePolyanets = async (data:any)=> {
    const urlstring = BASE_URL + '/api/polyanets';
    
    const delP = {
      row: data.row,
      column: data.column,
      candidateId: Candidate
    }

    try {
    const response = await axios.delete(
    urlstring,
    {data: delP}
    )
    let respond
    if (response.status === 200) {respond =response}
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return respond;
  } catch (error: Error | any) {
    console.log(error);
    return null;
  }

}

export const postSoloons = async (data:any)=> {
    const urlstring = BASE_URL + '/api/soloons';
    const postData = {
      row: data.row,
      column: data.column,
      candidateId: Candidate,
      color: data.color
    }
    try {
    const response = await axios.post(
    urlstring,
    postData,
        {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    
    let respond
    if (response.status === 200) {respond =response}
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return respond;
    
  } catch (error: Error | any) {
    console.log(error);
    return null;
  }

}


export const deleteSoloons = async (data:any)=> {
    const urlstring = BASE_URL + '/api/soloons';
    
    const delS = {
      row: data.row,
      column: data.column,
      candidateId: Candidate,
      color: data.color
    }
    try {

    const response = await axios.delete(
    urlstring,
    {data: delS}
    )
    let respond
    if (response.status === 200) {respond =response}
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return respond;
  } catch (error: Error | any) {
    console.log(error);
    return null;
  }

}

export const postComeths = async (data:any)=> {
    const urlstring = BASE_URL + '/api/comeths';
    const postData = {
      row: data.row,
      column: data.column,
      candidateId: Candidate,
      direction: data.direction
    }
    try {
    const response = await axios.post(
    urlstring,
    postData,
        {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let respond
    if (response.status === 200) {respond =response}
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return respond;
  } catch (error: Error | any) {
    console.log(error);
    return null;
  }

}


export const deleteComeths = async (data:any)=> {
    const urlstring = BASE_URL + '/api/comeths';
    
    const delC = {
      row: data.row,
      column: data.column,
      candidateId: Candidate,
      direction: data.direction
    }
    try {

    const response = await axios.delete(
    urlstring,
    {data:delC}
    )
    let respond
    if (response.status === 200) {respond =response}
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return respond;
  } catch (error: Error | any) {
    console.log(error);
    return null;
  }

}