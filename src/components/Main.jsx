import React from 'react';
import { Check, Notepad, PlusCircle, Trash } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [inboxTask, setInboxTask] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const addTask = () => {
    if (inboxTask !== '') {
      setTasks([...tasks, { id: uuidv4(), title: inboxTask, isCompleted: false }]);
      setInboxTask('');
    }
  };
  const deleteTask = (_id) => {
    const updatedTasks = [...tasks].filter((_task) => _task.id !== _id);
    setTasks(updatedTasks);
  };

  const toggleTaskIscompleted = (_taskId) => {
    const updatedTasks = [...tasks].map((_task) => {
      if (_task.id === _taskId) {
        return {
          ..._task,
          isCompleted: !_task.isCompleted,
        };
      }
      return _task;
    });
    setTasks(updatedTasks);
  };

  return (
    <main className='h-[100rem] bg-gray-600'>
      <section className='mx-auto flex translate-y-[-50%] justify-between bg-transparent phone-up:w-[76.8rem]'>
        <input value={inboxTask} onChange={({ target }) => setInboxTask(target.value)} placeholder='Adicione uma nova tarefa' type='text' className='h-[5.4rem] w-[63.8rem] rounded-xl border-black bg-gray-500 p-6 text-gray-300 placeholder:text-gray-300 focus-visible:outline-none' />
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
                      <button type='button' onClick={() => deleteTask(task.id)} className='p-4'>
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
