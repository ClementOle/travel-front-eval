export class Travel {
  private _id: string;
  private _name: string;
  private _description: string;
  private _dateBegin: string;
  private _dateEnd: string;
  private _imgUrl: string;
  private _creatorId: string;
  private _createdAt: Date;
  private _updatedAt: Date;


  constructor(name: string, description: string, dateBegin: string, dateEnd: string, imgUrl: string, creatorId: string, createdAt?: Date, updatedAt?: Date, id?: string) {
    if (id)
      this._id = id;
    this._name = name;
    this._description = description;
    this._dateBegin = dateBegin;
    this._dateEnd = dateEnd;
    this._imgUrl = imgUrl;
    this._creatorId = creatorId;
    if (createdAt)
      this._createdAt = createdAt;
    if (updatedAt)
      this._updatedAt = updatedAt;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dateBegin(): string {
    return this._dateBegin;
  }

  set dateBegin(value: string) {
    this._dateBegin = value;
  }

  get dateEnd(): string {
    return this._dateEnd;
  }

  set dateEnd(value: string) {
    this._dateEnd = value;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  set imgUrl(value: string) {
    this._imgUrl = value;
  }

  get creatorId(): string {
    return this._creatorId;
  }

  set creatorId(value: string) {
    this._creatorId = value;
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

  /**
   * Serializer
   */
  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      dateBegin: this.dateBegin,
      dateEnd: this.dateEnd,
      imgUrl: this.imgUrl,
      creatorId: this.creatorId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }

  /**
   * Deserializer
   */
  static fromJSON(travelAsJSON: any): Travel {
    return new Travel(
      travelAsJSON.name,
      travelAsJSON.description,
      travelAsJSON.dateBegin,
      travelAsJSON.dateEnd,
      travelAsJSON.imgUrl,
      travelAsJSON.creatorId,
      travelAsJSON.createdAt,
      travelAsJSON.updatedAt,
      travelAsJSON._id
    )
  }
}
