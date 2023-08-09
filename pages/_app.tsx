import type { AppProps } from 'next/app'
import { Component, useEffect, useState } from 'react';
import { Provider } from '../context/GlobalContext';
import { NextComponentType } from 'next';
type MyAppProps = AppProps & {
  Component: NextComponentType,
};
function App({ Component,pageProps: { ...pageProps }, }:MyAppProps) {
   return (
     <Provider>

     
             <Component {...pageProps} />
        
    
           </Provider>
     )
   }
   
   export default App 
   