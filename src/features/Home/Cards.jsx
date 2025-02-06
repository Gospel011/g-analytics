import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";
import Button from "../../ui/Button";

function Cards() {
  return (
    <section className="text-background bg-white px-4 py-[10rem]">
      {/* GRID CONTAINER FOR THE 3 CARDS */}
      <div className="mx-auto grid max-w-[1240px] gap-8 py-10 md:grid-cols-3">
        {/* CARD COMPONENT */}
        <div className="my-4 flex flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-white"
            src={Single}
            alt=""
          />
          <h2 className="py-8 text-center text-2xl font-bold">Single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <ul className="flex flex-col divide-y divide-gray-300 text-center font-medium">
            <li className="mt-8 py-2">500 GB Strorage</li>
            <li className="py-2">1 Granted User</li>
            <li className="py-2">Send up to 2 GB</li>
          </ul>

          <Button className={"w-[200px] self-center"}>Start Trial</Button>
        </div>
        {/* CARD COMPONENT */}
        <div className="my-4 flex flex-col rounded-lg bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="py-8 text-center text-2xl font-bold">Single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <ul className="flex flex-col divide-y divide-gray-300 text-center font-medium">
            <li className="mt-8 py-2">500 GB Strorage</li>
            <li className="py-2">1 Granted User</li>
            <li className="py-2">Send up to 2 GB</li>
          </ul>

          <Button className={"w-[200px] self-center"}>Start Trial</Button>
        </div>
        {/* CARD COMPONENT */}
        <div className="my-4 flex flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105">
          <img
            className="mx-auto mt-[-3rem] w-20 bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="py-8 text-center text-2xl font-bold">Single user</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <ul className="flex flex-col divide-y divide-gray-300 text-center font-medium">
            <li className="mt-8 py-2">500 GB Strorage</li>
            <li className="py-2">1 Granted User</li>
            <li className="py-2">Send up to 2 GB</li>
          </ul>

          <Button className={"w-[200px] self-center"}>Start Trial</Button>
        </div>
      </div>
    </section>
  );
}

export default Cards;
