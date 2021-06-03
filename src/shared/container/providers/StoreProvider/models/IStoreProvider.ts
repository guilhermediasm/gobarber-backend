export default interface IStoreProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
