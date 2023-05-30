export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";
  _imgUrl = "https://starwars-visualguide.com/assets/img";

  async getResource(string) {
    const combineUrl = `${this._baseUrl}${string}`;
    let response = await fetch(combineUrl);
    if (!response.ok) {
      throw new Error(`Could not fetch ${combineUrl}`);
    }
    return await response.json();
  }

  async getAllPeople() {
    let people = await this.getResource("/people/");
    let peopleAfterTransform = people.results.map((person) => {
      return this._transformPerson(person);
    });
    return peopleAfterTransform;
  }

  async getPerson(id) {
    const combineUrl = `/people/${id}`;
    const person = await this.getResource(combineUrl);
    return this._transformPerson(person);
  }

  getImagePerson = (id) => `${this._imgUrl}/characters/${id}.jpg`;

  _extractId(element) {
    const idRegExp = /\/(\d*)\/$/;
    return element.url.match(idRegExp)[1];
  }

  _transformPerson(person) {
    const id = this._extractId(person);
    return {
      id: id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      height: person.height,
      url: person.url
    };
  }
}
