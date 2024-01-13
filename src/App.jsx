import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import { ContactHeader } from './components/ContactHeader/ContactHeader.jsx'
import { ContactForm } from './components/ContactForm/ContactForm.jsx'

function App() {

  return (
    <div className='contact-page'>
      <Navigation />
      <main className='main_container'>
        <ContactHeader /> <br/>
        <ContactForm />
      </main>
      
    </div>
  )
}

export default App
