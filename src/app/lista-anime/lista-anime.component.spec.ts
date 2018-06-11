import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnimeComponent } from './lista-anime.component';

describe('ListaAnimeComponent', () => {
  let component: ListaAnimeComponent;
  let fixture: ComponentFixture<ListaAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
