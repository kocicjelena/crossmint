import React, { useEffect, useState } from "react";
import Form from "./Form";

interface Props {
    handleForm: any,
    title?: string,
    data?:number[]
}
const FormRC = ({ handleForm }:Props) => {
    
      const [row, setRow] = useState(0);
      const [column, setColumn] = useState(0);
      
   
      const handleFormSubmit = async () => {
        const data = {row, column}
        await handleForm(data);
      };
    
      return (
      <> 
          <Form onSubmit={handleFormSubmit}>
            <input
                type="text"
                id="row"
                name="row"
                value={row}
                placeholder="row"
                onChange={(event: any ) => setRow(event.target.value) as unknown as number}
              />
              <input
                type="text"
                id="column"
                name="column"
                value={column}
                placeholder="column"
                onChange={(event: any) => setColumn(event.target.value) as unknown as number}
              />
          <button type="submit">SUBMIT: Polyanet</button>
        </Form>
        </>
      );
  };
  export default FormRC;