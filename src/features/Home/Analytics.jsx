import Laptop from "../../assets/laptop.jpg";
import Button from "../../ui/Button";

function Analytics() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="laptop" />
        <div className="text-background flex flex-col items-center justify-center">
          <p className="text-dark-green font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            ratione iure eius ex voluptatibus molestias excepturi facere,
            suscipit blanditiis expedita officiis eos illo ea. Aspernatur, in?
            Eligendi tenetur iusto dolorem!
          </p>

          <Button>Get started</Button>
        </div>
      </div>
    </section>
  );
}

export default Analytics;
