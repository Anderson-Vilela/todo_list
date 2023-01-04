import { Notepad, PlusCircle } from 'phosphor-react';
import React from 'react';

const Main = () => (
  <main className='h-[100rem] bg-gray-600'>
    <section className='mx-auto flex translate-y-[-50%] justify-between bg-transparent phone-up:w-[76.8rem]'>
      <input placeholder='Adicione uma nova tarefa' type='text' className='h-[5.4rem] w-[63.8rem] rounded-xl border-black bg-gray-500 p-6 placeholder:text-gray-300' />
      <button type='button' className='flex items-center justify-center gap-3 rounded-xl bg-blue-dark p-6 font-bold text-gray-100'>
        Criar
        <PlusCircle size={16} color='#F2F2F2' weight='bold' />
      </button>
    </section>
    <section className='mx-auto mt-16 phone-up:w-[76.8rem]'>
      <div className='flex justify-between'>
        <div>
          <p className='text-blue'>tarefas criadas</p>
        </div>
        <div>
          <p className='text-purple'>concluidas</p>
        </div>
      </div>
      <div className='mt-8 grid items-center justify-center rounded-lg border-t border-gray-300'>
        <div className='py-40 px-8'>
          <Notepad size={48} color='#262626' className='mx-auto' />
          <p className='mt-4 text-center font-bold text-gray-300'>
            Você ainda não tem tarefas cadastradas <br /> <span className='font-normal'>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default Main;