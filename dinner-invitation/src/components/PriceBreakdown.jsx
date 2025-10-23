export default function PriceBreakdown() {
    const data = [
      { name: "Forret", price: 526 },
      { name: "Hovedret", price: 1430 },
      { name: "Dessert", price: 860 },
    ];
  
    const total = 2816;
    const kok = 8100;
    const grandTotal = total + kok;
    const guests = 25;
    const perGuest = (grandTotal / guests).toFixed(2);
  
    return (
      <div className="bg-white shadow-md rounded-2xl p-6">
        <table className="w-full text-left border-separate border-spacing-y-2">
          <thead>
            <tr className="text-[#b8860b]">
              <th>Ret</th>
              <th>Pris (kr)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
            <tr className="font-semibold border-t">
              <td>I alt (mad)</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>+ Kokkens timeløn</td>
              <td>{kok}</td>
            </tr>
            <tr className="font-bold text-[#b8860b] border-t">
              <td>Samlet pris</td>
              <td>{grandTotal}</td>
            </tr>
            <tr className="font-bold border-t">
              <td>Pris pr. gæst (25 pers.)</td>
              <td>{perGuest} kr</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  