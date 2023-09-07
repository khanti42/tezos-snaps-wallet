import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { ClipboardService } from 'src/app/services/clipboard.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
})
export class OperationsComponent implements OnInit {
  @Input() operations: {
    type: 'transaction' | string;
    hash: string;
    amount: number;
    sender: { address: string };
    target: { address: string };
    timestamp: string;
  }[] = [];

  address: string = '';

  constructor(
    private readonly accountService: AccountService,
    private readonly clipboardService: ClipboardService,
  ) {
    this.accountService.accounts$.pipe(first()).subscribe(async (accounts) => {
      if (accounts[0]) {
        this.address = accounts[0].address;
      }
    });
  }

  ngOnInit(): void {}

  openLink(link: string) {
    window.open(link, '_blank');
  }

  copyAddressToClipboard(ev: MouseEvent, address: string) {
    ev.stopPropagation();
    this.clipboardService.copy(address);
  }
}
