import { useMemo, useState } from 'react';
// console.time('process')
export default function useMemoPage () {
    function fibonacci (n : number): number {
        if (n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-1); 

    }

    const [number, setNumber] = useState<number>(0);

    // memoization

    const FibResult = useMemo(() => fibonacci((number), [number]));

    
    return (
        <>
        <div>
            <h1>Perhitungan Fibonacci bos</h1>
            <input className="border" type='number'
            onChange={e => setNumber (Number(e.target.value))}/>
            <p>Hasil bilangan fiboaccinya adalah : {FibResult}</p>
        </div>
        
        </>
    )
}




// const fibonacci = (n: number): number => {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// const useMemoPage: React.FC = () => {
//   const [number, setNumber] = useState<number>(0);

//   // Perhitungan dilakukan setiap render, tanpa useMemo
//   const fibResult = fibonacci(number);

//   return (
//     <div>
//       <h1>Fibonacci Tanpa useMemo (React + TypeScript)</h1>
//       <input
//         type="number"
//         value={number}
//         onChange={e => setNumber(Number(e.target.value))}
//         placeholder="Masukkan angka"
//       />
//       <p>Hasil Fibonacci: {fibResult}</p>
//     </div>
//   );
// };
// console.timeEnd('process')
// export default useMemoPage;