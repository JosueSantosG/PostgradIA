import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private uniqueUserIdKey = 'uniqueUserId';

  constructor() {}

  private generateUniqueId(): string {
    // Generar un UUID
    const uniqueId = uuidv4();
    return uniqueId;
  }

  getUniqueUserId(): string {
    let uniqueUserId = sessionStorage.getItem(this.uniqueUserIdKey); // Cambiar localStorage a sessionStorage
    if (!uniqueUserId) {
      uniqueUserId = this.generateUniqueId();
      sessionStorage.setItem(this.uniqueUserIdKey, uniqueUserId); // Cambiar localStorage a sessionStorage
    }
    return uniqueUserId;
  }
}
