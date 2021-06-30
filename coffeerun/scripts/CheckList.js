(function(window) {'use strict';let App = window.App || {};function CheckList(selector) {if (!selector) 
    {thrownew Error('No se proporcionó un selector');}this.element = document.querySelector(selector);
    if (this.element == null) {throw new Error("No se encontraron elementos con el selector: " + selector);}}
    App.CheckList = CheckList;window.App = App;
    CheckList.prototype.addRow = function(coffeeOrder) {let rowElement = new Row(coffeeOrder);
        this.element.append(rowElement.element);};
        CheckList.prototype.removeRow = function(email) {var elem = querySelector('[value="' + email + '"]');
        var ancestro = elem.closest('[data-coffee-order="checkbox"]');ancestro.remove();}
        CheckList.prototype.addClickHandler = function(fn) {this.element.addEventListener('click', 
        function(event) {var email = event.target.value;this.removeRow(email);fn(email);}.bind(this));}
function Row(coffeeOrder)
 {var divElement = document.createElement('div');
 divElement.setAttribute('data-coffee-order', 'checkbox');
 divElement.setAttribute('class', 'checkbox');
 var labelElement = document.createElement('label');
 var checkBoxElement = document.createElement('input');
 checkBoxElement.setAttribute('type', 'checkbox');
 checkBoxElement.setAttribute('value', coffeeOrder.emailAddress);
 var description = ' ' + coffeeOrder.emailAddress + ': ';description += coffeeOrder.coffee ;description += ' (' + coffeeOrder.size + ') ';
 if (coffeeOrder.flavor) {description += coffeeOrder.flavor + ' ';}description += ' [' + coffeeOrder.strength + 'x]';
 labelElement.append(checkBoxElement);labelElement.append(description);
divElement.append(labelElement);this.element = divElement;}
})(window);