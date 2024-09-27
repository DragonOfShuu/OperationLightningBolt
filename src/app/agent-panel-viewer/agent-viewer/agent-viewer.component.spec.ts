import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewerComponent } from './agent-viewer.component';

describe('AgentViewerComponent', () => {
  let component: AgentViewerComponent;
  let fixture: ComponentFixture<AgentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
