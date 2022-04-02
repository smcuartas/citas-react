import * as S from './styled-patients'

function Patient({id, nombre, propietario, correo, fecha, sintomas, setPaciente, eliminarPaciente}){
    const handleEliminar = () => {
        const respuesta = confirm('¿Estás seguro que deseas eliminar al paciente ' + nombre + '?')
        if(respuesta){
            eliminarPaciente(id)
        } else{
            return;
        }
    }

    return(
        <S.PatientCard>
                <S.IDPatient>ID: {id}</S.IDPatient>

                <p>
                    <S.BoldTxt>Nombre:</S.BoldTxt> {nombre}
                </p>

                <p>
                    <S.BoldTxt>Propietario:</S.BoldTxt> {propietario}
                </p>

                <p>
                    <S.BoldTxt>Correo electrónico:</S.BoldTxt> {correo}
                </p>

                <p>
                    <S.BoldTxt>Fecha de alta:</S.BoldTxt> {fecha}
                </p>

                <p>
                    <S.BoldTxt>Síntomas del paciente:</S.BoldTxt> {sintomas}
                </p>

                <S.ButtonArea>
                    <S.Edit value="Editar" onClick={() => setPaciente(id)} />
                    <S.Delete value="Eliminar" onClick={handleEliminar} />
                </S.ButtonArea>
            </S.PatientCard>
    )
}

export default Patient