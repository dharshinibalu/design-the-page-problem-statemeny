import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'problem';

  cards : Array<any> = [
    {
      address : 'Boston House, Andheri East',
      imageUrl : 'assets/images/Image 139.png',
      rate : 14299, 
      del_rate: 28598,
      internet: 100,
      yes:'yes',
      offer: 'Unlimited',
      online: 'Online staff',
   Star : 'assets/images/Feedback-1.svg'
        },
        {
          address : 'Boston House, Andheri East',
          imageUrl : 'assets/images/Image 140.png',
          rate : 14299, 
          del_rate: 28598,
          internet: 100,
          yes:'yes',
          offer: 'Unlimited',
          online: 'Online staff',
       Star : 'assets/images/Feedback-1.svg'
            },
            {
              address : 'Boston House, Andheri East',
              imageUrl : 'assets/images/Image 141.png',
              rate : 14299,
              del_rate: 28598,
              internet: 100,
              yes:'yes',
              offer: 'Unlimited',
              online: 'Online staff',
             Star : 'assets/images/Feedback-1.svg'
                },
                {
                  address : 'Boston House, Andheri East',
                  imageUrl : 'assets/images/Image 143.png',
                  rate : 14299,
                  del_rate: 28598,
                  internet: 100,
                  yes:'yes',
                  offer: 'Unlimited',
                  online: 'Online staff',
                  Star : 'assets/images/Feedback-1.svg'
                    },
  ]

  cardss : Array<any> = [
    {url : 'assets/images/Image 147.png' , name : 'Ocean Golden' , text : 'Pitt Street Kirribilli NSW 2061'},
    {url : 'assets/images/Image 148.png', name : 'TheMadbrains' , text : 'Pitt Street Kirribilli NSW 2061'},
    {url : 'assets/images/Image 146.png', name : 'Paranjape Towers' , text : 'Pitt Street Kirribilli NSW 2061'},
    {url : 'assets/images/Image 145.png', name : 'M3M Woodshire' , text : 'Pitt Street Kirribilli NSW 2061'},
    {url : 'assets/images/Image 144.png', name : 'M3M Woodshire' , text : 'Pitt Street Kirribilli NSW 2061'},


  ]
 }
