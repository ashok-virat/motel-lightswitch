import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'landing-page';
  time: number;
  ngOnInit(){
    setInterval(() => {
      this.time = Date.now();
    }, 1);
    console.log(this.time)
    $(".lightsoff").click(()=>{
     $(".imglight").attr("src","../assets/Night_5.png")
    })
    $(".lightson").click(()=>{
      $(".imglight").attr("src","../assets/Night_4.png")
    })
  }
}
