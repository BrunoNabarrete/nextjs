import React, { useState } from 'react';
import Link from 'next/link';

export default function EntregasConsultas() {
  const [entregas, setEntregas] = useState([]);

  const consultarEntregas = async () => {
    try {
      const response = await fetch(`https://api.brotherhoodonline.com.br/entregas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setEntregas(data);
    } catch (error) {
      console.error('Erro ao consultar entregas', error);
    }
  }

  

  const deleteEntrega = async (id) => {
    try {
      const response = await fetch(`https://api.brotherhoodonline.com.br/entregas/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('Entrega deletada com sucesso');
        consultarEntregas(); // Consultar entregas novamente após a exclusão
      } else {
        throw new Error('Falha ao excluir entrega');
      }
    } catch (error) {
      console.error('Erro ao deletar entrega', error);
    }
  }

  const updateEntrega = async (id) => {
    try {
      const response = await fetch(`https://api.brotherhoodonline.com.br/entregas/${id}`);
      if (!response.ok) {
        throw new Error('Falha ao obter detalhes da entrega');
      }
      
      const data = await response.json();
      
      const atualizarEntregas = { ...data, impresso: 2 };
      
      const updateResponse = await fetch(`https://api.brotherhoodonline.com.br/entregas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizarEntregas),
      });
  
      if (!updateResponse.ok) {
        throw new Error('Falha ao atualizar entrega');
      }
  
      alert('Impresso com sucesso!');
      consultarEntregas(); 
    } catch (error) {
      console.error('Erro ao atualizar entrega', error);
    }
  }
  

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={consultarEntregas}>Consultar</button>
        <Link className='bg-blue-500 ml-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href="/declaracaobone">
          Ir para impressão
        </Link>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">CPF</th>
            <th className="px-4 py-2">Endereço</th>
            <th className="px-4 py-2">Bairro</th>
            <th className="px-4 py-2">Número</th>
            <th className="px-4 py-2">CEP</th>
            <th className="px-4 py-2">Cidade</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {entregas.map(entrega => (
            <tr className='' key={entrega.id}>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.id}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.nomePessoa}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.cpf}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.nomeRua}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.bairro}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.numero}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.cep}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.cidade}</td>
              <td className={entrega.impresso === 2 ? 'border px-4 py-2 bg-red-500' : 'border px-4 py-2'}>{entrega.estado}</td>
              <td className="border px-4 py-2">
                <button disabled={entrega.impresso === 2} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => updateEntrega(entrega.id)}>Impresso</button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deleteEntrega(entrega.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
