export class User {
  private _id: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private _firstname: string;
  private _lastname: string;
  private _createdAt: Date;
  private _updatedAt: Date;


  constructor(email: string, password: string, username?: string, firstname?: string, lastname?: string, createdAt?: Date, updatedAt?: Date, id?: string) {
    if (id)
      this._id = id;

    this._email = email;
    this._password = password;

    if (username)
      this._username = username;


    if (firstname)
      this._firstname = firstname;
    if (lastname)
      this._lastname = lastname;
    if (createdAt)
      this._createdAt = createdAt;
    if (updatedAt)
      this._updatedAt = updatedAt;
  }


  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }


  toJSON(): any {
    return {
      email: this.email,
      password: this.password
    };
  }
}
