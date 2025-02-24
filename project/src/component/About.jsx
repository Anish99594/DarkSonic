import rocket from '../Assets/rocketimageaiagent.png';
import project from '../Assets/project.png';

function About() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-10 py-16" style={{ marginBottom: '-200px' }}>
      {/* Heading & Description */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About DarkSonic
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          DarkSonic is an AI-powered blockchain assistant designed to interact
          with the Sonic network. It leverages OpenAI's GPT-4o-mini model to
          provide a conversational interface for executing blockchain operations.
        </p>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          From checking wallet balances to deploying smart contracts, DarkSonic
          enables seamless blockchain interactions with natural language commands.
          It integrates with Pyth Network for real-time price feeds and KyberSwap
          for token swaps.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* AI-Powered Blockchain Assistant */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-lg md:text-xl font-bold text-blue-700">
            AI-Powered Blockchain Assistant ↗
          </h3>
          <img
            src={project}
            alt="AI Blockchain Assistant"
            className="mt-4 rounded-xl shadow-sm w-full"
          />
        </div>

        {/* Transaction & Smart Contract Management */}
        <div className="bg-purple-100 p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Transaction & Contract Management
          </h3>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            ⚡ Easily check wallet balances & send transactions.
          </p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            ⚡ Deploy ERC20 tokens & interact with smart contracts.
          </p>
        </div>

        {/* Fast & Secure Operations */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            Fast & Secure Operations
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
