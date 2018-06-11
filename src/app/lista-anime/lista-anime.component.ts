import { Component, OnInit } from '@angular/core';
import {AnimeService} from '../anime.service';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-lista-anime',
  templateUrl: './lista-anime.component.html',
  styleUrls: ['./lista-anime.component.scss']
})
export class ListaAnimeComponent implements OnInit {

  constructor(private auth: AuthService) {


  }

  ngOnInit() {

  }
logoutAdmin()
{
  this.auth.logoutAdmin();
}


}
