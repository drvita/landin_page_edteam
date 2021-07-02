import Navbar from "./components/navBar";
import Link from "./components/link";
import data from "./db/profile.json";
import Contact from "./components/contact";

function App() {
  //console.log("[DEBUG] Render ::: ", data);
  return (
    <>
      <Navbar />
      <section className="relative mt-4 mb-8">
        <article className="w-full px-2 text-center">
          <img
            className="h-24 w-24 rounded-full mx-auto border-4 border-blue-900"
            src={data.image}
            alt={data.name}
          />
          <span className="text-lg font-bold text-blue-900">
            {data.name}
          </span>
        </article>
      </section>
      {data.custom_data.length ? (
        <section 
          className={data.custom_data.length === 1 ? "px-2 mt-4 mb-8 md:mx-auto w-full md:w-1/2" : "grid grid-cols-1 px-2 mt-4 mb-8 md:mx-auto md:grid-cols-2"}>
        {data.custom_data.map( (custom, index) => {
          return (
            <Link key={index} title={custom.title} url={custom.url} description={custom.description} />
          );
        })}
        </section>
      ) : null}

      {data.social.length ? (
        <section className="flex w-full px-2 mt-4 mb-4 md:w-96 md:mx-auto">
          <span className="w-full font-bold text-blue-900">Follow me</span>
          {data.social.map( (red, index) => {
            return (
              <a key={index} href={red.link} target="_blank" rel="noreferrer" className="mx-4 md:mx-2 inline">
                <img
                  src={`statics/img/icons/${red.name}.png`}
                  alt={red.name}
                  className="w-16 h-8"
                />
              </a>
            );
          })}
        </section>
      ) : null}

      {data.contacts.length ? (
        <section className="w-full md:w-1/2  grid grid-cols-1 px-2 my-16 mx-auto">
          <span className="w-full font-bold text-indigo-600 text-center text-2xl">Contact me</span>
          {data.contacts.map( (contact, index) => {
            return (
              <Contact key={index} type={contact.type} value={contact.value} /> 
            );
          })}
        </section>
      ) : null}
    </>
  );
}

export default App;
