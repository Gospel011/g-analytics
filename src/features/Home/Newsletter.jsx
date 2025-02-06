import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function Newsletter() {
  return (
    <section className="px-4">
      <div className="mx-auto grid max-w-[1240px] py-16 lg:grid-cols-3">
        <div className="place-self-center lg:col-span-2">
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>

        <div>
          <div className="my-4 flex flex-col items-center gap-4 sm:flex-row">
            <input
              type="email"
              name="email"
              placeholder="Enter you email"
              className="placeholder:text-background/30 text-background w-full rounded-md bg-white px-3 py-4"
            />

            <Button className={"sm:w-[200px]"}>Notify me</Button>
          </div>
          <p>
            We care about the privacy of your data. Read our{" "}
            <Link to="/" className="text-dark-green text-nowrap underline">
              privacy policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
