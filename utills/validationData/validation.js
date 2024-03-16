export default function validationData(data) {
  let errors = {}
  // escreve a validacao com base nesse objetonomePessoa: nome,
      // nomeRua: nomeRua,
      // numero: numero,
      // complemento: complemento,
      // bairro: bairro,
      // cidade: cidade,
      // estado: estado,
      // cep: cep,
      // telefonePessoa: telefone
  if (!data.nomePessoa) {
    errors.nomePessoa = 'Nome é obrigatório';
  }
  if (!data.nomeRua) {
    errors.nomeRua = 'Nome da rua é obrigatório';
  }
  if (!data.numero) {
    errors.numero = 'Número é obrigatório';
  }
  if (!data.bairro) {
    errors.bairro = 'Bairro é obrigatório';
  }
  if (!data.cidade) {
    errors.cidade = 'Cidade é obrigatório';
  }
  if (!data.estado) {
    errors.estado = 'Estado é obrigatório';
  }
  if (!data.cep) {
    errors.cep = 'CEP é obrigatório';
  }
  if (!data.telefonePessoa) {
    errors.telefonePessoa = 'Telefone é obrigatório';
  }
  return errors
}