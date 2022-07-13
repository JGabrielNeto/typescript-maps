import { name, address } from 'faker/locale/pt_BR';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  public name: string;

  public location: google.maps.LatLngLiteral;

  public markerContent: string;

  constructor() {
    this.name = name.firstName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
    this.markerContent = `User: ${this.name}`;
  }
}
