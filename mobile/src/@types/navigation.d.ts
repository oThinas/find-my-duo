import { IGameRouteProps } from '../../interfaces/IGameRouteProps';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined,
      game: IGameRouteProps
    }
  }
}