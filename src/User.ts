import { name, address } from 'faker/locale/pt_BR';

export class User {
  public name: string;

  public location: google.maps.LatLngLiteral;

  constructor() {
    this.name = name.firstName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }
}
