import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud.service';
import { appModels } from 'src/app/services/shared/enum/enum.util';




@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit {
  selected: Date | null | undefined = new Date()
  timeSlotsMorning: any = []
  timeSlotsEvening: any = []
  constructor(public dialog: MatDialog, private crudService: CrudService) { }
  ngOnInit(): void {
    this.getSlots()
  }

  // List all the time time slots for selected date
  getSlots() {
    let params = {
      startTime: this.selected
    }
    this.crudService.get(appModels.LIST_SLOT, { params }).subscribe(res => {
      console.log(res);
      if (res.data.length > 0) {
        if (res.data[0]) {
          this.timeSlotsMorning = res.data[0]._id == 1 ? res.data[0].slots : res.data[1].slots
        }
        if (res.data[1]) {
          this.timeSlotsEvening = res.data[0]._id == 2 ? res.data[0].slots : res.data[1].slots
        }
      } else {
        this.timeSlotsMorning = []
        this.timeSlotsEvening = []
      }
    })
  }


  // Open Dialog Box
  addEditService(batch: Number): void {
    const dialogRef = this.dialog.open(addSlotModalcomponent, {
      width: '600px',
      height: '325px',
      disableClose: false,
      data: { date: this.selected, batch: batch }

    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
    });


  }


}
@Component({
  selector: 'app-itemoncube',
  templateUrl: './addSlot.modal.html',
  styleUrls: ['./appointement.component.css']
})
export class addSlotModalcomponent implements OnInit {
  value: any
  fromTime: Date = new Date();
  toTime: Date = new Date();
  maxTime: any
  minTime: any
  meridian: any
  constructor(public dialogRef: MatDialogRef<addSlotModalcomponent>, @Inject(MAT_DIALOG_DATA) public data: any, private crudService: CrudService) {
    this.value = data;
  }
  ngOnInit(): void {
    this.fromTime = new Date(this.value.date);
    this.toTime = new Date(this.value.date);
    this.meridian = this.value.batch
  }

  // Auto Adjust Maxmimum Time
  checkMaxTime() {
    this.maxTime = new Date(this.fromTime.setMinutes(this.fromTime.getMinutes() + 30));
    this.toTime = this.maxTime
  }

  // Save SLots
  saveSlot() {
    let data = {
      slotBatch: this.meridian,
      startTime: new Date(this.fromTime.setMinutes(this.fromTime.getMinutes() - 30)),
      endTime: this.maxTime,
    }
    this.crudService.post(appModels.CREATE_SLOT, data).subscribe(res => {
      console.log(res);
      if (res.success == true) {
        this.dialogRef.close();
        window.alert(res.message)
      }
      else if (res.success == false) {
        window.alert(res.message)
      }
    })

  }

  //Cancel the dialog box
  closeDialog() {
    this.dialogRef.close();
  }
}

function ngOnDestroy() {
  // throw new Error('Function not implemented.');
}


