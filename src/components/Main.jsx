import React from 'react';
import { Notepad, PlusCircle, Trash } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [inboxTask, setInboxTask] = React.useState(null);
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => setTasks([...tasks, { id: uuidv4(), title: inboxTask, isCompleted: false }]);
  const deleteTask = (id) => setTasks(tasks.filter((todo) => todo.id !== id));

  return (
    <main className='h-[100rem] bg-gray-600'>
      <section className='mx-auto flex translate-y-[-50%] justify-between bg-transparent phone-up:w-[76.8rem]'>
        <input id='inputInbox' onChange={({ target }) => setInboxTask(target.value)} placeholder='Adicione uma nova tarefa' type='text' className='h-[5.4rem] w-[63.8rem] rounded-xl border-black bg-gray-500 p-6 placeholder:text-gray-300' />
        <button onClick={addTask} type='button' className='flex items-center justify-center gap-3 rounded-xl bg-blue-dark p-6 font-bold text-gray-100'>
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
        <div className={tasks.length === 0 ? 'mt-8 rounded-lg border-t border-gray-300' : 'mt-8'}>
          {tasks.length === 0 ? (
            <div className='py-40 px-8'>
              <Notepad size={48} color='#262626' className='mx-auto' />
              <p className='mt-4 text-center font-bold text-gray-300'>
                Você ainda não tem tarefas cadastradas <br /> <span className='font-normal'>Crie tarefas e organize seus itens a fazer</span>
              </p>
            </div>
          ) : (
            <div>
              <ul className='grid gap-5'>
                {tasks.map((task) => (
                  <li className='flex items-center justify-between gap-8 rounded-xl bg-gray-400 p-7' key={task.id}>
                    <div className='p-4'>
                      <input type='radio' name='' id='' />
                    </div>
                    <div className='flex-1'>{task.title}</div>
                    <div>
                      <button type='button' onClick={deleteTask} className='p-4'>
                        <Trash size={16} color='#c0c0c0' />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;
