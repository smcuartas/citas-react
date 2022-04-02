import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Patients from './Components/Patients/Patients'

import GlobalCSS from './Components/Global/global-styled'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <>
      <GlobalCSS />

      <Header
        title = 'Citas veterinaria'
        subtitle = 'Gestor de Pacientes'
      />

      <div className="cols2">
        <Form
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <Patients
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </>
  )
}

export default App
