import Patient from './Patient'

import * as S from './styled-patients'

function Patients({pacientes, setPaciente, eliminarPaciente}){
    return(
        <div className="patients">
            <S.PatientHeader>
                <h2>Pacientes</h2>
                <p>{pacientes && pacientes.length ? 'Administra tus pacientes y citas' : 'Aún no has añadido pacientes'}</p>
            </S.PatientHeader>

            {pacientes.map( (paciente) => (
                <Patient
                    key={paciente.id}
                    id={paciente.id}
                    nombre={paciente.nombre}
                    propietario={paciente.propietario}
                    correo={paciente.correo}
                    fecha={paciente.fecha}
                    sintomas={paciente.sintomas}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            ) )}
        </div>
        
    )

}

export default Patients