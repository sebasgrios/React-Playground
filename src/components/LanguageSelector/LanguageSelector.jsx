import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation('global');

    const handleChangeLanguage = e => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div>
            <select name='language' id='language' onChange={handleChangeLanguage}>
                <option value='en'>🇬🇧 English</option>
                <option value='es'>🇪🇸 Español</option>
            </select>
        </div>
    );
};

export default LanguageSelector;