<template>
    <div id="wrapper">
        <header>
            <AppHeader />
        </header>
        <main>
            <slot />    
        </main>
        <footer>
    
        </footer>
    </div>
  </template>
  <style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #wrapper{
    width: 100%;
  }
  </style>
