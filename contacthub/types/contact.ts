export type Contact = {
  ID: string;
  name: string;
  dateCreated: Date;
  phoneNumber: number[];
  firstName?: string;
  otherNames?: string[];
  surname?: string;
  namePrefix?: string;
  nameSuffix?: string;
  address?: string; // TODO:
  birthday?: Date;
  email?: string[];
  image?: string; // TODO: Maybe convert to a data-blah base64 image ?
  website?: string;
  socialProfiles?: SocialProfile[];
  nationality?: number[];
};

export type SocialProfile = {
  ID: string;
  url: string;
  username: string;
  name?: string;
};
