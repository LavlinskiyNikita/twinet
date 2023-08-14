'use client'

import Post from "./component/Post/Post"
import Popup from "./component/Popup/Popup"
import MiniProfile from "./component/MiniProfile/MiniProfile"
import Button from "./component/UI/button/Button"
import { useState } from "react"
import Input from "./component/Input/Input"



export default function Home() {

  const [visualModel, setVisualModal] = useState(false)

  return (
    <>
      <div className="home">
        <div className="home__twin">
          <div className="home__person">
            <div className="home__person-avatar">
              <img src="" width={36} height={36} alt="" className="home__img"/>
            </div>
            <div className="home__write">Write...</div>
          </div>
          <Button onClick={() => setVisualModal(true)} >twin</Button>
        </div>
        <div className="home__post">
        </div>
      </div>
      <MiniProfile/>
      {
        visualModel ? <Popup setModal={setVisualModal}>
          <form action="post">
            <Input placeholder='видите текст'/>
            <Input placeholder='вставтье ссылку на изображения'/>
            <Button type="submit">отправить</Button>
          </form>
        </Popup> : undefined
      }
    </>
  )
}
