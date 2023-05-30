import React, { useEffect, useState } from 'react'
import langs from '../data/Language';

 const LangContext = React.createContext({
     lang:langs.en,
     selectedLanguage: 'En',
    changeLang: ()=>{},


});


    export const LanguageContextProvider = (props:any) => {
        const [lang, setLang] = useState(langs.en);
        const [selectedLanguage,setSelectedLanguage] = useState('Az');

        useEffect(()=>{
          const selectedLang = localStorage.getItem('selectedLanguage');
          const selectedLangObject = localStorage.getItem('selectedLanguageObject');
          if(selectedLang && selectedLangObject) {
            setSelectedLanguage(selectedLang);
            setLang(JSON.parse(selectedLangObject))
          }

        },[])

        const switchLang = () => {
            setSelectedLanguage(selectedLanguage === "En" ? 'Az' : 'En');
            lang === langs.en?setLang(langs.az):setLang(langs.en)
            localStorage.setItem('selectedLanguage',selectedLanguage ==="En" ? 'Az' : 'En' );
            localStorage.setItem('selectedLanguageObject' ,JSON.stringify(lang=== langs.en? langs.az:langs.en))
          }

    
          return (
            <LangContext.Provider 
            value={{
                lang: lang,
                selectedLanguage: selectedLanguage,
                changeLang:switchLang,

            }}>
                {props.children}
            </LangContext.Provider >
          )
    }


 




  
    

      export default LangContext;
 