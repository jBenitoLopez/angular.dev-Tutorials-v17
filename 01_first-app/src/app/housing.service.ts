import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'http://localhost:3000';
  readonly resource = 'locations';

  protected housingLocationList: HousingLocation[] = [];

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const locationsData = await fetch(`${this.baseUrl}/${this.resource}`);
    return (await locationsData.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const locationsData = await fetch(`${this.baseUrl}/${this.resource}/${id}`);
    return (await locationsData.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
