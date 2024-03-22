import React, { useState, useEffect } from 'react';

import Link from 'next/link';

export default function CorreioDeclaracao() {
  const [nomeRua, setNomeRua] = useState('');
  const [nome, setNome] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');
  const [valor, setValor] = useState(50);
  const [quantidade, setQuantidade] = useState(1);
  const [id, setId] = useState(0);
  const [date, setDate] = useState('');
  const [ids, setIds] = useState([0]);

  const remetenteData = {
    nome: 'BDR',
    endereco: 'RUA DOM PEDRO I, 1558, VILA PIRES',
    cidadeUf: 'SANTO ANDRÉ, SP',
    cep: '09130-012',
    cpfCnpj: '47.442.540/0001-00',
  };

  
  const consultarTodasEntregas = async () => {
    const response = await fetch('https://api.brotherhoodonline.com.br/entregas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    data.map((entrega) => {
      setIds((ids) => [...ids, entrega.id]);
    });
    
    console.log(data.id);
  } 


  useEffect(() => {
    consultarTodasEntregas();
  }, []);

  const consultarPorId = async (id) => {
    const response = await fetch(`https://api.brotherhoodonline.com.br/entregas/${id}`
      , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const data = await response.json();
    setNomeRua(data.nomeRua);
    setNome(data.nomePessoa);
    setCep(data.cep);
    setNumero(data.numero);
    setBairro(data.bairro);
    setCidade(data.cidade);
    setEstado(data.estado);
    setCpfCnpj(data.cpf);
    setComplemento(data.complemento);
    setDate(new Date().toLocaleDateString('pt-BR'));
  }

  
  return (
      <div className="mx-auto max-w-4xl">
        <div className='flex print:hidden'>
          <select 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            className="w-2/12 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {[...new Set(ids)].map((uniqueId) => (
              <option key={uniqueId} value={uniqueId}>{uniqueId}</option>
            ))}
          </select>
          <button onClick={() => consultarPorId(+id)}>Consultar</button>
          <input type="number" className='ml-12' placeholder='quantidade de boné' value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
          
              <Link className='bg-blue-500 ml-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' href="/entregasconsulta">Consultar todos cadastrados</Link>
               
            <Link href="/entregasconsulta"/>
        </div>
        <h2 className="text-center text-xl font-bold mb-4">DECLARAÇÃO DE CONTEÚDO</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Remetente */}
          <div>
            <h3 className="font-bold mb-2">REMETENTE</h3>
            <div>
              <label className="block font-bold">NOME:</label>
              <div>{remetenteData.nome}</div>
            </div>
            <div>
              <label className="block font-bold">ENDEREÇO:</label>
              <div>{remetenteData.endereco}</div>
            </div>
            <div>
              <label className="block font-bold">CIDADE: UF:</label>
              <div>{remetenteData.cidadeUf}</div>
            </div>
            <div>
              <label className="block font-bold">CEP: CPF/CNPJ/DOC.ESTRANGEIRO:</label>
              <div>CEP {remetenteData.cep}, CPF/CNPJ/DOC: {remetenteData.cpfCnpj}</div>
            </div>
          </div>

          {/* Destinatário */}
          <div>
            <h3 className="font-bold mb-2">DESTINATÁRIO</h3>
            <div>
              <label className="block font-bold">NOME:</label>
              <div>{nome.toUpperCase()}</div>
            </div>
            <div>
              <label className="block font-bold">ENDEREÇO:</label>
              <div>{nomeRua.toUpperCase()}, {numero},Complemento: {complemento}, Bairro: {bairro.toUpperCase()}</div>
            </div>
            <div>
              <label className="block font-bold">CIDADE: UF:</label>
              <div>{cidade.toUpperCase()}, {estado.toUpperCase()}</div>
            </div>
            <div>
              <label className="block font-bold">CEP: CPF/CNPJ/DOC.ESTRANGEIRO:</label>
              <div>CEP DESTINATÁRIO: {cep}, CPF/CNPJ/DOC: {cpfCnpj}</div>
            </div>
          </div>
        </div>

            {/* informacao duplicada para a Impressão */ }
        <div className="grid grid-cols-2 gap-4 hidden print:block">
          <br />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">REMETENTE</h3>
              <div>
                <label className="block font-bold">NOME:</label>
                <div>{remetenteData.nome}</div>
              </div>
              <div>
                <label className="block font-bold">ENDEREÇO:</label>
                <div>{remetenteData.endereco}</div>
              </div>
              <div>
                <label className="block font-bold">CIDADE: UF:</label>
                <div>{remetenteData.cidadeUf}</div>
              </div>
              <div>
                <label className="block font-bold">CEP: CPF/CNPJ/DOC.ESTRANGEIRO:</label>
                <div>CEP {remetenteData.cep}, CPF/CNPJ/DOC: {remetenteData.cpfCnpj}</div>
              </div>
            </div>

            {/* Destinatário */}
            <div>
              <h3 className="font-bold mb-2">DESTINATÁRIO</h3>
              <div>
                <label className="block font-bold">NOME:</label>
                <div>{nome.toUpperCase()}</div>
              </div>
              <div>
                <label className="block font-bold">ENDEREÇO:</label>
                <div>{nomeRua.toUpperCase()}, {numero},Complemento: {complemento}, Bairro: {bairro.toUpperCase()}</div>
              </div>
              <div>
                <label className="block font-bold">CIDADE: UF:</label>
                <div>{cidade.toUpperCase()}, {estado.toUpperCase()}</div>
              </div>
              <div>
                <label className="block font-bold">CEP: CPF/CNPJ/DOC.ESTRANGEIRO:</label>
                <div>CEP DESTINATÁRIO: {cep}, CPF/CNPJ/DOC: {cpfCnpj}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Itens */}
        <table className="w-full mt-4 border-collapse border border-black">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-4 py-2">ITEM</th>
              <th className="border border-black px-4 py-2">CONTEÚDO</th>
              <th className="border border-black px-4 py-2">QUANT.</th>
              <th className="border border-black px-4 py-2">VALOR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">1</td>
              <td className="border border-black px-4 py-2">BONÉ</td>
              <td className="border border-black px-4 py-2">{quantidade}</td>
              <td className="border border-black px-4 py-2">R$ {valor },00</td>
            </tr>
            {/* Adicione mais linhas aqui, se necessário */}

          </tbody>
          <tfoot>
            <tr className="bg-gray-200">
              <td colSpan="3" className="border border-black px-4 py-2 text-right">TOTAIS</td>
              <td className="border border-black px-4 py-2">R$ {quantidade * valor},00</td>
            </tr>
            <tr className="bg-gray-200">
              <td colSpan="4" className="border border-black px-4 py-2 text-right">PESO TOTAL (kg): 0,250 </td>
            </tr>
          </tfoot>
        </table>

        {/* Declaração e assinatura */}
        <div className="mt-4">
          <p className="mb-4">
            Declaro que não me enquadro no conceito de contribuinte previsto no art. 4º da Lei Complementar nº 87/1996,
            uma vez que não realizo, com habitualidade ou em volume que caracterize intuito comercial, operações de circulação de mercadoria,
            ainda que se iniciem no exterior, ou estou dispensado da emissão da nota fiscal por força da legislação tributária vigente,
            responsabilizando-me, nos termos da lei e a quem de direito, por informações inverídicas.
          </p>
          <p className="mb-4">
            Declaro ainda que não estou postando conteúdo inflamável, explosivo, causador de combustão espontânea, tóxico, corrosivo,
            gás ou qualquer outro conteúdo que conste na lista de proibições e restrições disponível no site dos Correios:
            <a className="text-blue-500 hover:underline" href="https://www.correios.com.br/enviar/proibicoes-e-restricoes/proibicoes-e-restricoes" target="_blank" rel="noopener noreferrer">
              https://www.correios.com.br/enviar/proibicoes-e-restricoes/proibicoes-e-restricoes
            </a>
          </p>
          <p className="mb-4">Santo André, SP. {date}.</p>
          <p className="text-right">Assinatura do Declarante/Remetente</p>
        </div>

        {/* Observação */}
        <div className="mt-4">
          <p className="font-bold">OBSERVAÇÃO:</p>
          <p>Constitui crime contra a ordem tributária suprimir ou reduzir tributo, ou contribuição social e qualquer acessório (Lei 8.137/90 Art. 1º, V).</p>
        </div>
     </div>
  )
}