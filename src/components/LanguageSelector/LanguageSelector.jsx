import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation('global');
    const currentLanguage = localStorage.getItem('i18nextLng');
    const allLanguages = [
        {
            text: '🇬🇧 English',
            value: 'en-GB'
        },
        {
            text: '🇪🇸 Español',
            value: 'es-ES'
        },
    ]

    const handleChangeLanguage = e => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div>
            <select 
                name='language' 
                id='language' 
                onChange={handleChangeLanguage}
                value={currentLanguage}
            >
                {allLanguages.map(lng =>
                    <option
                        key={lng.value}
                        value={lng.value}
                        disabled={currentLanguage === lng.value}
                    >
                        {lng.text}
                    </option>
                )}
            </select>
        </div>
    );
};

export default LanguageSelector;