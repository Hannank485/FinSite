import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function ErrorPage() {
  const [second, setSecond] = useState<number>(5);
  const navigate = useNavigate();
  useEffect(() => {
    if (second === 0) {
      navigate("/", { replace: true });
    }
    const counter = setTimeout(() => {
      setSecond((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(counter);
  }, [second]);
  return (
    <>
      <main className=" flex flex-col items-center">
        <section className="text-center mb-8 max-w-3xl animate-fade-down animate-ease-out">
          <h1 className="text-4xl md:text-9xl font-bold text-accent dark:text-darkAccent">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            Oops! Page Not Found
          </h2>
          <p className="text-md md:text-lg max-w-md md:max-w-3xl text-muted dark:text-darkSecondary">
            If you are not redirected in the next {second} seconds please click
            the button below
          </p>
          <Link to="/">
            <button className="mt-4 bg-softBG dark:bg-darkSoftBG px-3 py-2 rounded-md hover:bg-hover hover:text-white hover:dark:bg-darkHover hover:dark:text-primaryText transition-all ease-in cursor-pointer font-bold">
              Return Home
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}

export default ErrorPage;
