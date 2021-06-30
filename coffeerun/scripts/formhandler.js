(function (window) {'use strict';let App = window.App || {};
function FormHandler(selector) {
    if (!selector) {throw new Error('No se proporcionó un selector.');
  }
this.formElement = document.querySelector(selector);console.log("Selector: " + selector);
console.log("Elemento encontrado: " + this.formElement);
if (this.formElement == null) 
  {
      console.log("No se encontraron elementos con el selector: " + selector);}
    }
    FormHandler.prototype.addSubmitHandler = function() 
     {
         console.log('Estableciendo el manejador de Submit para el formulario.');
           this.formElement.addEventListener('submit', function(event)
     { 
         event.preventDefault();var data = serializeArray(this);
         console.log(data);  

         let data = {};serializeArray(this).forEach(function(item)
          {
              data[item.name] = item.value;console.log(item.name + " es " + item.value);
            }
         
             );
        }
         );
        }
      App.FormHandler = FormHandler;window.App = App;}
      )(window);