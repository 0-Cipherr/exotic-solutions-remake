import { FaDiscord, FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";

function Quote() {
  return (
    <div className="hidden md:block text-white m-auto  m-auto  h-full  ">
      <img
        src="https://avatars.githubusercontent.com/u/197652733?v=4"
        alt=""
        className="size-40 m-auto  border rounded-full"
      />
      <h1 className="text-[#e8dfcc]  text-lg w-90 text-center p-8  m-auto mt-auto">
        I’m a software developer passionate about building impactful technology,
        from full-stack applications to blockchain infrastructure. I enjoy
        tackling complex problems, exploring new ideas, and turning ambitious
        concepts into practical, scalable solutions. My focus is on writing
        clean, efficient code and building software that makes a difference.
      </h1>

      <div className=" flex justify-center    flex gap-3">
        <a href="https://telos-shs6494.slack.com/team/U0C8SD7RU78">
          <FaSlack className="text-[30px] text-orange-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-castillo-00129a425/"
          target="_blank"
        >
          <FaLinkedin className="text-[30px] text-blue-400 border rounded-md" />
        </a>{" "}
        <a href="https://discord.com/users/1562180668526436439" target="_blank">
          <FaDiscord className="text-[30px] text-blue-500" />
        </a>{" "}
        <a href="https://github.com/0-Cipherr" target="_blank">
          <FaGithub className="text-[30px] text-orange-400" />
        </a>
      </div>
    </div>
  );
}

export default Quote;
