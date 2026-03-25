import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncryptedStorageService {

  private encoder = new TextEncoder();
  private decoder = new TextDecoder();
 
  constructor() {}
 
  /**
   * Deriva una clave criptográfica usando PBKDF2
   */
  private async getCryptoKey(): Promise<CryptoKey> {
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      this.encoder.encode(environment.encryptionKey),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );
 
    return window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: this.encoder.encode('salt_fijo_seguro'),
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }
 
  /**
   * Encripta y guarda un valor en localStorage
   */
  async setItem(key: string, value: any): Promise<void> {
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // vector de inicialización
    const data = this.encoder.encode(JSON.stringify(value));
    const cryptoKey = await this.getCryptoKey();
 
    const encrypted = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      cryptoKey,
      data
    );
 
    const payload = {
      iv: Array.from(iv),
      data: Array.from(new Uint8Array(encrypted)),
    };
 
    localStorage.setItem(key, JSON.stringify(payload));
  }
 
  /**
   * Lee y desencripta un valor de localStorage
   */
  async getItem<T>(key: string): Promise<T | null> {
    const stored = localStorage.getItem(key);
    if (!stored) return null;
 
    try {
      const { iv, data } = JSON.parse(stored);
      const cryptoKey = await this.getCryptoKey();
 
      const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: new Uint8Array(iv) },
        cryptoKey,
        new Uint8Array(data)
      );
 
      const decoded = this.decoder.decode(decrypted);
      return JSON.parse(decoded) as T;
    } catch (error) {
      console.error('Error al desencriptar:', error);
      return null;
    }
  }
 
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
 
  clear(): void {
    localStorage.clear();
  }
}
