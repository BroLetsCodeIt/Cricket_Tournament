import Container from "./components/Container";
import Header from "./components/Header";
import Contact from "./components/section/Contact";
import CricketBall from "./components/section/CricketBall";
import Foldable_Card from "./components/section/Foldable_Card";
import Footer from "./components/section/Footer";
import Hero from "./components/section/Hero";
import Usps from "./components/section/Usps";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        {/* <VideoCarsouel /> */}

        <div className="bg-background h-screen">
          <CricketBall />
        </div>
        <div className="h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] py-10">
          <Container className="text-black mx-auto max-w-[1130px] text-4xl font-semibold tracking-tighter">
            Contact
          </Container>
          <Foldable_Card />
        </div>
          <Contact/>
          <Footer/>
      </main>
    </>
  );
};

export default App;
