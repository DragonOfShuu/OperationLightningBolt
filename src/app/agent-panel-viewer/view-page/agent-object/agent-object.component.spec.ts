import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentObjectComponent } from './agent-object.component';

describe('AgentObjectComponent', () => {
  let component: AgentObjectComponent;
  let fixture: ComponentFixture<AgentObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
