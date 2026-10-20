import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSlack,
} from "react-icons/fa";

function Quote() {
  return (
    <div className="hidden md:block text-white m-auto  mt-auto  h-full  ">
      <img
        src="https://avatars.githubusercontent.com/u/197652733?v=4"
        alt=""
        className="size-40 m-auto"
      />
      <h1 className="text-[#e8dfcc]  text-lg w-90 text-center p-8  m-auto mt-auto">
        Turning ideas into reality through custom software development, creative
        problem-solving, and modern technology. From web applications and
        automation to unique digital products, every project combines clean
        code, thoughtful design, and practical functionality. Focused on
        building scalable, efficient, and user-friendly solutions with quality,
        performance, affordable pricing, and fast turnaround times.
      </h1>

      <div className=" flex justify-center    flex gap-3">
        <a href="https://telos-shs6494.slack.com/team/U0C8SD7RU78">
          <FaSlack className="text-[30px] text-orange-400" />
        </a>
        <a href="">
          <FaInstagram className="text-[28px] text-purple-500" />
        </a>
        <a href="">
          <FaLinkedin className="text-[30px] text-blue-400 border rounded-md" />
        </a>{" "}
        <a href="rcastillodev">
          <FaDiscord className="text-[30px] text-blue-500" />
        </a>{" "}
        <FaGithub className="text-[28px]" />
      </div>
    </div>
  );
}

export default Quote;
