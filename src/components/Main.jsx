import React, { useEffect } from 'react';
import { Check, Notepad, PlusCircle, Trash } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';
import tasksControllers from '../../api/controllers/tasksControllers';

const Main = () => {
  const [inboxTask, setInboxTask] = React.useState('');
  const [apiTasks, setApiTasks] = React.useState([]);

  useEffect(() => {
    tasksControllers.getAllTasks().then((result) => {
      setApiTasks(result);
      console.log('executou');
    });
  }, []);

  const handleChange = ({ target }) => setInboxTask(target.value);

  const handleAddNewTask = (e) => {
    e.preventDefault();
    const newTask = { id: uuidv4(), title: inboxTask, isCompleted: false };
    tasksControllers.createNewTask(newTask).then((result) => {
      setApiTasks(result);
      setInboxTask('');
    });
  };

  const handleDeleteTaskById = (id) => {
    tasksControllers.deleteTaskById(id).then((result) => {
      setApiTasks(result);
    });
  };

  return (
    <main className='h-[100rem] bg-gray-600'>
      <form action='' method='post' className='mx-auto flex translate-y-[-50%] justify-between bg-transparent phone-up:w-[76.8rem]'>
        <input value={inboxTask} onChange={handleChange} placeholder='Adicione uma nova tarefa' type='text' className='h-[5.4rem] w-[63.8rem] rounded-xl border-black bg-gray-500 p-6 text-gray-300 placeholder:text-gray-300 focus-visible:outline-none' />
        <button type='submit' onClick={handleAddNewTask} className='flex items-center justify-center gap-3 rounded-xl bg-blue-dark p-6 font-bold text-gray-100'>
          Criar
          <PlusCircle size={16} color='#F2F2F2' weight='bold' />
        </button>
      </form>
      <section className='mx-auto mt-16 phone-up:w-[76.8rem]'>
        <div className='flex justify-between'>
          <div>
            <p className='text-blue'>tarefas criadas</p>
          </div>
          <div>
            <p className='text-purple'>concluidas</p>
          </div>
        </div>
        <div className={apiTasks.length === 0 ? 'mt-8 rounded-lg border-t border-gray-300' : 'mt-8'}>
          {apiTasks.length === 0 ? (
            <div className='py-40 px-8'>
              <Notepad size={48} color='#262626' className='mx-auto' />
              <p className='mt-4 text-center font-bold text-gray-300'>
                Você ainda não tem tarefas cadastradas <br /> <span className='font-normal'>Crie tarefas e organize seus itens a fazer</span>
              </p>
            </div>
          ) : (
            <div>
              <ul className='grid gap-5'>
                {apiTasks.map((task) => (
                  <li key={task.id} className='flex items-center justify-between gap-8 rounded-xl bg-gray-400 p-7'>
                    <div className='flex items-center justify-center p-4' key={task.id}>
                      <button type='button' onClick={() => toggleTaskIscompleted(task.id)} className={task.isCompleted ? 'flex h-7 w-7 items-center justify-center rounded-full border-2 border-purple-dark bg-purple-dark' : 'flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-dark bg-transparent'}>
                        <div>
                          <Check size={12} weight='bold' color={task.isCompleted ? '#fcfcfc' : ''} />
                        </div>
                      </button>
                    </div>
                    <div className={task.isCompleted ? 'font text- flex-1 break-all text-gray-300 line-through' : 'font flex-1 break-all text-gray-100'}>{task.title}</div>
                    <div>
                      <button type='button' className='p-4'>
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
