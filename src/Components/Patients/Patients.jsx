import Patient from './Patient'

import * as S from './styled-patients'

function Patients({patients, setPatient, deletePatient}){
    return(
        <div className="patients">
            <S.PatientHeader>
                <h2>Patients</h2>
                <p>{patients && patients.length ? "Manage your patients and appointments" : "You have'nt added patients yet"}</p>
            </S.PatientHeader>

            {patients.map( obj => (
                <Patient
                    key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    owner={obj.owner}
                    email={obj.email}
                    date={obj.date}
                    symptoms={obj.symptoms}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                />
            ) )}
        </div>
        
    )

}

export default Patients