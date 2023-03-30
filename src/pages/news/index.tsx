import NewsletterCard from '../componentes/NewsletterCard';
import ethportoImage from '../imgs/ethporto.jpeg';
import workshopFirebaseImage from '../imgs/workshopfirebase.jpeg'


import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import firebaseClient from '../api/firebase';

const News = () => {
    const news = [
        {
            title: 'Progamadores no ETHPorto',
            description: 'Alunos dos Cursos de Programador de Informática e Técnico de Comércio participaram no Hackathon no ETHPorto, evento que reuniu algumas das mais brilhantes mentes no desenvolvimento de projetos na área do Blockchain e Web3. Um evento que contou com a presença de mais de três centenas de programadores organizados em mais de três dezenas de equipas potenciou que os alunos da EPF obtivessem o 6° lugar com o projeto desenvolvido durante o evento. Surge assim, projeto Long-Lived, programado de raíz durante as 72h do evento, que permite aos pacientes armazenar e compartilhar os seus dados de saúde de forma segura e descentralizada entre os promotores de cuidados de saúde na Europa. A participação da EPF no ETHPorto, evento internacional, propiciou ainda o contacto com CEO de várias empresas que manifestaram um forte apoio e admiração pelo trabalho que desenvolvemos na escola.',
            image: ethportoImage
        },
        {
            title: 'Workshop de Firebase',
            description: 'O GDG - Google Developers Group do FUNDÃO organizou na Escola Profissional do Fundão o seu primeiro encontro sobre a temática Firebase. O evento decorreu num ambiente recriado para o efeito no espaço do curso de programador de informática. O encontro foi aberto ao público em geral e teve como objetivo reunir desenvolvedores interessados em aprender e compartilhar conhecimentos sobre Firebase, uma plataforma de desenvolvimento de aplicativos móveis e web que permite a criação de aplicativos de alta qualidade em menos tempo e com menos esforço. O evento contou com a participação de vários desenvolvedores locais que partilharam com os alunos da EPF presentes as suas experiências e projetos utilizando Firebase. O evento potencializou ainda uma sessão de networking e interação entre os participantes no período de almoço.',
            image: workshopFirebaseImage
        }
    ];
    const router = useRouter();
    useEffect(() => {
        const auth = getAuth(firebaseClient);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/');
            }
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogout = () => {
        const auth = getAuth(firebaseClient);
        auth.signOut();
    };

    return (
        <div>
            <nav>
                <button
                    className="mt-4 ml-3  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleLogout}
                >
                    Logout
                </button></nav>
            <div className="grid mt-3 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
                {news.map((item, index) => (
                    <NewsletterCard key={index} title={item.title} description={item.description} image={item.image} />
                ))}
            </div>
        </div>
    );
}

export default News;
