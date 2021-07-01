import Navbar from "./components/navBar";
import Link from "./components/link";

function App() {
  return (
    <>
      <Navbar />
      <section className="relative mt-4 mb-8">
        <article className="w-full px-2 text-center">
          <img
            class="h-24 w-24 rounded-full mx-auto border-4 border-blue-900"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Perfil"
          />
          <span className="text-lg font-bold text-blue-900">
            Mark Zunkenber Glez
          </span>
        </article>
      </section>
      <section className="grid grid-cols-1 px-2 mt-4 mb-8 md:mx-auto md:grid-cols-2">
        <Link />
        <Link />
        <Link />
      </section>
      <section className="flex w-full px-2 mt-4 mb-4 md:w-96 md:mx-auto">
        <span className="w-full font-bold text-blue-900">Follow me</span>
        <img
          src="statics/img/icons/facebook.png"
          title="Facebook"
          alt="Facebook"
          className="w-8 h-8 mx-1"
        />
        <img
          src="statics/img/icons/linkedin.png"
          title="LinkedIn"
          alt="LinkedIn"
          className="w-8 h-8 mx-1"
        />
        <img
          src="statics/img/icons/whatsapp.png"
          title="WhatsApp"
          alt="WhatsApp"
          className="w-8 h-8 mx-1"
        />
        <img
          src="statics/img/icons/youtube.png"
          title="YouTube"
          alt="YouTube"
          className="w-8 h-8 mx-1"
        />
      </section>
    </>
  );
}

export default App;
