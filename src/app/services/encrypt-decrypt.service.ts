import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const CryptoJS = require('crypto-js');

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  constructor() { }
  encText(plainText:any) {
    let encKey = environment.apiHashingKey;
    let text = plainText;
    let iv = CryptoJS.enc.Hex.parse(environment.encryptIV);
    return btoa(CryptoJS.AES.encrypt(text, encKey, { iv: iv }).toString());
  }
  decText(encryptedText:any) {
    encryptedText = atob(encryptedText);
    let encKey = environment.apiHashingKey;
    let iv = CryptoJS.enc.Hex.parse(environment.encryptIV);
    var decryptText = CryptoJS.AES.decrypt(encryptedText, encKey, { iv: iv });
    return decryptText.toString(CryptoJS.enc.Utf8);
  }
  escapeHtml(text:string) {
    if(text!='')
    {
       return text;
    }
   return text
       .replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/'/g, '&quot;')
       .replace(/'/g, '&#039;');
 }

 decodeHtml(str:any)
  {
    if(str)
    {
      var map:any =
      {
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&#039;': "'"
      };
      return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function(m:any) {return map[m];});
  }
  else
  {
    return  str;
  }
 }
}
