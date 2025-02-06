import { ReactTyped } from "react-typed";
import Button from "../../ui/Button";

function Hero() {
  return (
    <section className="flex h-dvh items-center justify-center text-center px-4">
      <div className="flex max-w-[800px] translate-y-[-96px] flex-col items-center justify-center">
        <p className="text-dark-green p-2 font-bold">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">
          GROW WITH DATA
        </h1>
        <div className="flex items-center justify-center gap-2 text-xl font-bold sm:text-4xl md:gap-4 md:text-5xl">
          <p className="py-4">Fast, flexible financing for</p>
          <ReactTyped
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Monitor your data analytics to increase your revenue for BTB, BTC &
          SASS platforms
        </p>

        <Button>Get started</Button>
      </div>
    </section>
  );
}

export default Hero;
