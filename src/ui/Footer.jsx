import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-16 text-gray-300 lg:grid-cols-3">
      {/* GRID ITEM 1 */}
      <div>
        <Logo />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus
          mollitia corrupti aliquid eius? Culpa exercitationem natus blanditiis
          possimus asperiores dolores nam, qui consequuntur nihil deleniti
          aliquam, ullam ipsum commodi?
        </p>

        <ul className="my-6 flex justify-between md:w-[75%]">
          <li>
            <FaFacebookSquare size={30} />
          </li>
          <li>
            <FaInstagram size={30} />
          </li>
          <li>
            <FaTwitterSquare size={30} />
          </li>
          <li>
            <FaGithubSquare size={30} />
          </li>
          <li>
            <FaDribbbleSquare size={30} />
          </li>
        </ul>
      </div>

      {/* GRID ITEM 2 */}
      <div className="flex justify-between lg:col-span-2 mt-2">
        {/* OPTION 1 */}
        <div>
          <h3 className="mb-2 font-medium text-gray-400">Solutions</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* OPTION 2 */}
        <div>
          <h3 className="mb-2 font-medium text-gray-400">Sport</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>Api Status</li>
          </ul>
        </div>

        {/* OPTION 3 */}
        <div>
          <h3 className="mb-2 font-medium text-gray-400">Company</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* OPTION 4 */}
        <div>
          <h3 className="mb-2 font-medium text-gray-400">Legal</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Claim</li>
            <li>Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Footer;
