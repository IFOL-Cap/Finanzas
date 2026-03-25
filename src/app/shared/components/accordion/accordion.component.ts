import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Accordion, AccordionInterface, AccordionItem, AccordionOptions, InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {


  isActive: boolean= false;
  isCompletedData: boolean= false;

  isActive2: boolean= false;
  isCompletedData2: boolean= false;

  isActive3: boolean= false;
  isCompletedData3: boolean= false;

  isActive4: boolean= false;
  isCompletedData4: boolean= false;

  isActive5: boolean= false;
  isCompletedData5: boolean= false;

  isActive6: boolean= false;
  isCompletedData6: boolean= false;

  isActive7: boolean= false;
  isCompletedData7: boolean= false;


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.isActive = true;
  }

  toggleAccordion(accordionId: string) {
    const accordionBodies = document.querySelectorAll('[id^="accordion-open-body"]');
    const accordionIcons = document.querySelectorAll('[data-accordion-icon]'); // Selecciona todos los iconos del acordeón
    const accordionButtons = document.querySelectorAll('[id^="accordion-open-heading"]'); // Selecciona los botones de acordeón
    
    let i: number = 1;
  
    accordionBodies.forEach((body) => {
      const content = document.getElementById('accordion-open-body-' + i);
  
      if (content) {
        const icon = accordionIcons[i - 1] as HTMLElement; // Obtener el icono correspondiente
        const button = accordionButtons[i - 1] as HTMLElement; // Obtener el botón correspondiente
  
        // Si el acordeón no es el seleccionado, se colapsa y su icono se rota
        if ('accordion-open-body-' + i !== accordionId) {
          content.classList.add('hidden'); // Colapsa otros acordeones
          button.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-900', 'dark:text-white'); // Elimina clases activas
          button.classList.add('text-gray-500', 'dark:text-gray-400'); // Clases inactivas
          if (icon) {
            icon.classList.remove('rotate-180'); // Quita la rotación en el icono
          }
        }
  
        // Si es el acordeón seleccionado, se alterna su visibilidad y se aplica la rotación al icono
        if ('accordion-open-body-' + i === accordionId) 
        {
          const isExpanded = content.classList.toggle('hidden'); // Expande o colapsa el acordeón seleccionado
          if (icon) 
          {
            // Si está expandido, rota el icono
            if (isExpanded) 
            {
              icon.classList.remove('rotate-180'); // Si está expandido, no rota
            } else {
              icon.classList.add('rotate-180'); // Si está colapsado, rota
            }
          }
  
          // Cambiar clases en el botón del acordeón dependiendo de si está activo o no
          if (!isExpanded) 
          {
            console.log("open accordion: " + button.id);
            // Si está abierto, se aplican las clases activas
            button.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-900', 'dark:text-white'); // Clases activas
            button.classList.remove('text-gray-500', 'dark:text-gray-400'); // Elimina clases inactivas
          } 
          else 
          {
            console.log("close accordion" + button.textContent);
            // Si está cerrado, se aplican las clases inactivas
            button.classList.add('text-gray-500', 'dark:text-gray-400'); // Clases inactivas
            button.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-900', 'dark:text-white'); // Elimina clases activas
          }
        }
  
        // Actualiza el estado aria-expanded del botón correspondiente
        const isExpanded = !content.classList.contains('hidden');
        button.setAttribute('aria-expanded', isExpanded.toString());
      }
  
      i++;
    });
  }
}
