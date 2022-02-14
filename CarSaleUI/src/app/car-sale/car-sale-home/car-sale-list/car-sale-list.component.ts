import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Constants } from 'src/app/shared/constants';
import { CarSaleService } from '../../services/car-sale.service';

@Component({
  selector: 'app-car-sale-list',
  templateUrl: './car-sale-list.component.html',
  styleUrls: ['./car-sale-list.component.scss']
})
export class CarSaleListComponent implements OnInit {
  public historyList: any = [];
  public dataSource: any;
  public displayedColumns: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild('drawer', { static: true }) drawer!: any;
  public selectedId!: number;
  public selectedCarDetails:any;
  public dateFormat=Constants.dateFormat;
  public openDrawer!:boolean;

  columns = [
    {
      columnDef: 'make',
      header: 'Make',
      cell: (element: any) => element.make ? `${element.make}` : '-',
      style: { width: '80px', 'min-width': '80px' },
    },
    {
      columnDef: 'model',
      header: 'Model',
      cell: (element: any) => element.model ? `${element.model}` : '-',
      style: { width: '80px', 'min-width': '80px' },
    },
    {
      columnDef: 'yearModel',
      header: 'Year Model',
      cell: (element: any) => element.yearModel ? `${element.yearModel}` : '-',
      style: { width: '80px', 'min-width': '80px' },
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (element: any) => element.price ? `${element.price}` : '-',
      style: { width: '80px', 'min-width': '80px' },
    },
    {
      columnDef: 'dateAdded',
      header: 'Date Added',
      cell: (element: any) => element.dateAdded ? `${this.datePipe.transform(element.dateAdded,this.dateFormat)}` : '-',
      style: { width: '80px', 'min-width': '80px' },
    },
    {
      columnDef: 'licensed',
      header: 'Licensed',
      cell: (element: any) => element.licensed ? `${element.licensed}` : '-',
      style: { width: '80px', 'min-width': '80px' },
    }
  ];

  constructor(
    private matPaginator: MatPaginatorIntl,
    private carSaleService:CarSaleService,
    private datePipe:DatePipe
  ) {
    this.matPaginator.getRangeLabel = (page, pageSize, length) => {
      if (length === 0 || pageSize === 0) {
        return `0 records`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return `${startIndex + 1} – ${endIndex} of ${length} records`;
    }
    this.matPaginator.itemsPerPageLabel = 'Records per page';
  }

  ngOnInit(): void {
    this.carSaleService.getCarList().subscribe((carLlist:any)=>{
      this.dataSource = (carLlist?.length) ?
        new MatTableDataSource(carLlist) : [];
      this.displayedColumns = this.columns.map(c => c.columnDef);
      this.dataSource.paginator = this.paginator;
    });
  }

  onClick(row:any){
   if(row.licensed){
     this.openDrawer=!this.openDrawer;
     this.selectedCarDetails=row;
   }else{
    this.openDrawer=false;
   }
  }

}