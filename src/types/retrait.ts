export type Palier = { min: number; max: number; frais: number };

export type Operateur = {
  id: number;
  nom: string;
  paliers: Palier[];
};

export type Plan = {
  montants: number[];
  fraisTotal: number;
};