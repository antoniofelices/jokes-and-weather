import { resultJoke, rankingJoke, showJoke } from '@ui/selectors'

// Es opcional… ergo esto no puede desatar el create new entry en bdd.
// Captura el input seleccionado cada vez que se selecciona un radio
// Enviar el form rakingJoke cada vez que se detecta el cambio anterior
// rankingJoke.submit() esto es un autoenvio del form, no hace falta boton de submit
// Solo envia dato Number(input.value), no manipula dato.
// Envia numero.
