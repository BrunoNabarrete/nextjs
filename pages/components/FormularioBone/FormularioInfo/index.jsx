import React, { useState } from 'react';

export default function Forminfo() {
  const [nomeRua, setNomeRua] = useState('');
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nomePessoa: nome,
      nomeRua: nomeRua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      cep: cep,
      telefonePessoa: telefone
    };

    try {
      const response = await fetch('http://localhost:8080/entregas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        alert('Entrega cadastrada com sucesso!');
      }
      else {
        alert('Erro ao cadastrar entrega');
      };
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='p-8 bg-white w-full'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 p-2 gap-4'>
          <div className='flex flex-col'>
            <label htmlFor="nome">Nome</label>
            <input 
              id="nome"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              value={nome} 
              required
              onChange={(e) => setNome(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="rua">Rua</label>
            <input 
              id="rua"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              required
              value={nomeRua} 
              onChange={(e) => setNomeRua(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="numero">Número</label>
            <input 
              id="numero"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="tel" 
              required
              value={numero} 
              onChange={(e) => setNumero(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="complemento">Complemento</label>
            <input 
              id="complemento"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              value={complemento} 
              onChange={(e) => setComplemento(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="bairro">Bairro</label>
            <input 
              id="bairro"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              required
              value={bairro} 
              onChange={(e) => setBairro(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cidade">Cidade</label>
            <input 
              id="cidade"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              required
              value={cidade} 
              onChange={(e) => setCidade(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="estado">Estado</label>
            <input 
              id="estado"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              required
              value={estado} 
              onChange={(e) => setEstado(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cep">CEP</label>
            <input 
              id="cep"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              required
              value={cep} 
              onChange={(e) => setCep(e.target.value)} 
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="telefone">Telefone</label>
            <input 
              id="telefone"
              className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500' 
              type="text" 
              required
              value={telefone} 
              onChange={(e) => setTelefone(e.target.value)} 
            />
          </div>
          <button 
            className='py-3 px-4 bg-black hover:bg-gray-800 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition'
            type="submit"
          >
            Enviar
          </button>
        </div>  
      </form>
    </div>
  );
}
