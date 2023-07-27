import { writable } from "svelte/store";

export const modal = writable({
  aberto: false,
  nome: '',
  preco: '',
  metrica: '',
  img: '',
  alt: ''
});

export const lista = writable({
  aberto: false,
  produtos: []
});

export const dados = writable({
  aberto: false,
  nome: '',
  email: '',
  cep: '',
  numero: '',
  endereco: '',
  bairro: '',
  cidade: '',
  estado: ''
});