import React, { useEffect, useState } from 'react';
import Api from '../../Api';
import ListOfEmployees from './ListOfEmployees';
import InfoWindow from './InfoWindow';
import CreateForm from './CreateForm';
import Loading from '../default_components/loading/Loading';

const Edit = () => {
  const [data, setData] = useState([]);
  const [createFormOpen, setCreateFormOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Api.Employees.getAllEmployees().then((response) => {
      setData(response.data || []);
      setTimeout(() => {
        setLoading(false)
      }, 5000);
    });
  }, []);

  useEffect(() => {
    setSelectedEmployee(data || {});
  }, [data]);

  return (
    <>
      {!loading ? (
        <div
          style={{
            display: 'flex',
            background: 'rgba(138,198,209,0.2)',
            padding: '20px 0 20px 20px',
            borderBottom: '3px solid rgba(138,198,209,1)',
          }}
        >
          {!createFormOpen ? (
            <InfoWindow selectedEmployee={selectedEmployee} />
          ) : (
            <CreateForm createWindow={setCreateFormOpen} setData={setData} />
          )}
          <ListOfEmployees
            createWindow={setCreateFormOpen}
            select={setSelectedEmployee}
            employees={data}
          />
        </div>
      ) : (
        <div
          style={{
            height: '50vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Loading />
        </div>
      )}
    </>
  );
};

export default Edit;
