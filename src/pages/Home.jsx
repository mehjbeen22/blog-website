import CustomerReviews from './CustomerReviews';
import Disclaimer from './Disclaimer';
import PrinterSetup from './PrinterSetup';
import PrinterSetupMethod from './PrinterSetupMethod';

const Home = () => {
  return (
    <>
      <main className="relative h-[80vh] bg-pink-100">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://select-printer.com/wp-content/uploads/2021/05/hp-printer-1536x864.jpg')",
          }}
        ></div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full p-8 space-y-8 lg:space-y-0 lg:space-x-8">
          <section className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              className="max-w-full h-auto rounded-lg shadow-lg"
              src="https://select-printer.com/wp-content/uploads/2021/05/hp-printer-1536x864.jpg"
              alt="Printer"
            />
          </section>

          <section className="w-full lg:w-1/2 text-center lg:text-left p-8 rounded-lg ">
            <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
            <p className="text-lg">
              A printer is a device that has over the years grown to be
              essential in every office and household. Having printed copies can
              help make documents more vivid and creative. Today everybody can
              be seen using a printer for school projects, presentations and
              even to create posters and maps.
            </p>
          </section>
        </div>
      </main>
      <PrinterSetup />
      <PrinterSetupMethod />
      <CustomerReviews />
      <Disclaimer />
    </>
  );
};

export default Home;
