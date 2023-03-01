import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  displayedColumns: string[] = ['name', 'color', 'type', 'price', 'actions'];
  dataSource = new MatTableDataSource<Product>(productList);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(sku: string) {
    console.log('Edit sku ', sku);
  }

  delete(sku: string) {
    console.log('Delete ', sku);
  }
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  type: string;
  description: string;
  color: string;
  price: number;
}

const productList: Product[] = [
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
  {
    id: 123897917321239,
    sku: 'nkl-2314',
    name: 'Lennox - Black Shadow',
    type: 'pant',
    description: 'Lennox is our signature slim fit, fitted through the thigh.',
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
