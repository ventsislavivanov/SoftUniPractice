<script>
export default {
  emits:['select', 'change-page']
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Q0hUaUi7lLLC5UOslM9ul_B8NyXTKNn9BcBGtCXV&s"
              alt="logo"
          >
        </li>
      </ul>
      <ul>
        <li><a href="#" @click.prevent="$emit('change-page', 'Home')">Home</a></li>
        <li><a href="#" @click.prevent="$emit('change-page', 'Products')">Products</a></li>
        <li><a href="#" @click.prevent="$emit('change-page', 'About')">About</a></li>
        <li><a href="#" @click.prevent="$emit('change-page', 'Contacts')">Contacts</a></li>
        <li><a href="#" @click.prevent="$emit('change-page', 'Cart')" role="button">Cart</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  padding: 0.25rem 1rem;
}

nav img {
  height: 2rem;
}

main {
  padding: 1rem 2rem;
}
</style>