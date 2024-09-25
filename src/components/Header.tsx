import { Link } from "react-router-dom";
import Button from "./Button";
import Container from "./Container";
import { Search } from 'lucide-react';
const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center justify-between min-h-[--header-row-height]">
          <a href="/" className="flex h-11 items-center px-6 -ml-6">
            🏏<span className="sr-only">Back to homepage</span>
          </a>
          <div className="flex gap-6">

          <a href="/">Live Scores</a>
          <a href="/">Network</a>
          <a href="/">Jobs</a>
          <a href="">Contact Us</a>
          <a href="/register">
            <Search size={20}/>
          </a>
          </div>
        </Container>
      </header>
      <div className="bg-backgroundContrast  text-white sticky top-0 z-[100] shadow-[1px_20px_40px_5px_#111]">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">CricketBuzz 🏏</p>
          <Link to={"/register"}>
            <Button size="small">Register</Button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Header;
