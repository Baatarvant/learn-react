import { Skill } from "../components/Skill";
import { JavascriptIcon } from "../components/icons/JavascriptIcon";
import { TypescriptIcon } from "../components/icons/TypescriptIcon";

const skills = [
  {
    id: 1,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 2,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 3,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 4,
    name: "Javascrip",
    icon: <TypescriptIcon />,
  },
  {
    id: 5,
    name: "Javascrip",
    icon: <JavascriptIcon />,
  },
  {
    id: 6,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 7,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 8,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 9,
    name: "Javascrip",
    icon: <TypescriptIcon />,
  },
  {
    id: 10,
    name: "Javascrip",
    icon: <JavascriptIcon />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      {skills.map((skill) => {
        const { id, ...other } = skill;
        return (
          <div key={id} className="justify-self-center">
            <Skill {...other} />
          </div>
        );
      })}
    </div>
  );
}

// es6
const obj = {
  a: 1,
};

const copyObj = { ...obj };
