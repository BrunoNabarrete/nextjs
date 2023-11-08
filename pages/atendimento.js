import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Atendimento() {
  const router = useRouter();

  useEffect(() => {
    const msg = `https://api.whatsapp.com/send/?phone=5511988362072&text=Olá!%20Vi%20o%20anúncio,%20quero%20saber%20mais%20do%20clube!&type=phone_number&app_absent=0`;
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
