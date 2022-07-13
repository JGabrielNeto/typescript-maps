/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const mapDiv = document.getElementById('map') as HTMLElement;
const customMap = new CustomMap(mapDiv);
const user = new User();
const company = new Company();
customMap.addMarker(user);
customMap.addMarker(company);
