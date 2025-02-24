function LeadingAi() {
  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 pt-10 py-8 md:py-12 md:pt-32">
      {/* Heading Section */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-900">
        Leading AI Assistant for Blockchain Operations
      </h1>
      <p className="text-gray-600 text-center mt-3 max-w-2xl">
        DarkSonic is an advanced AI-powered blockchain assistant, enabling seamless interactions
        with the Sonic network. Execute transactions, check balances, and deploy smart contracts effortlessly.
      </p>

      {/* Features Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        
        {/* Feature 1 */}
        <div className="bg-red-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <img src="https://enterprisersproject.com/sites/default/files/styles/large/public/images/CIO%20Hands%20Collaboration.png?itok=-kMRdaL5" 
               alt="Blockchain Automation" className="w-16 h-16" />
          <h3 className="text-lg sm:text-xl font-semibold mt-4">Automated Blockchain Operations</h3>
          <p className="text-gray-600 mt-2">
            DarkSonic simplifies blockchain workflows by automating tasks such as transactions, 
            contract deployments, and wallet management.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <img src="https://static-00.iconduck.com/assets.00/puzzle-piece-emoji-2048x2048-1jtxsstl.png" 
               alt="AI-Powered Insights" className="w-16 h-16" />
          <h3 className="text-lg sm:text-xl font-semibold mt-4">AI-Powered Insights</h3>
          <p className="text-gray-600 mt-2">
            Get real-time insights into wallet balances, price feeds from Pyth Network, 
            and optimal swap routes via KyberSwap.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-green-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <img src="https://img.icons8.com/emoji/96/light-bulb-emoji.png" 
               alt="Secure & Efficient" className="w-16 h-16" />
          <h3 className="text-lg sm:text-xl font-semibold mt-4">Secure & Efficient Transactions</h3>
          <p className="text-gray-600 mt-2">
            Execute blockchain transactions with speed and accuracy while ensuring 
            maximum security and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeadingAi;