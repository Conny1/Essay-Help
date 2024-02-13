import Header from "./components/Header";

export default function Home() {
  return (
    <main className=" min-h-screen   ">
      <section
        id="home"
        className="bg-[url('../../public/images/header.jpg')] bg-center bg-cover"
      >
        <div className="bg-gray-900 bg-opacity-70 ">
          <div className="  w-full flex items-center justify-center text-white  ">
            <Header />
          </div>
        </div>
      </section>
    </main>
  );
}
