import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'paige-denim';

  productList = [
    {
      id: 123897917321239,
      sku: 'nkl-2314',
      name: 'Lennox - Black Shadow',
      type: 'pant',
      description:
        'Lennox is our signature slim fit, fitted through the thigh.',
      color: 'black',
      price: 80.0,
    },
    {
      id: 123897917321240,
      sku: 'njks-3893',
      name: 'High Rise Laurel Canyon',
      type: 'pant',
      description:
        'The High Rise Laurel Canyon is a vintage PAIGE style that has made a big comeback.',
      color: 'white',
      price: 225.0,
    },
    {
      id: 123897917321241,
      sku: 'nsks-3728',
      name: 'The Nines - Collection Genevieve',
      type: 'pant',
      description:
        'The Nines is our everyday elevated collection that allows you to feel confident, empowered and dressed to the nines, no matter what',
      color: 'white',
      price: 269.0,
    },
  ];

  displayedColumns: string[] = ['name', 'color', 'type', 'price'];
  dataSource = new MatTableDataSource(this.productList);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
