import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {Category} from '../model/category.model';
import {Pannier} from '../model/pannier.model';
import {City} from '../model/city.model';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  private article: Product;
  private mesArticles: Product[];
  private categories: Category[];
  private panniers: Pannier[];
  private cities: City[];

  constructor() {
    this.mesArticles = [
      {
        id: '1',
        title: 'Chaussure de sport',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam praesentium voluptatibus. Ad consequuntur fugit incidunt iusto libero necessitatibus nobis officiis possimus quasi qui, reiciendis repellat sit, totam vitae voluptates',
        price: 15000,
        category: 'Chaussure',
        createdAt: new Date().toLocaleString(),
        state: 'neuf',
        city: 'Bobo-Dioulasso',
        averageStart: 4,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 2000
        },
        pictures: [
          '../../assets/images/shoe1.png',
          '../../assets/images/shoe2.png',
          '../../assets/images/shoe3.png',
        ]
      },
      {
        id: '2',
        title: 'Vélo pannier',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam praesentium voluptatibus. Ad consequuntur fugit incidunt iusto libero necessitatibus nobis officiis possimus quasi qui, reiciendis repellat sit, totam vitae voluptates',
        price: 45000,
        category: 'Locomation',
        createdAt: new Date().toLocaleString(),
        state: 'neuf',
        city: 'Ouaga',
        averageStart: 2,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 2000
        },
        pictures: [
          '../../assets/images/velo1.png',
          '../../assets/images/velo2.png',
          '../../assets/images/velo3.png',
        ]
      },
      {
        id: '3',
        title: 'Sac en cuir',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam praesentium voluptatibus. Ad consequuntur fugit incidunt iusto libero necessitatibus nobis officiis possimus quasi qui, reiciendis repellat sit, totam vitae voluptates',
        price: 30000,
        category: 'Sac',
        createdAt: new Date().toLocaleString(),
        state: 'neuf',
        city: 'Kaya',
        averageStart: 4,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 3500
        },
        pictures: [
          '../../assets/images/sac1.png',
          '../../assets/images/sac2.png',
          '../../assets/images/sac3.png',
        ]
      },
      {
        id: '4',
        title: 'Tecno comon 15',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam praesentium voluptatibus. Ad consequuntur fugit incidunt iusto libero necessitatibus nobis officiis possimus quasi qui, reiciendis repellat sit, totam vitae voluptates',
        price: 200000,
        category: 'Téléphone portable',
        createdAt: new Date().toLocaleString(),
        state: 'neuf',
        city: 'Ouagadougou',
        averageStart: 5,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 2000
        },
        pictures: [
          '../../assets/images/phone1.png',
          '../../assets/images/phone2.png',
          '../../assets/images/phone3.png',
        ]
      },
      {
        id: '5',
        title: 'HP elite book',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam praesentium voluptatibus. Ad consequuntur fugit incidunt iusto libero necessitatibus nobis officiis possimus quasi qui, reiciendis repellat sit, totam vitae voluptates',
        price: 250000,
        category: 'Ordinateur',
        createdAt: new Date().toLocaleString(),
        state: 'neuf',
        city: 'Bobo-Dioulasso',
        averageStart: 4,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 5000
        },
        pictures: [
          '../../assets/images/pc1.png',
          '../../assets/images/pc2.png',
          '../../assets/images/pc3.png',
        ]
      },
      {
        id: '6',
        title: 'Jacket',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam praesentium voluptatibus. Ad consequuntur fugit incidunt iusto libero necessitatibus nobis officiis possimus quasi qui, reiciendis repellat sit, totam vitae voluptates',
        price: 10000,
        category: 'Vetements',
        createdAt: new Date().toLocaleString(),
        state: 'neuf',
        city: 'Koudougou',
        averageStart: 3,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 2000
        },
        pictures: [
          '../../assets/images/jacket1.png',
          '../../assets/images/jacket2.png',
          '../../assets/images/jacket3.png',
        ]
      },
      {
        id: '7',
        title: 'Réfrigerateur',
        // tslint:disable-next-line:max-line-length
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam praesentium voluptatibus. Ad consequuntur fugit incidunt iusto libero necessitatibus nobis officiis possimus quasi qui, reiciendis repellat sit, totam vitae voluptates',
        price: 15000,
        category: 'Refroidissement',
        createdAt: new Date().toLocaleString(),
        state: 'neuf',
        city: 'Bobo-Dioulasso',
        averageStart: 4,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 2000
        },
        pictures: [
          '../../assets/images/frigo1.png',
          '../../assets/images/frigo2.png',
          '../../assets/images/frigo3.png',
        ]
      }
    ];
    this.categories = [
      {
        icon: 'shirt',
        title: 'Vêtements',
        description: 'Description'
      },
      {
        icon: 'walk',
        title: 'Chaussures',
        description: 'Description'
      },
      {
        icon: 'today',
        title: 'Mode et Accessoires',
        description: 'Description'
      },
      {
        icon: 'phone-portrait',
        title: 'Electroniques',
        description: 'Description'
      },
      {
        icon: 'basketball',
        title: 'Sport et Loisirs',
        description: 'Description'
      },
      {
        icon: 'settings',
        title: 'Autres',
        description: 'Description'
      },
    ];
    this.cities = [
      {
        id: '03',
        name: 'Ouagadougou'
      },
      {
        id: '04',
        name: 'Banfora'
      },
      {
        id: '05',
        name: 'Kaya'
      },
      {
        id: '06',
        name: 'Koudougou'
      },
      {
        id: '07',
        name: 'Dori'
      },
      {
        id: '09',
        name: 'Bobo-Dioulasso'
      }
    ];
    this.panniers = new Array<Pannier>();
  }

  public addPannierProduct(pannier: Pannier): void {
    this.panniers.push(pannier);
  }

  public removeProductFromPannier(index: number) {
    if (this.panniers.length === 1) {
      this.panniers.pop();
      this.panniers = new Array<Pannier>();
    } else {
      this.panniers.splice(index, 1);
    }
    return this.panniers;
  }

  public getPannierProduct() {
    return this.panniers;
  }

  public  getCategories() {
    return this.categories;
  }
  public addArticle(article: Product): void {
    this.mesArticles.push(article);
  }

  public getMesArticles() {
    return this.mesArticles;
  }

  public setArticle(article: Product): void {
    this.article = article;
  }

  public getArticle() {
    return this.article;
  }
}
