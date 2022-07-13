export interface Mappable {
  location: google.maps.LatLngLiteral;
  markerContent: string;
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

  public addMarker({ location, markerContent }: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: location,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerContent,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
