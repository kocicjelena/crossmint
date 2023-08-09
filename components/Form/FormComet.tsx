import React, { useEffect, useState } from "react";
import Form from "./Form";

interface Props {
    handleForm: any,
    data?: any,
}
const FormComet = ({ handleForm, data }:Props) => {
    
      const [row, setRow] = useState(0);
      const [column, setColumn] = useState(0);
      const [direction, setDirection] = useState('');
      
      const handle = () => {}

      const handleFormSubmit = async () => {
        const data = {row, column, direction}
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
                id="direction"
                name="direction"
                value={direction}
                placeholder="up, down right or left"
                onChange={(event: any) => setDirection(event.target.value) as unknown as string}
              />
          <button type="submit">SUBMIT: cometh</button>
        </Form>
        </>
      );
  };
  export default FormComet;