const FormData = (lang) => {
    if (lang === 'es') {
        return HOME_ES()
    }
    else if (lang === 'en') {
        return HOME_EN();
    }
    else {
        return HOME_EN();
    }
}

const HOME_EN = () => {
    return {
        query: '',
        title: 'Contact Form',
        p: 'You can contact me with this form or at social media shown at the bottom',
        email: 'javier@cervilla.es',
        cName: { label: 'Name', placeholder: 'Enter your Name' },
        cEmail: { label: 'Contact Email', placeholder: 'Enter your Email' },
        cPhone: { label: 'Contact Phone', placeholder: 'Enter yor Phone' },
        cSubject: { label: 'Subject', placeholder: 'Enter Subject' },
        cMessage: { label: 'Message', placeholder: 'Enter Message' },
        btn: 'Contact Me'
    }
}

const HOME_ES = () => {
    return {
        query: '?lang=es',
        title: 'Formulario de Contacto',
        p: 'Puedes contactar conmigo a traves de este formulario, o en las redes sociales que encontraras al final de la pagina',
        email: 'javier@cervilla.es',
        cName: { label: 'Nombre', placeholder: 'Intoduzca su Nombre' },
        cEmail: { label: 'Email', placeholder: 'Introduzca su Email' },
        cPhone: { label: 'Telefono', placeholder: 'Introduzca su telefono' },
        cSubject: { label: 'Asunto', placeholder: 'Introduzca el asunto de su Mensaje' },
        cMessage: { label: 'Mensaje', placeholder: 'Introduzca su Mensaje' },
        btn: 'Contactame'
    }
}

export default FormData