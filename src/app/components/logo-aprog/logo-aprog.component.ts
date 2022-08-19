import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-aprog',
  templateUrl: './logo-aprog.component.html',
  styleUrls: ['./logo-aprog.component.css']
})
export class LogoAProgComponent implements OnInit {
  isLogged = false; 

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged= false;
    }
  }


  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
