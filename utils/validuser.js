const validregister = (nume, prenume, email,telefon, password, cf_password) => {
  if (!nume || !prenume || !email || !password) return 'Toate campurile obligatorii';

  if (!validateEmail(email)) return 'Email Invalid';

  if(telefon.length < 10 || telefon.length > 14)
  return 'Format numar gresit'

  if (password.length < 6) return 'Parola trebuie sa aiba minim 6 caractere';

  if (password !== cf_password) return 'Parolele nu se potrivesc';
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default validregister;
