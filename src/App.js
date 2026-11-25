import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card/Card.jsx'
import bo1 from './assets/bo1.jpg'
import bo2 from './assets/bo2.jpg'
import bo3 from './assets/bo3.jpg'
import './App.css'

function App(){
  return(
    <div className='main'>
      <Header/>
      <Card 
      view={bo1}
      nome="Call of Duty: Black Ops"
      link={"blackops"}/>
      <Card 
      view={bo2}
      nome="Call of Duty: Black Ops II"
      link={"blackops2"}/>
      <Card 
      view={bo3}
      nome="Call of Duty: Black Ops III"
      link={"blackops3"}/>
      <Footer/>
    </div>
  )
}

export default App;
