import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode';

import { HttpClientModule } from '@angular/common/http';
import { CollapsableJsonComponent } from './components/collapsable-json/collapsable-json.component';

import { DirectivesModule } from './directives/directives.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccountsOverviewComponent } from './components/accounts-overview/accounts-overview.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { NodeSelectorModalComponent } from './components/node-selector-modal/node-selector-modal.component';
import { HowToModalComponent } from './components/how-to-modal/how-to-modal.component';
import { AccountsSelectionComponent } from './components/accounts-selection/accounts-selection.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';
import { AccountComponent } from './components/account/account.component';
import { OperationsComponent } from './components/operations/operations.component';
import { PermissionModalComponent } from './components/permission-modal/permission-modal.component';
import { OperationModalComponent } from './components/operation-modal/operation-modal.component';
import { SignPayloadModalComponent } from './components/sign-payload-modal/sign-payload-modal.component';
import { NoAccountModalComponent } from './components/no-account-modal/no-account-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextModalComponent } from './components/text-modal/text-modal.component';
import { NftListComponent } from './components/nft-list/nft-list.component';
import { LandingComponent } from './components/landing/landing.component';
import { QrModalComponent } from './components/qr-modal/qr-modal.component';
import { SendTezModalComponent } from './components/send-tez-modal/send-tez-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapsableJsonComponent,
    AccountsOverviewComponent,
    HeaderItemComponent,
    NodeSelectorModalComponent,
    HowToModalComponent,
    AccountsSelectionComponent,
    ConfirmModalComponent,
    LoadingModalComponent,
    AccountComponent,
    OperationsComponent,
    PermissionModalComponent,
    OperationModalComponent,
    SignPayloadModalComponent,
    NoAccountModalComponent,
    FooterComponent,
    TextModalComponent,
    NftListComponent,
    LandingComponent,
    QrModalComponent,
    SendTezModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DirectivesModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
