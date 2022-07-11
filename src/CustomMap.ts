interface Mappable {
  location: google.maps.LatLngLiteral;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  public addMarker({ location }: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: location,
    });
  }
}
