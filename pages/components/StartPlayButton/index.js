export default function StartButtonPlay() {
  return (
    <div className="py-20 px-5 md:px-20 md:mb-12 bg-slate-800">
      <h3 className="text-center w-full text-4xl text-white font-bold mb-8">
        CHAME A GENTE E SOLICITE SEU BÔNUS!
      </h3>
      <p className="text-center w-full text-lg text-white font-medium mb-8">
        Fale com a gente pelo whatsapp, atendimento 24 horas!
      </p>
      <div className="flex items-center justify-center">

      <a target='_blank' href="https://api.whatsapp.com/send/?phone=5511988362072&text=Olá!%20Vi%20o%20anúncio,%20quero%20saber%20mais%20do%20clube!&type=phone_number&app_absent=0" 
      className="px-6 py-4 w-96 text-lg font-medium text-center text-white rounded-lg bg-green-true hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-true dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        WHATSAPP
      </a>
      </div>
    </div>
  )
}