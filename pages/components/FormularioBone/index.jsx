import FormContact from './FormContact';
import Forminfo from './Forminfo';

export default function FormularioBone() {
  return (
    <div>
      <h1 className='w-full justify-center flex bg-gray-200 text-2xl p-4'>Formulário para boné brinde</h1>
      <div className='min-h-screen bg-gray-200 flex justify-center'>
        <div className='w-4/5 shadow-lg rounded-lg overflow-hidden md:flex md:flex-wrap"'>
          <FormContact />
          <Forminfo />
        </div>
      </div>
    </div>
  );
}