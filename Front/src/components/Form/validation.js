
const userEmail = /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
const passLong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,10}$/;
const passNum = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[A-Za-z\d]{6,10}[^’\s]/;

// /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/


export default function validation ({username, password}){
    const errors = {};

    errors.username = !userEmail.test(username) ? 'El nombre de usuario tiene que ser un email' : errors.username
    errors.username = !username ? 'El nombre de usuario no puede estar vacío' : errors.username
    errors.username = username.length <= 35 ? 'El nombre de usuario no puede tener mas de 35 caracteres' : errors.username

    errors.password = !passLong.test(password) ? 'La contraseña debe tener una longitud entre 6 y 10 caracteres' : errors.password
    errors.password = !passNum.test(password) ? 'La contraseña debe tener al menos un número' : errors.password

    return errors;
}


