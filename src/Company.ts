import { company, address } from 'faker/locale/pt_BR';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  public companyName: string;

  public catchPhrase: string;

  public location: google.maps.LatLngLiteral;

  public markerContent: string;

  constructor() {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
    this.markerContent = `${this.companyName}<br>${this.catchPhrase}`;
  }
}
