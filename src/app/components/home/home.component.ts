import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { GenderEnum } from 'src/app/models/gender.enum';
import { Name } from 'src/app/models/name';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isMale: boolean;
  public name: string;

  constructor(private readonly apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.apiService.getName().subscribe(data => {
      const result = data.results[0];
      if (result) {
        this.formatName(result.name);
        this.isMale = result.gender === GenderEnum.MALE ? true : false;
      }
    });
  }

  private formatName(name: Name): void {
    if (name && name.first && name.last) {
      this.name = `${name.first} ${name.last}`;
    }
  }
}
