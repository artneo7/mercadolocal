<script>
  import { CheckCircle, LogOut, X } from 'lucide-svelte';
  import { dados } from '$lib/stores';

  // salvar dados
  function salvarDados() {
    // login
    $dados.logado = true;

    // adicionar padrão ao número / complemento
    if (!$dados.numero) {
      $dados.numero = 's/n';
    }
    
    localStorage.setItem('dados', JSON.stringify($dados));
  }

  // puxar endereço via cep
  async function puxarEndereco(cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const resultado = await resposta.json();
    $dados.endereco = resultado.logradouro;
    $dados.bairro = resultado.bairro;
    $dados.cidade = resultado.localidade;
    $dados.estado = resultado.uf;
  
    return resultado;
  }

  // fechar dados
  function fecharDados() {
    $dados.aberto = false;
  }

  // deletar dados
  function deletarDados() {
    // remover dados localStorage
    localStorage.removeItem('dados');
  
    // logout
    $dados.logado = false;
  
    // resetar dados
    $dados.nome = '';
    $dados.email = '';
    $dados.cep = '';
    $dados.numero = '';
    $dados.endereco = '';
    $dados.bairro = '';
    $dados.cidade = '';
    $dados.estado = '';
  }
</script>

<form on:submit|preventDefault={salvarDados}>
  <label for="nome">
    <span>Nome</span>
    <input bind:value={$dados.nome} type="text" name="nome" id="nome" required disabled={$dados.logado}>
  </label>

  <label for="email">
    <span>E-mail</span>
    <input bind:value={$dados.email} type="email" name="email" id="email" required disabled={$dados.logado}>
  </label>

  <label for="cep">
    <span>CEP</span>
    <input on:blur={puxarEndereco($dados.cep)} bind:value={$dados.cep} type="cep" name="cep" id="cep" required disabled={$dados.logado}>
  </label>

  <label for="numero">
    <span>Número / Complemento</span>
    <input bind:value={$dados.numero} type="numero" name="numero" id="numero" disabled={$dados.logado}>
  </label>

  <label for="endereco">
    <span>Endereço</span>
    <input bind:value={$dados.endereco} type="endereco" name="endereco" id="endereco" required disabled={$dados.logado}>
  </label>

  <label for="bairro">
    <span>Bairro</span>
    <input bind:value={$dados.bairro} type="bairro" name="bairro" id="bairro" required disabled={$dados.logado}>
  </label>

  <label for="cidade">
    <span>Cidade</span>
    <input bind:value={$dados.cidade} type="cidade" name="cidade" id="cidade" required disabled={$dados.logado}>
  </label>

  <label for="estado">
    <span>Estado</span>
    <input bind:value={$dados.estado} type="estado" name="estado" id="estado" required disabled={$dados.logado}>
  </label>
  
  {#if $dados.logado}
  <button on:click={deletarDados} type="button" class="btn btn--deletar" title="Sair"><LogOut color="#fff"/></button>
  {:else}
  <button type="submit" class="btn btn--salvar" title="Salvar dados"><CheckCircle color="#fff"/></button>
  {/if}

  <button on:click={fecharDados} type="button" class="btn" title="Fechar"><X/></button>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 20px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  span {
    font-size: calc(14 / 16 * 1rem);
    color: var(--principal-2);
  }
  input {
    border: 1px solid var(--bg-2);
    height: 40px;
    padding: 8px;
    color: var(--principal);
  }
  input:focus-visible {
    outline: 1px solid var(--principal);
    outline-offset: -1px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--bg-2);
    position: absolute;
    top: 0px;
    right: 0px;
    transition: 125ms;
  }
  .btn:hover {
    background-color: var(--bg-hover);
  }
  .btn--salvar {
    background-color: var(--destaque);
    right: 48px;
  }
  .btn--salvar:hover {
    filter: brightness(1.05);
    background-color: var(--destaque);
  }
  label:has(input[required]) span::after {
    content: '*';
    color: var(--alt);
    margin-left: 2px;
  }
  .btn--deletar {
    background-color: var(--alt);
    right: 48px;
  }
  .btn--deletar:hover {
    background-color: var(--alt);
    filter: brightness(1.05);
  }
</style>