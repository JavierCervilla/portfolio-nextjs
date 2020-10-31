const HeaderData = (lang) => {
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
        links: [
            {
                name: 'Home',
                href: '/'
            },
            {
                name: 'Projects',
                href: '/project'
            },
            {
                name: 'Contact',
                href: '/contact'
            }
        ]
    }
}

const HOME_ES = () => {
    return {
        query: '?lang=es',
        links: [
            {
                name: 'Inicio',
                href: '/'
            },
            {
                name: 'Proyectos',
                href: '/project'
            },
            {
                name: 'Contact',
                href: '/contact'
            }
        ]
    }
}

export default HeaderData
