/* tslint:disable:no-unused-variable */
import {PresentationComponent} from './presentation.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

////////  SPECS  /////////////
describe('PresentationComponent', function () {
    let h1: DebugElement;
    let footer: DebugElement;
    let comp: PresentationComponent;
    let fixture: ComponentFixture<PresentationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PresentationComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PresentationComponent);
        comp = fixture.componentInstance;
        h1 = fixture.debugElement.query(By.css('h1'));
        footer = fixture.debugElement.query(By.css('footer'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected <h1> text', () => {
        fixture.detectChanges();
        expect(h1.nativeElement.innerText).toMatch(/kylekatarnls projects presentation/i,
            '<h1> should say something about "kylekatarnls projects presentation"');
    });

    it('should have expected <footer> text', () => {
        fixture.detectChanges();
        expect(footer.nativeElement.innerText).toMatch(/\d{4}/i,
            '<footer> should display a year');
    });
});
