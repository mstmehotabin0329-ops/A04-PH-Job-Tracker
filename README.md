1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById selects only id and return on single element.
 getElementsByClassName Selects elements by class name and return HTML collection. It is live. 
 querySelector is a DOM method,it used to select the first element and Returns only the first matching element. 
 querySelectorAll is a DOM method.it used select all elements and returns a nodelist.

2. How do you create and insert a new element into the DOM?

Answer:The element is created with createElement(), then added to the DOM using the insert method.

3. What is Event Bubbling? And how does it work?

Answer:Event bubbling is a method of JavaScript DOM event propagation, where when an event (example: click, mousemove) occurs on a child element, it is first triggered on that element and then propagates upward to its parent and superior elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where you attach a single event listener to a parent element instead of adding separate listeners to multiple child elements. The parent listens for events, and you can handle them based on the event target.


5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the browser's default action for an event, while stopPropagation() stops the event from moving up or down the DOM tree (event propagation). They address different aspects of event handling