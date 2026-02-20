import Button from "./components/Button";
// function HomePage() {
//   return(
//     <>
//     <h1>Hello, World</h1>
//     </>
//   )
// }


// export default HomePage;

const HomePage = () => {
  return (
    <>
    <h1 style={{backgroundColor: 'black', fontSize:'2em'}}> Home Page</h1>
    <h2>Home Page</h2>
    <Button text='Hubungi Kami' width={'100px'} height={'200px'}></Button>
    <Button text='Kontak Wa Kami' width={'50px'} height={'80px'}></Button>
    </>
  )
}

export default HomePage ;