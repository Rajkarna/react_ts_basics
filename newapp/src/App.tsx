import React from 'react'
import Greet from './components/Greet'
import PersonObj from './components/PersonObj'
import PersonList from './components/PersonList'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './components/Container'
import User from './components/state/User'
import Counter from './components/state/Counter'
import { ThemeContextProvider } from './components/context/ThemeContext'
import Box from './components/context/Box'
import User1 from './components/context/User1'
import { UserContextProvider } from './components/context/UserContext'
import InputRef from './components/Ref/InputRef'
import Listitems from './components/Gererics/Listitems'
import CustomButton from './components/html/CustomButton'

const App = () => {

  const names = {
    first: "raj",
    last: "kumar"
  }

  const newList = [
    {
      first: "raj",
      last: "kumar"
    },
    {
      first: "anjali",
      last: "naogthi"
    },
    {
      first: "laskhan",
      last: "reddy"
    }
  ]

  const handleClick = (event:React.MouseEvent<HTMLButtonElement>, id:number) => {
    console.log(event.target, "clicked",id);
    
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    
  }

  const styles = {
    border:"1px solid black",
    display:"inline-block"
  }
  return (
    <center>
      <Greet name='kumar' age={25} isLoading />
      <PersonObj names={names} />
      <PersonList newList={newList} />
      <Heading>this is heading</Heading>
      <Oscar><Heading>Raj Kumar</Heading></Oscar>
      <Button handleClick={handleClick}/>
      <Input value='' handleChange={handleChange} />
      <Container styles={styles} />

      {/* //usestate  */}
      <User />

      {/* usereducer  */}
      <Counter />

      {/* context provider  */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User1 />
      </UserContextProvider>

      {/* useref   */}
      <InputRef />

      <Listitems items={["raj","kumar","pithre"]} onClick={(item) => console.log(item)} />
      <Listitems items={[1,2,3]} onClick={(item) => console.log(item)}/>
      
      <CustomButton variant='primary' onClick={() => console.log("clicked")}> 
        Button click 
      </CustomButton>
     
    </center>
  )
}

export default App