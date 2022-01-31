import axios from 'axios';

const Employees = {
  getAllEmployees: async () => axios.get('http://localhost:5000/api/visits'),

  addNewEmployee: async (employee) => {
    return axios.post('http://localhost:5000/api/visits', {
      name: employee.name,
      lastname: employee.lastname,
    });
  },
};

export default { Employees };
