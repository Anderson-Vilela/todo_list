import api from '../services/axios/axiosConfig';

const messageError = 'Erro inexperado.';

const tasksControllers = {
  async getAllTasks() {
    try {
      const { data } = await api().get('/tasks');
      return data;
    } catch (error) {
      return messageError;
    }
  },

  async createNewTask(task) {
    try {
      const { data } = await api().post('/tasks', task);
      return data;
    } catch (error) {
      return messageError;
    }
  },

  async deleteTaskById(id) {
    try {
      const { data } = await api().delete(`/tasks/${id}`);
      return Array(data);
    } catch (error) {
      return messageError;
    }
  },
};

export default tasksControllers;
