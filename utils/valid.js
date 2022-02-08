const valid = (Id, nume, prenume, pluton, companie, batalion, telefon, istoric, puncte)=>{
  if(!nume || !prenume )
  return 'Nume si prenume obligatorii'
  
  if(telefon.length < 10 || telefon.length > 14)
  return 'Format numar gresit'

  if(!puncte)
  return 'Puncte: Daca nu exista se punce valoarea "0"'
}

export default valid

