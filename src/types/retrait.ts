export type Palier = { min: number; max: number; frais: number };

export type Retrait = {
  montant: number;
  frais: number;
};

export type Operateur = {
  id: number;
  nom: string;
  paliers: Palier[];
};

export type Plan = {
   retraits: Retrait[];
  fraisTotal: number;
};