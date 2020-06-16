import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from "react-intl"
import './App.css';

function App() {
  const langs = ['en', 'es', 'fr', 'de']
  const [Locale, setLocale] = useState('en')
  let name = 'Heena'
  let messages = {
    en: {
      greeting: "Hello {name}! How are you?",
      time: "The time is {t, time, short}.",
      date: "The date is {d, date}."
    },
    es: {
      greeting: "¡Hola {name}! ¿Cómo estás?",
      time: "La hora es {t, time, short}.",
      date: "La fecha es {d, date}."
    },
    fr: {
      greeting: "Bonjour {name}! Comment ça va?",
      time: "Il est {t, time, short}.",
      date: "La date est {d, date}."
    },
    de: {
      greeting: "Hallo {name}! Wie geht's?",
      time: "Es ist {t, time, short} Uhr.",
      date: "Das Datum ist {d, date}."
    }
  }

  

  let changeLang = (event) => {
    setLocale(event.target.value)
  }

  return (
    <div className="App">
      Languages : <select defaultValue={Locale} onChange={changeLang}>
        {
          langs.map(lang => (<option key={lang}>{lang}</option>))
        }
      </select><br /><br /> 

      <IntlProvider locale={Locale} messages={messages[Locale]}>
          <FormattedMessage id="greeting" values={{ name: name }} />
          <br />
          <FormattedMessage id="time" values={{ t: Date.now() }} />
          <br />
          <FormattedMessage id="date" values={{ d: Date.now() }} />
        </IntlProvider>
    </div>
  );
}

export default App;
