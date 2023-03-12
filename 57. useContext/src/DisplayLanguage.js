import { useContext } from "react";
import { LanguageContext } from './LanguageContext'
const Strings = {
    EN: { LANG: 'The language is English' },
    IT: { LANG: 'La lingua è Italiano' },
}

const DisplayLanguage = () => {
    const language = useContext(LanguageContext)
    return (
        <div>
            <h1>{Strings[language].LANG}</h1>
        </div>
    )
}

export default DisplayLanguage;