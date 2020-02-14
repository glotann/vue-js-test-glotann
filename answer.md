1. Vue.js is Javascript library to make web interface.

2. Make vue instance, then in that instance, define all data that will be used.
	new Vue({
	  el: '#app',
	  data: {
	    users: []
	  }
	})

3. Set up data observation, compile the template, mount instance and update data changes.

4. v-model.

5. v-on.
	<button v-on:click></button>

6. To do quick calculations of properties that are displayed in view.

7.  A watcher is a special Vue. js feature that allows you to spy on one property of the component state, and run a function when that property value changes.

8. Make vue instance, make object and variables, and display with v-model.

9. With v-bind:class.

10. v-if, v-else-if, v-else.

11. v-for
		var example1 = new Vue({
		  el: '#example-1',
		  data: {
		    items: [
		      { message: 'Foo' },
		      { message: 'Bar' }
		    ]
		  }
		})

	<ul id="example-1">
	  <li v-for="item in items">
	    {{ item.message }}
	  </li>
	</ul>

12. 

13. v-model.

14. Props are the way components can accept data from components that include them (parent components).

15. Components help you extend basic HTML elements to encapsulate reusable code.

16. You can send data from a child to a parent component by means of Vue’s built-in $emit() method.

17. Vuex is a state management pattern + library for Vue. js applications. 