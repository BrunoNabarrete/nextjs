import { useEffect, useState } from "react";
import { FormularioBone } from "./components/FormularioBone";


export default function Formulario() {

  const [entregas, setEntregas] = useState([]);

    const testeApi = async () => {
      try {
        const response = await fetch('http://localhost:8080/entregas', {
          method: 'GET',
        });
        const data = await response.json();
        console.log(data);
        setEntregas(data);
        console.log('entregas',entregas);
      }
      catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      testeApi();
    }
    , []);


  return (
    <div className=''>
      <h1>Formulário</h1>
      <FormularioBone />
    </div>
  );
}