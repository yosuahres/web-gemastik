export interface SoilData {
  id: number;
  timestamp: string;
  ph: number;
  moisture: number;
  temperature: number;
}

export interface PlantData {
  id: number;
  timestamp: string;
  type: "Padi" | "Jagung" | "Teh";
  disease_status: string;
  image: string;
}

export type Data = SoilData | PlantData;

export type RecommendationData = {
  [key: string]: string | number | undefined;
};

export type AnxietyLevel = "LOW" | "MEDIUM" | "HIGH";
