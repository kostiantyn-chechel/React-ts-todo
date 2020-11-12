import React from 'react';
import { useHistory } from 'react-router-dom'

const AboutPages: React.FC = (props) => {
    const history = useHistory();
    return (
        <div>
            <h1>ABOUT</h1>
            <p>О сколько нам открытий чудных</p>
            <p>Готовят просвещенья дух</p>
            <p>И опыт, сын ошибок трудных,</p>
            <p>И гений, парадоксов друг,</p>
            <p>И случай, бог изобретатель.</p>

            <button className='btn' onClick={() => history.push('/')}>
                вернуться к списку
            </button>
        </div>
    );
}

export default AboutPages;