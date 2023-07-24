<script>
  import logo from "$lib/assets/logo.png"
</script>

<header class="header">
  <div class="header__container container">
    <nav>
      <a href="/" class="logo">
        <img src={logo} alt="Logo do Mercado Local" class="logo__img" />
      </a>

      <div class="btns">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </nav>
  </div>
</header>

<style>
  header {
    margin-top: 32px;
    margin-bottom: 8px;
  }
  nav {
    display: flex;
    position: relative;
  }
  .logo {
    padding: 8px;
    margin: -8px;
  }
  .logo__img {
    max-width: 207px;
  }
  .btns {
    display: flex;
    gap: 8px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--bg-2);
    transition: 125ms;
  }
  button:hover {
    background-color: var(--bg-hover);
  }
</style>