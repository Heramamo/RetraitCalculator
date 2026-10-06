import { Operateur, Palier, Plan } from "@/types/retrait";


const pgcd = (a: number, b: number): number => (b === 0 ? a : pgcd(b, a % b));

export function choisirPas(total: number): number {
    return pgcd(total, 1000);
}

export function OneWithdrawal(montant: number, paliers: Palier[]): number | null {
    const p = paliers.find((p) => montant >= p.min && montant <= p.max);
    return p ? p.frais : null;
}

export const optimiseWithdrawal = (total: number, operator: Operateur): Plan | null => {
    if (!Number.isFinite(total) || total <= 0 || total % 100 !== 0) return null;
    const pas = choisirPas(total);
    const n = total / pas;
    const candidats = operator.paliers
        .map((p) => ({ x: Math.floor(p.max / pas), frais: p.frais }))
        .filter((c) => c.x > 0);
    const cout = new Float64Array(n + 1).fill(Infinity);
    const choice = new Int32Array(n + 1);
    cout[0] = 0;
    for (let i = 1; i <= n; i++) {
        const direct = OneWithdrawal(i * pas, operator.paliers);
        if (direct !== null) {
            cout[i] = direct;
            choice[i] = i;
        }
        for (let k = 0; k < candidats.length; k++) {
            const { x, frais } = candidats[k];
            if (x >= i || cout[i - x] === Infinity) continue;
            const candidat = cout[i - x] + frais;
            if (candidat < cout[i]) {
                cout[i] = candidat;
                choice[i] = x;
            }
        }
    }

    if (cout[n] === Infinity) return null;

    const montants: number[] = [];
    let rest = n;
    while (rest > 0) {
        const x = choice[rest];
        if (x <= 0) return null;
        montants.push(x * pas);
        rest -= x;
    }

    return { montants: montants.sort((a, b) => a - b), fraisTotal: cout[n] };
};