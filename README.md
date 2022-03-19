# Web Component Custom Input Element
 Create custom input web component using JavaScript, HTML, CSS without any Framework.
 
Focus is to understand the component creation with Templates, Shodow DOM, HTML imports, and Custom Elements. Customize the basic input element with own need and requirements. Existing attribute support to the custom Input element but also enhance the UI capabilities by defining custom attributes to playaround with custom UI.

First template define with required custom HTML structure with requried named slots for labels and validation error messages. Custom input styled with required css that define upto shadow root. Template are document fragment and not going to render in to DOM.


```HTML
<template id="custom-inputTemplate">
    <link rel="stylesheet" href="custom-input.css"></link>
    <div class="custom_input_wrapper">
        <label><slot name="customLabel"></slot></label>
        <div class="inputWrapper">
            <input />
            <p><slot name="validationMessage"></slot></p>
        </div>
    </div>
</template>
```

Define the custom element in JS file and map all atttributes and functionality with custom input.
Now use the custom input in HTML and play around with custom attributes. Add/Remove any attribute as per requirement.

```HTML
<custom-input type="email" id="userEmailID" class="col-sm-4" placeholder="Enter Email" ui="inline">
    <span slot="customLabel" class="col-sm-2">Email ID</span>
    <span slot="validationMessage">Enter valid email ID. Includes @ and dot(.)</span>
</custom-input>
```

"UI" attribute is custom created to change the default ui with property "inline" and "underline". Download the files and explore the possibilites of native Web components.

![Snap of Web Component](/Custom-Input-UI.png "Snap of Web Component")
