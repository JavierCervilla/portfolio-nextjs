import { useState, useEffect } from 'react'
import Head from 'next/head'

// DATA
import FormData from '../data/FormData'

//COMPONENTES
import ContactForm from '../components/ContactForm'
import MainLayout from '../layouts/MainLayout'
import MainSection from '../sections/MainSection'
import Loader from '../components/Loader'


export default function Contact({ data }) {
    const [formData, setFormData] = useState(false)


    useEffect(() => {
        if (!formData) {
            const search = location.search.split('=')[1];
            setFormData(search === 'es' ? data.es : data.en)
        }
        console.log(data)
    }, [data])


    if (!formData) {
        return <Loader />
    }
    return (
        <MainLayout >
            <MainSection>
                <ContactForm data={formData} />
            </MainSection>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const en = FormData()
    const es = FormData('es')

    const data = { en, es }
    return {
        props: { data }
    }
}