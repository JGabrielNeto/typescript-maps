import { company, address } from 'faker/locale/pt_BR';

export class Company {
  public companyName: string;

  public catchPhrase: string;

  public location: google.maps.LatLngLiteral;

  constructor() {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }
}
