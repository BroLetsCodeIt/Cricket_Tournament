import Container from "../Container"
import FadeIn from "../fade-in"

const Usps = () => {
  return (
    <Container className="text-4xl font-bold text-white space-y-12 pt-[12rem] relative z-10 pb-40">
        <FadeIn>
            <p>Making grassroots cricket better; one match at a time.</p>
        </FadeIn>
        <FadeIn>
             <p>Get instant updates on ongoing matches with live Scoring.</p>
        </FadeIn>
        <FadeIn>
            <p>Seamlessly Organise Tournaments and plan them better.</p>
        </FadeIn>
        <FadeIn>
            <p>Enter the world of the entire Cricket Community and unite with them.</p>
        </FadeIn>
    </Container>
  )
}

export default Usps
