import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-mfe-test-entry',
  template: `<h1>I am the login micro app</h1>`,
})
export class RemoteEntryComponent implements OnInit {
  ngOnInit(): void {
    console.log('Hi! I am micro login');
  }
}
