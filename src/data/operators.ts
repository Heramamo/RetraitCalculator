import airtel from "@/assets/images/airtel.png"
import mvola from "@/assets/images/mvola.png"
import orange from "@/assets/images/orange.png"

export interface OperatorOption {
    id: number
    label: string
    operator: string
    image: any
    borderColor: string
}

export const OPERATOR_OPTIONS: OperatorOption[] = [
    { id: 1, label: 'MVola', operator: 'Yas', image: mvola, borderColor: "#047857" },
    { id: 2, label: 'Orange Money', operator: 'Orange', image: orange, borderColor: "#EA580C" },
    { id: 3, label: 'Airtel Money', operator: 'Airtel', image: airtel, borderColor: "#93000A" },
]

export const getOperatorOption = (id: number): OperatorOption =>
    OPERATOR_OPTIONS.find(o => o.id === id) ?? OPERATOR_OPTIONS[0]
