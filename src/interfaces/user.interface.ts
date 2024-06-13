export interface User {
  code: string;
  imagePath: string;
  name: string;
  children?: User[];
}
