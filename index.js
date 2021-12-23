
window.onload = function(e){ 
    eventos_tr()
}

function eventos_tr() {
    mostrar_fila("tr_familia", "chk_familia")
    mostrar_fila("tr_edad_adultes", "chk_edad_adultes")
    mostrar_fila("tr_edad_gurises", "chk_edad_gurises")
    mostrar_fila("tr_hobbies", "chk_hobbies")
    mostrar_fila("tr_trabajo", "chk_trabajo")
    mostrar_fila("tr_localidad", "chk_localidad")
    mostrar_fila("tr_caracteristica", "chk_caracteristica")
    mostrar_fila("tr_procrear", "chk_procrear")
}

function mostrar_fila(nombre_tr, nombre_chk) {
    document.getElementById(nombre_chk).addEventListener('change', function() {
      if (this.checked) {
          document.getElementById(nombre_tr).style.display=''
        } else {
          document.getElementById(nombre_tr).style.display='none'
      }
    });
}