# Ikli JS
Render repeating content much faster

## Example
- index.html
```html
<!Doctype html>
<html>
  <head>
    <title>Page</title>
    <script src="ikli.js"></script>
  </head>
  <body>
  
    <header></header>
    <sidebar></sidebar>
    
    <!-- typical content here -->
    <h1>My Content</h1>
    
    <footer></footer>
    
  </body>
</html>
<script>
  // define elements here
  ikli.elements = ['header','sidebar','footer'];
  // enable custom component
  ikli.customComponent = true;
  // render the elements
  ikli.render();
</script>
```

- includes/header.html
```html
<nav>
  <a href="#!">Sample header</a>
</nav>
```
