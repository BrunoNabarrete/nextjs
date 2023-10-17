import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Atendimento() {
  const router = useRouter();

  useEffect(() => {
    const msg = `whatsapp://send?phone=5511988362072&text=Olá,%20vim%20pelo%20site%20para%20fazer%20parte%20do%20clube!!!`;
    console.log(msg);
    router.push(msg)
  }
  , []);


  return (
    <div>
    </div>
  );
}

export default Atendimento;
