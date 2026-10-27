import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayerStackComponent } from './layer-stack.component';

describe('LayerStackComponent', () => {
  let fixture: ComponentFixture<LayerStackComponent>;
  let component: LayerStackComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayerStackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayerStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts exploded', () => {
    expect(component.exploded()).toBeTrue();
    expect(component.topOffset()).toBe(160);
  });

  it('assembles the stack when the toggle is pressed', () => {
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(component.exploded()).toBeFalse();
    expect(component.topOffset()).toBe(24);
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(button.textContent?.trim()).toBe('Explode the stack');
  });
});
