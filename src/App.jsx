import Card from "./components/card";
import "./App.css";
import BasicTimeline from "./components/Timeline";
import Hero from "./components/Hero";
import Button from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Hero></Hero>
      <Skills></Skills>
      <BasicTimeline />
      <Card></Card>
      <Button></Button>
    </>
  );
}

export default App;
