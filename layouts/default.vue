<template>
    <div id="wrapper" class="relative">
        <header>
            <AppHeader />
        </header>
        <main class="container mx-auto">
            <slot />    
        </main>
        <footer class="absolute bottom-0">
          <AppFooter />
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
    min-height: 100vh;
  }
  </style>
