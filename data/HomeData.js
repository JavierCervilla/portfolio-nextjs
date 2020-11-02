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
            subtitle: 'Here we do possible the impossible',
            p: 'Fugiat veniam quis amet sint duis nulla duis dolor occaecat labore eu cupidatat',
            img: 'me.jpg',
            linkedin: 'https://www.linkedin.com/in/javiercervilla/',
        }
    }
}

const HOME_ES = () => {
    return {
        query: '?lang=es',
        mainSection: {
            title: '¡Bienvenido a mi mundo!',
            subtitle: 'Aqui hacemos posible lo imposible',
            p: 'Fugiat veniam quis amet sint duis nulla duis dolor occaecat labore eu cupidatat',
            img: 'me.jpg',
            linkedin: 'https://www.linkedin.com/in/javiercervilla/',
        }
    }
}

export default HomeData