import Home from "../pages";

const HomeData = (lang) => {
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
        mainSection: {
            title: 'Welcome to my World!',
            subtitle: 'Here we do possible the impossible'
        }

    }
}

const HOME_ES = () => {
    return {
        query: '?lang=es',
        mainSection: {
            title: '¡Bienvenido a mi mundo!',
            subtitle: 'Aqui hacemos posible lo imposible'
        }
    }
}

export default HomeData