import { useState, useEffect } from 'react'

import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Patients from './Components/Patients/Patients'

import GlobalCSS from './Components/Global/global-styled'

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []
      setPatients(patientsLS)
    }

    getLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (id) => {
    const updatedPatients = patients.filter( patient => patient.id !== id);
    setPatients(updatedPatients)
  }

  return (
    <>
      <GlobalCSS />

      <Header
        title = 'Vet Appointments'
        subtitle = 'Patient Manager'
      />

      <div className="cols2">
        <Form
          patients = {patients}
          setPatients = {setPatients}
          patient={patient}
          setPatient={setPatient}
        />

        <Patients
          patients = {patients}
          setPatient = {setPatient}
          deletePatient = {deletePatient}
        />
      </div>
    </>
  )
}

export default App
