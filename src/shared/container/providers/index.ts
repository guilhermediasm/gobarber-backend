import { container } from 'tsyringe';

import IStoreProvider from './StoreProvider/models/IStoreProvider';
import DiskStorageProvider from './StoreProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';

container.registerSingleton<IStoreProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
