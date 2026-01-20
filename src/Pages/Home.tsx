import Card from "../Components/Card";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";

// UPDATE CARDS HERE TO ADD MORE FEATURES
type CardInfo = {
  image: React.ReactNode;
  text: string;
  description: string;
  loc: string;
};
const cardInfoArray: CardInfo[] = [
  {
    image: <BsGraphUpArrow />,
    text: "Investment Calculator",
    description:
      "Project future remains for your lump sum or SIP investment. Make informed decisions and watch your wealth grow",
    loc: "invest",
  },
  {
    image: <FaChartPie />,
    text: "(WIP) Budgeting Tool",
    description:
      "Take control of your finances, Input your income, choose a budgeting rule and get a clear breakdown of your spending",
    loc: "/",
  },
];

function Home() {
  return (
    <>
      <main className=" flex flex-col items-center">
        <section className="text-center mb-8 max-w-3xl animate-fade-down animate-ease-out">
          <h1 className="text-4xl md:text-7xl font-bold">
            Welcome to FinSight
          </h1>
          <p className="text-lg md:text-2xl max-w-md md:max-w-3xl text-muted dark:text-darkSecondary">
            Your personal finance companion. Seamlessly track investments and
            manage your budget with our powerful, easy-to-use tools.
          </p>
        </section>
        {/* CARD PAGE */}
        <section className="flex flex-col md:flex-row gap-7 animate-fade-up animate-ease-out">
          {cardInfoArray.map((i, index) => {
            return (
              <Card
                key={index}
                image={i.image}
                title={i.text}
                description={i.description}
                loc={i.loc}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
