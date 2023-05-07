import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pet } from "./pet";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PetService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(`${this.apiServerUrl}/pet/all`);
    }

    public addPet(pet: Pet): Observable<Pet> {
        return this.http.post<Pet>(`${this.apiServerUrl}/pet/add`, pet);
    }

    public updatePet(pet: Pet): Observable<Pet> {
        return this.http.put<Pet>(`${this.apiServerUrl}/pet/update`, pet);
    }

    public deletePet(petId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/pet/delete/${petId}`);
    }

}