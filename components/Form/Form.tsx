import React from "react";

interface Props {
    children: any,
    onSubmit: any
}
const Form = ({ children, onSubmit }:Props) => {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      onSubmit();
    };
  
    return <form onSubmit={handleSubmit}>{children}</form>;
  };
  export default Form