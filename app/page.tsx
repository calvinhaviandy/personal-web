import Home from "./layouts/home";
import About from "./layouts/home/about";
import Featured from "./layouts/home/featured";
import Summaries from "./layouts/home/summaries";
import Tools from "./layouts/home/tools";
import Achievement from "./layouts/home/achievement";

export default function page() {
  const desc = `
Hi, I’m a passionate web developer and designer who loves turning ideas into interactive, user-friendly websites. With a strong foundation in both programming and design, I focus on building digital experiences that are not only functional but also visually engaging.

From front-end interfaces to back-end logic, I enjoy every part of the web development process. I believe that good design is just as important as clean code—and I always aim to balance both in every project I take on.

Let’s build something great together.
`;

  return (
    <div className="container mx-auto flex flex-col gap-20">
      <Home
        greeting="Hello, I`m"
        name="Calvin Valeon Haviandy"
        image="./image/profile/IMG_5059.JPG"
        passion={["Fullstack Developer", "Web 3 Enthusiast", "UI/UX Designer"]}
        description="I'm a passionate Fullstack Developer focused on building
            interactive ui."
        sm={[
          {
            icon: "mdi:github",
            link: "https://github.com/calvinhaviandy",
          },
          {
            icon: "mdi:linkedin",
            link: "https://www.linkedin.com/in/calvinhaviandy/",
          },
          {
            icon: "mdi:instagram",
            link: "https://www.instagram.com/calvinhaviandy/",
          },
          {
            icon: "mdi:gmail",
            link: "https://www.facebook.com/calvinhaviandy/",
          },
        ]}
      />
      <About desc={desc} />
      <Summaries />
      <Featured />
      <Achievement />
      <Tools />
    </div>
  );
}
