import Widget from "./Widget";
import { widgetSource } from "../helpers/widgetSource";

const HowItWorks = () => {
  return (
    <main className="bg-button md:h-[70vh] flex items-center">
      <section className="container mx-auto">
        <article className="text-center">
          <h1 className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl p-5">
            How it works
          </h1>
        </article>
        <article className="p-5 md:0 flex gap-4 md:gap-0 justify-between flex-wrap">
          {widgetSource.map((data) => (
            <Widget key={data.id} data={data} />
          ))}
        </article>
      </section>
    </main>
  );
};

export default HowItWorks;