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

  it('should sanitize HTML characters to prevent XSS attacks', () => {
    const maliciousInput = '<script>alert("xss")</script>';
    const sanitizedOutput = component.escapeHtml(maliciousInput);
    expect(sanitizedOutput).toEqual('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
  });

  it('should escape double quotes, single quotes, and ampersands', () => {
    const input = 'Juan & "Maria" \'Pedro\' <Test>';
    const output = component.escapeHtml(input);
    expect(output).toEqual('Juan &amp; &quot;Maria&quot; &#039;Pedro&#039; &lt;Test&gt;');
  });
});
