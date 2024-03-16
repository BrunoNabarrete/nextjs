import { useState } from 'react';

export function FormularioBone() {
  const [nomeRua, setNomeRua] = useState('rua das violetas');
  const [nome, setNome] = useState('bruno nabarrete');
  const [cep, setCep] = useState('9176190');
  const [numero, setNumero] = useState(266);
  const [bairro, setBairro] = useState('vila marina');
  const [cidade, setCidade] = useState('santo andre');
  const [estado, setEstado] = useState('sp');
  const [complemento, setComplemento] = useState('apto02');
  const [telefone, setTelefone] = useState('11996486375');
  
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
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Rua</label>
          <input type="text" value={nomeRua} onChange={(e) => setNomeRua(e.target.value)} />
        </div>
        <div>
          <label>Número</label>
          <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
        <div>
          <label>Complemento</label>
          <input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
        </div>
        <div>
          <label>Bairro</label>
          <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
        </div>
        <div>
          <label>Cidade</label>
          <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        </div>
        <div>
          <label>Estado</label>
          <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
        </div>
        <div>
          <label>CEP</label>
          <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
        </div>
        <div>
          <label>Telefone</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}