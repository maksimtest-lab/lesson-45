export interface User {
  gender: "male" | "female";
  id: {
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
  };
  location: {
    city: string;
    country: string;
  };
  dob: {
    date: string;
    age: number;
  };
}
