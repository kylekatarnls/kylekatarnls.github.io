import { Component } from '@angular/core';

@Component({
    selector: 'presentation',
    template: `
        <h1>{{title}}</h1>
        <projects></projects>
        <p>&copy; ${(new Date()).getFullYear()}</p>
    `
})
export class PresentationComponent {
    title: string = document.title;
}
