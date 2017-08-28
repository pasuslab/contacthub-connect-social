import FbGraphApi from './facebook-api';
import { CustomerData } from './contacthub-sdk-browser';

export type SocialNetworksClientIds = {
  facebook?: string,
  google?: string,
  linkedin?: string
}

export type SocialNetworks = keyof SocialNetworksClientIds

export type FormOptions = {
  fields: {
    firstName?: string,
    lastName?: string,
    dateOfBirth?: string
  }
}

export type Options = {
  clientIds: SocialNetworksClientIds,
  form: FormOptions
}

export type User = CustomerData;

export type FacebookFields = 'id' | 'first_name' | 'last_name' | 'gender' | 'birthday' | 'link' | 'email';
export type FacebookUser = Pick<FbGraphApi.FbUser, FacebookFields> & {
  picture: string,
  thumbnail: string
}
