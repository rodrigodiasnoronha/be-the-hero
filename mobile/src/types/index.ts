export interface Incident {
    id: number;
    title: string;
    description: string;
    value: number;
    email?: string;
    whatsapp?: string;
    city?: string;
    uf?: string;
}
