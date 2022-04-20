import {useState, useEffect} from 'react'

import * as S from './styled-form'

function Form({patients, setPatients, patient, setPatient}){
    const [name, setName] = useState('');
    const [owner, setOwner] = useState ('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const[error, setError] = useState(false);

    useEffect( () => {
        if( Object.keys(patient).length > 0){
            patients.map( edit => {
                if(edit.id == patient){
                    setName(edit.name)
                    setOwner(edit.owner)
                    setEmail(edit.email)
                    setDate(edit.date)
                    setSymptoms(edit.symptoms)
                }
            })
        }
    }, [patient])

    const generateId = () => {
        const random = Math.random().toString(20).substring(2)
        const date = Date.now().toString(20)

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // form validation
        if([name, owner, email, date, symptoms].includes('')){
            setError(true);
        } else{
            setError(false);

            const Patient = {name, owner, email, date, symptoms, id: generateId()}
            setPatients([...patients, Patient]);

            setName('')
            setOwner('')
            setEmail('')
            setDate('')
            setSymptoms('')
        }

        if(patient && patient.length){
            patients.map( editPatient => {
                if(editPatient.id == patient){
                    const editPatient = {name, owner, email, date, symptoms, id: patient}
                    setPatients([editPatient])
                }
            })

            setPatient('')
        }
    }

    return(
        <div className="formCol">
            <S.FormCol>
                <h2>Add patients</h2>
                <p>Add your patients and manage them.</p>

                <S.Form onSubmit={handleSubmit}>
                    {error && (<S.InputError>All fields are required</S.InputError>)}
                    <input type="text" placeholder="Nombre de la mascota" onChange={ e => setName(e.target.value)} value={name} />
                    <input type="text" placeholder="Nombre del propietario" onChange={ e => setOwner(e.target.value) } value={owner} />
                    <input type="email" placeholder="Correo electrónico" onChange={ e => setEmail(e.target.value) } value={email} />
                    <label>Discharge date</label>
                    <input type="date" onChange={ e => setDate(e.target.value) } value={date} />
                    <textarea placeholder="Patient symptoms" rows="5" onChange={ e => setSymptoms(e.target.value) } value={symptoms} />
                    <input type="submit" value={patient && patient.length ? 'Edit patient' : 'Add patient'} />
                </S.Form>
            </S.FormCol>
        </div>
    )
}

export default Form