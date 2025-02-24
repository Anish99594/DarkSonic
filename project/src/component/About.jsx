import rocket from '../Assets/rocketimageaiagent.png';
import project from '../Assets/project.png';

function About() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-10 py-16">
      {/* Heading & Description */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About the tool
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
         DarkSonic develops AI-based applications that help
          employees/stakeholders find answers to queries from local documents.
          Works as SaaS or on-prem tool.
        </p>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Many queries require exploring multiple large documents, which is
          time-consuming. This tool provides reference pointers along with
          answers, enhancing efficiency.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* AI Search */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-lg md:text-xl font-bold text-blue-700">
            Smart AI Search ↗
          </h3>
          <img
            src={project}
            alt="Smart AI Search"
            className="mt-4 rounded-xl shadow-sm w-full"
          />
        </div>

        {/* Track & History */}
        <div className="bg-purple-100 p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Keep Track & History
          </h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            📌 List of call center locations & contacts.
          </p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            📌 How can I take a loan in a local bank?
          </p>
        </div>

        {/* Fast Response */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Fast & Smooth Response
          </h3>
          <img
            src={rocket}
            alt="Rocket"
            className="mt-6 w-24 md:w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
