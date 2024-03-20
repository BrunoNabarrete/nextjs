import React, { useState } from 'react';
import Loading from '../../Loading';
import { useRouter } from 'next/router';

export default function Forminfo() {
  const [nomeRua, setNomeRua] = useState('');
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  
  const handleInputChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(value);
  };

  const handleInputChangeCep = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, ''); // Remove tudo que não é dígito
    value = value.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o traço após os primeiros cinco dígitos
    setCep(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = {
      nomePessoa: nome,
      nomeRua: nomeRua,
      numero: numero,
      cpf: cpf,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      cep: cep,
      telefonePessoa: telefone
    };


    try {
      const response = await fetch('https://api.brotherhoodonline.com.br/entregas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        setLoading(false);
        alert('Entrega cadastrada com sucesso!');
        router.push('/');
      }
      else {
        console.log(response);
        alert('Erro ao cadastrar entrega');
      };
    }
    catch (error) {
      console.log(error);
    }


  }

  return (
    <div className='p-8 bg-white w-full'>
      {loading ? (
        <div className=''>
        <Loading />
        </div>
      ) : (
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
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                className='py-2 px-3 block border rounded-md text-black text-sm focus:border-blue-500 focus:ring-blue-500'
                type="text"
                maxLength={14}
                value={cpf}
                required
                onChange={handleInputChange}
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
                maxLength={9}
                required
                value={cep} 
                onChange={handleInputChangeCep} 
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
      )}
    </div>
  );
}  