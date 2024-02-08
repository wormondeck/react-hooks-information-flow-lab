import React from 'react';
// Create a Header component by refactoring the <header> element out of the App component. Clicking on the <button> inside of the Header component should still toggle dark mode on and off.
function Header({onDarkModeClick, isDarkMode}) {
    function handleClick() {
        onDarkModeClick()
    }
        

  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>

  );
}

export default Header;