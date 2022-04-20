import * as S from './styled-patients'

function Patient({id, name, owner, email, date, symptoms, setPatient, deletePatient}){
    const handleDelete = () => {
        const response = confirm("Are you sure you want to delete " + name + "'s register?")
        if(response){
            deletePatient(id)
        } else{
            return;
        }
    }

    return(
        <S.PatientCard>
                <S.IDPatient>ID: {id}</S.IDPatient>

                <p>
                    <S.BoldTxt>Name:</S.BoldTxt> {name}
                </p>

                <p>
                    <S.BoldTxt>Owner:</S.BoldTxt> {owner}
                </p>

                <p>
                    <S.BoldTxt>Email:</S.BoldTxt> {email}
                </p>

                <p>
                    <S.BoldTxt>Discharge date:</S.BoldTxt> {date}
                </p>

                <p>
                    <S.BoldTxt>Patient symptoms:</S.BoldTxt> {symptoms}
                </p>

                <S.ButtonArea>
                    <div>
                    <S.Edit onClick={() => setPatient(id)}>Edit</S.Edit>
                    </div>
                    
                    <div>
                        <S.Delete onClick={handleDelete}>Delete</S.Delete>
                    </div>
                </S.ButtonArea>
            </S.PatientCard>
    )
}

export default Patient