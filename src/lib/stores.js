import { writable } from "svelte/store";

export const modal = writable({
  aberto: false,
  nome: '',
  preco: '',
  metrica: '',
  img: '',
  alt: ''
});