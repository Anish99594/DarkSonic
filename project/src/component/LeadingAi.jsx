function LeadingAi() {
       return (
         <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-12 md:py-20">
           {/* Heading Section */}
           <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-gray-900">
             Leading AI Assistant in Banking Industry
           </h1>
           <p className="text-gray-600 text-center mt-3 max-w-2xl">
           DarkSonic is a leading conversational AI assistant in the banking industry. 
             Try our application today to get assistance on your ongoing projects & tasks.
           </p>
     
           {/* Features Section */}
           <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
             
             {/* Feature 1 */}
             <div className="bg-red-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
               <img src="https://enterprisersproject.com/sites/default/files/styles/large/public/images/CIO%20Hands%20Collaboration.png?itok=-kMRdaL5" 
                    alt="Collaboration Icon" className="w-16 h-16" />
               <h3 className="text-lg sm:text-xl font-semibold mt-4">Collaborative & Innovative</h3>
               <p className="text-gray-600 mt-2">
                 We believe in the power of teamwork, where diverse perspectives merge 
                 to fuel creativity and drive progress.
               </p>
             </div>
     
             {/* Feature 2 */}
             <div className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
               <img src="https://static-00.iconduck.com/assets.00/puzzle-piece-emoji-2048x2048-1jtxsstl.png" 
                    alt="Insights Icon" className="w-16 h-16" />
               <h3 className="text-lg sm:text-xl font-semibold mt-4">Actionable Insights</h3>
               <p className="text-gray-600 mt-2">
                 Through advanced analytics & cutting-edge technology, we uncover 
                 valuable patterns, trends, and opportunities.
               </p>
             </div>
     
             {/* Feature 3 */}
             <div className="bg-green-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
               <img src="https://img.icons8.com/emoji/96/light-bulb-emoji.png" 
                    alt="Efficiency Icon" className="w-16 h-16" />
               <h3 className="text-lg sm:text-xl font-semibold mt-4">Efficiency & Accuracy</h3>
               <p className="text-gray-600 mt-2">
                 We prioritize streamlining processes & leveraging the latest technologies 
                 to ensure maximum productivity & precision.
               </p>
             </div>
           </div>
         </div>
       );
     }
     
     export default LeadingAi;
     