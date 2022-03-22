# REACT Question for Daniel Johnson


## The Challenge

Let's write a little component in React, OrderedList, which implements an alphabetically sorted list. The component will include a button to enable the user to sort either in ascending or descending order and a second button to permit the list to be cleared.

Your component should render specific elements according to the following specifications:

* An <input /> element which the user can use to add items to the list. This input field should listen for Enter keydown events (the test suite triggers the onKeyDown event handler specifically) to add the current contents (if nonempty) to the list. After adding an item, the input box should be cleared.

* A <button> element which the user can click to change the direction of the sort. Initially, the button should display text such as the ⬇️ emoji or the text down. When changed to a descending sort, the button should change to a ⬆️ emoji (or text such as up). 

* A <button> element which the user can click to clear the list as well as any contents in the input box (essentially reverting to the component's default state). Use any text you'd like for this button.

* A <ul> element, which should contain a series of <li> elements that represent the sorted list contents.

There is no predetermined correct answer for style and CSS. Your solution need not look like the demo below but it should demonstrate understanding of basic CSS and user experience principles.


## What we are looking for

1. Correctness - will your solution produce the desired results
2. Conciseness - does your solution balance clarity and brevity
3. Maintainability - does your code stand up to changing needs
4. Anti-patterns - does your solution avoid anti-patterns

## How to submit

Please submit a clonable git repository URL with README if applicable.

## What to expect

After you submit your work, our team will review it. If the solution matches what we are looking for, we will schedule a time to discuss the solution with you. During this time we will ask you to share your screen and potentially do some modifications.

## SOLUTION

This app uses create-react-app as a starting point to set up a basic app template. From there, I imported my challenge solution as a React component inside of App.js.

### Veritone List

This component returns two sections. Firstly, the 'InputSection' has an input for adding list items, reversing the list sort order alphabetically, and resetting the list and input. Secondly, the 'UnorderListSection' maps out every list item alphabetically in the desired order.

This component also contains useState hooks for setting the list items in 'listArray' and the setting the value for 'itemInput' used by the input field. There is also a hook for setting the boolean value for 'descending'.

The first arrow funtion, 'addItem', adds a new string to the end of 'listArray' without mutating it when the user presses down on the Enter key. The second function will set the listArray to an empty array and set the itemInput to an empty string.

### Styles

Along with a basic css file, I opted to use Styled Components as a personal preferrence for styling the app.