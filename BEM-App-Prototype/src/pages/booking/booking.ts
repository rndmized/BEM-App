import { BookingService } from './../../providers/booking-service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
  booking = { locations: '',  service: '',  date: '',  time: '',  margin: '',  ttime: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public bookingService: BookingService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  public getBooking() {
    console.log(this.booking);
    this.bookingService.book(this.booking);
    this.navCtrl.popToRoot();
    /*.subscribe( allowed => {
        if (allowed) {
          setTimeout(() => {
            this.loading.dismiss();
            console.log(this.auth.getUserInfo().user_type);
            if( this.auth.getUserInfo().user_type == 'customer' ){
                this.navCtrl.setRoot(MenuPage);
            }else{
              this.navCtrl.setRoot(HomePage);
            }    
          });
        } else {
          this.showPopup('Authentication Failed', "Access Denied");
        }
      },
      error => {
        this.showPopup('Error', error);
      });  */
  }


  public getLocations() {
    return ['Dublin', 'Cork', 'Galway', 'Limerick', 'Waterford', 'Athlone', 'Clonmel', 'Mulligar', 'Letterkenny', 'Tralee', 'Tullamore', 'Kilkenny', 'Killarney', 'Bray'];
  }

  public getServices() {
    return ['Salon / Clinic', 'Hair Salon', 'Dental', 'Gym', 'Spa', 'Nutritionist', 'Personal Trainer', 'Yoga/Pilates'];
  }

  public getDates() {
    let date1 = new Date();
    let date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    let date3 = new Date();
    date3.setDate(date3.getDate() + 2);
    return [date1.toLocaleDateString(), date2.toLocaleDateString(), date3.toLocaleDateString()];
  }
  public getTimes() {
    return ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  }
  public getTimeMargin() {
    return ['15', '30'];
  }
  public getTravelTime() {
    return ['1 hour', '2 hours', '3 hours', '4 hours', '5 hours'];
  }
}

