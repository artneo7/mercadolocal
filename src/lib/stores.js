import { writable } from "svelte/store";

export const modal = writable({
  aberto: true,
  nome: '',
  preco: '',
  metrica: '',
  img: '',
  alt: ''
});