import { useState } from 'react'
import { Card } from './components/Card'
import { Message } from './components/Message'
import { baseUrl, keyApi, imgUrl } from './config/api'
import Logo from './assets/icon/icon-logo.svg'
import PosterMessage from './assets/img/poster-message.svg'

const message = {
  photo: PosterMessage,
  message: "Ops, hoje não é dia de assistir filme. Bora codar! 🚀"
}

function App() {
  const [movie, setMovie] = useState([])
  const [openCard, setOpenCard] = useState(false)
  const [openAviso, setOpenAviso] = useState(false)

  async function initApi() {
      const getRandom = Math.floor(Math.random() * 2000)
      console.log(getRandom)
      const response = await fetch(`${baseUrl}${getRandom}?api_key=${keyApi}&language=pt-BR`)
      const data = await response.json()
      const movies = await data

      if(movies.original_title === undefined || movies.poster_path === null) {
        console.log(movies.poster_path)
        setOpenAviso(true)
        setOpenCard(false)
        return
      }

      setMovie(movies)
      setOpenCard(true) 
      setOpenAviso(false)
  }

  return (
      <main className="main">

        <div className="header_title">
          <img src={Logo} alt="" />
          <h1>Não sabe o que assistir?</h1>
        </div>

        {openCard && 
          <Card 
            photo={imgUrl + movie.poster_path} 
            title={movie.title}
            overview={movie.overview}
          />
        }

        {openAviso &&
            <Message 
              photo={message.photo} 
              message={message.message}
            />
        }

        <div className="button_generetor">
          <button onClick={initApi}>
            <img src={Logo} alt="" />
            Encontrar filme
          </button>
        </div>

        <div className="text_information">
          <p>Clique em "Encontrar filme" que traremos informações de algum filme para voçê assistir hoje</p>
        </div>

      </main>
  )
}

export default App
