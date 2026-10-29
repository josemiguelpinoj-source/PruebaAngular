import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ListaInscritosComponent } from './lista-inscritos.component';

describe('ListaInscritosComponent', () => {
  let component: ListaInscritosComponent;
  let fixture: ComponentFixture<ListaInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInscritosComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should escape HTML characters to prevent XSS vulnerability', () => {
    const maliciousInput = '<script>alert("xss")</script>&"\'';
    const escapedOutput = component.escapeHtml(maliciousInput);
    expect(escapedOutput).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;&amp;&quot;&#039;');
  });

  it('should handle empty or undefined input in escapeHtml gracefully', () => {
    expect(component.escapeHtml('')).toBe('');
    expect(component.escapeHtml(null as any)).toBe('');
  });
});
