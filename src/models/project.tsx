export default interface ProjectModel {
  id: any;
  name: string;
  description: string;
  clone_url: string;
  image?: string | ImageBitmap;
  languages?: string[] | Promise<string[]>;
  languages_url: string;
}

export type keyValuePair = { [key: string]: number };

export interface LocalStorageData {
  projects: ProjectModel[];
  overallUsedTechnologies: keyValuePair[];
  expire: number;
}
