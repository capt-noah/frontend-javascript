interface Teacher {
  // firstName and lastName are readonly
  readonly firstName: string;
  readonly lastName: string;

  // mandatory attributes
  fullTimeEmployee: boolean;
  location: string;

  // optional attribute
  yearsOfExperience?: number;

  // allow any other kind of attributes
  [key: string]: any;
}