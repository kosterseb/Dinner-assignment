export default function SeatingPlan() {
    // Each table = 2m long, each guest = 65cm space
    const guests = 25;
    const seats = Array.from({ length: guests }, (_, i) => i + 1);
  
    return (
      <div className="flex flex-col items-center space-y-12">
        <p className="text-gray-600 max-w-lg text-center">
          Hver gæst har 65 cm plads. Hvert bord er 2 m langt og 60 cm bredt.
          Bordene danner en elegant U-form for 25 gæster.
        </p>
  
        <div className="relative bg-[#fffaf0] border border-gray-300 rounded-xl p-8 shadow-inner">
          {/* Top tables */}
          <div className="flex justify-center gap-2 mb-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-6 bg-[#b8860b]/20 rounded"></div>
            ))}
          </div>
  
          <div className="flex justify-between w-full">
            {/* Left side */}
            <div className="flex flex-col justify-center gap-2">
              {[5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="w-6 h-20 bg-[#b8860b]/20 rounded"></div>
              ))}
            </div>
  
            {/* Center empty area */}
            <div className="w-64 h-64 bg-white rounded-xl shadow-inner flex items-center justify-center text-gray-400 italic">
              Plads til servering
            </div>
  
            {/* Right side */}
            <div className="flex flex-col justify-center gap-2">
              {[11, 12, 13, 14, 15, 16].map((i) => (
                <div key={i} className="w-6 h-20 bg-[#b8860b]/20 rounded"></div>
              ))}
            </div>
          </div>
  
          {/* Bottom tables */}
          <div className="flex justify-center gap-2 mt-2">
            {[17, 18, 19, 20, 21, 22, 23, 24, 25].map((i) => (
              <div key={i} className="w-32 h-6 bg-[#b8860b]/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  