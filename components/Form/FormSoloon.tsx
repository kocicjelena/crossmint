import React, { useEffect, useState } from "react";
import Form from "./Form";

interface Props {
    handleForm: any,
    title?: string,
    data?:number[]
}
const FormSoloon = ({ handleForm }:Props) => {
    
      const [row, setRow] = useState(0);
      const [column, setColumn] = useState(0);
      const [color, setColor] = useState('');
      
   
      const handleFormSubmit = async () => {
        const data = {row, column, color}
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
              <input
                type="text"
                id="color"
                name="color"
                value={color}
                placeholder='"blue", "red", "purple" or "white"'
                onChange={(event: any) => setColor(event.target.value) as unknown as string}
              />
          <button type="submit">SUBMIT: soloon</button>
        </Form>
        </>
      );
  };
  export default FormSoloon;