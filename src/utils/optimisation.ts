import { Operateur, Palier, Plan } from "@/types/retrait";


const pgcd = (a: number, b: number): number => (b === 0 ? a : pgcd(b, a % b));

export function choisirPas(total: number): number {
  return pgcd(total, 1000);
}

export function OneWithdrawal(montant: number, paliers: Palier[]): number | null {
  const p = paliers.find((p) => montant >= p.min && montant <= p.max);
  return p ? p.frais : null;
}
export const optimiseWithdrawal = (total:number, operator:Operateur):Plan | null=>{

    const pas = choisirPas(total)
    const n = Math.round(total / pas)
    if (n <= 0)
        return null
    const cout:number[] = new Array(n + 1).fill(Infinity)
    const choice:number[] = new Array(n + 1).fill(0)
    cout[0] = 0
    for(let i= 1; i <= n; i++)
    {
        for(let j=1; j<=i; j++)
        {
            if (cout[i - j] == Infinity) continue
            const frais = OneWithdrawal(j * pas, operator.paliers)
            if (frais == null) continue
            const canditat = cout[i - j] + frais
            if (canditat < cout[i]){
                cout[i] =canditat
                choice[i] = j 
            }
        }
    }
    if (cout[n] == Infinity) return null
    const  montants:number[] = []
    let rest = n;
    while (rest > 0)
    {
        montants.push(choice[rest] * pas)
        rest -= choice[rest]
    }
    return {montants:montants.sort((a,b)=>a-b), fraisTotal:cout[n]}
}