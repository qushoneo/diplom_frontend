import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

let paramToken;

let updateParamToken = (token) => {
  paramToken = { params: { token } };
}

updateParamToken(localStorage.getItem('auth-token'))

const Employees = {
  getAllEmployees: async () => axios.get('/visits', paramToken),

  addNewEmployee: async (employee) => {
    return axios.post('/visits', {
      name: employee.name,
      lastname: employee.lastname,

    });
  },
};

const Auth = {
  login: async (username, password) => {
    const res = await axios.post('/login', { username, password });
    if (res.status === 201 || res.status === 200) {
      const token = res.data.token;
      localStorage.setItem('auth-token', token);
      updateParamToken(token)
    }
  },
};

const Profile = {
  getProfile: async () => axios.get('/profile', paramToken),
};


export default { Employees, Auth, Profile };
