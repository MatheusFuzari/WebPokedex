'use client';

import { useRouter } from "next/navigation";

export default function LoginPage(){
  const router = useRouter()
  return(
    <main>
      <h1>login!</h1>
      <form onSubmit={(e)=>{
        console.log('opa')
        router.push('/');
        e.preventDefault();
      }}>
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu nome"></input><br/>
        <input type="submit" value={'Enviar'}></input>
      </form>
    </main>
  )
}