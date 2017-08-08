export class Master {
    constructor(
                public firstname: string,
                public lastname: string,
                public email?: string,
                public password?: string,
                public username?: string,

                public locations?: string,
                public background?: string,
                public experienceYears?: string,
                public handicap?: string,
                public bestFor?: string,
                public price?: string
              ){}
}
