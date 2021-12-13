export default interface ProjectModel {
  id: any;
  name: string;
  description: string;
  clone_url: string;
  image?: string | ImageBitmap;
}
