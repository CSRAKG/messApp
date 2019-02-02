import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  qrData = null;
  createdcode = null;
  scannercode = null;

  options: BarcodeScannerOptions;
  encodeText: string = '';
  encodeData: any = {};
  scannedData: any = {};

  constructor(public navCtrl: NavController,
              private scanner: BarcodeScanner) {
  }

  createCode() {
    this.createdcode = this.qrData;
  }

  scanCode(){
  }

  scan() {
    this.options = {
      prompt:'Scan you barcode'
    };
    this.scanner.scan(this.options).then((data)=>{
      this.scannedData = data;
    }, (err) =>{
      console.log('Error :'+err);
    })
  }

  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then((data)=>{
      this.encodeData = data;
    },(err)=>{
      console.log('Error :',err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }
}
