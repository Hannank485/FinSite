import { Link } from "react-router";

function Card({
  image,
  title,
  description,
  loc,
}: {
  image: React.ReactNode;
  title: string;
  description: string;
  loc: string;
}) {
  return (
    <Link to={loc}>
      <section className="flex flex-col items-left max-w-md border border-card p-6 rounded-md hover:-translate-y-3 hover:shadow-lg hover:bg-[#F1F5F9] dark:hover:bg-[#1F2933] transition-all ease-out dark:border-darkCard">
        <div className="flex text-2xl md:text-3xl font-bold gap-4 items-center mb-4">
          <h2 className="text-accent dark:text-darkAccent dark:bg-darkSoftBG bg-softBG p-3 rounded-md transition-all ease-in">
            {image}
          </h2>
          <h2>{title}</h2>
        </div>
        <p className="text-muted text-md dark:text-darkSecondary">
          {description}
        </p>
      </section>
    </Link>
  );
}

export default Card;
