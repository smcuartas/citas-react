import {useState, useEffect} from 'react'

import * as S from './styled-form'

function Form({pacientes, setPacientes, paciente, setPaciente}){
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState ('');
    const [correo, setCorreo] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const[error, setError] = useState(false);

    useEffect( () => {
        if( Object.keys(paciente).length > 0){
            pacientes.map( edit => {
                if(edit.id == paciente){
                    setNombre(edit.nombre)
                    setPropietario(edit.propietario)
                    setCorreo(edit.correo)
                    setFecha(edit.fecha)
                    setSintomas(edit.sintomas)
                }
            })
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(20).substring(2)
        const fecha = Date.now().toString(20)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // form validation
        if([nombre, propietario, correo, fecha, sintomas].includes('')){
            setError(true);
        } else{
            setError(false);

            const Paciente = {nombre, propietario, correo, fecha, sintomas, id: generarId()}
            setPacientes([...pacientes, Paciente]);

            setNombre('')
            setPropietario('')
            setCorreo('')
            setFecha('')
            setSintomas('')
        }

        if(paciente && paciente.length){
            pacientes.map( editPaciente => {
                if(editPaciente.id == paciente){
                    const editarPaciente = {nombre, propietario, correo, fecha, sintomas, id: paciente}
                    setPacientes([editarPaciente])
                }
            })

            setPaciente('')
        }
    }

    return(
        <div className="formCol">
            <S.FormCol>
                <h2>Añadir pacientes</h2>
                <p>Añade tus pacientes y adminístralos</p>

                <S.Form onSubmit={handleSubmit}>
                    {error && (<S.InputError>Todos los campos son obligatorios</S.InputError>)}
                    <input type="text" placeholder="Nombre de la mascota" onChange={ e => setNombre(e.target.value)} value={nombre} />
                    <input type="text" placeholder="Nombre del propietario" onChange={ e => setPropietario(e.target.value) } value={propietario} />
                    <input type="email" placeholder="Correo electrónico" onChange={ e => setCorreo(e.target.value) } value={correo} />
                    <label>Fecha de alta</label>
                    <input type="date" onChange={ e => setFecha(e.target.value) } value={fecha} />
                    <textarea placeholder="Síntomas del paciente" rows="5" onChange={ e => setSintomas(e.target.value) } value={sintomas} />
                    <button type="submit">{paciente && paciente.length ? 'Editar paciente' : 'Agregar paciente'}</button>
                </S.Form>
            </S.FormCol>
        </div>
    )
}

export default Form