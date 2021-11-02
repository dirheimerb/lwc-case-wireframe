import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
  @api recordId;
  @api objectApiName;

  handleCreate() {
    const content = this.template.querySelector('.lgc-id_content-toggle').classList;
    content('slds-hidden');
  }
}
