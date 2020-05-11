import { Component } from '@angular/core';
import {Product} from '../model/product.model';
import {Router} from '@angular/router';
import {ParameterService} from '../services/parameter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: Product[];

  constructor(
      private router: Router,
      private parameter: ParameterService
  ) {
    this.articles = parameter.getMesArticles();
    console.log(router.url);
  }

    onShowDetatil(article: Product) {
      this.parameter.setArticle(article);
      this.router.navigateByUrl('/detail-article');
    }
}
