import classes from "./page.module.css";
import Baner from "@/components/Homepage/Baner";
import About from "@/components/Homepage/About";
import Contact from "@/components/Homepage/Contact";
import Portfolio from "@/components/Homepage/Portfolio";
import Exhibitions from "@/components/Homepage/Exhibitions";

export default function Home() {
  return (
    <div className={classes.page}>
      <main>
        <Baner />
        <About />
        <Portfolio />
        <Exhibitions />
      </main>
      <Contact />
    </div>
  );
}
