
window.onload = function(e){ 
    const familia = ['MADRE-PADRE SOLTERO','PAREJA','PERSONA SOLA', 'FAMILIA 2H.', 'FAMILIA 3 H.', 'AMIGUES', 'FAMILIA ENS. 2 H.', 'MADRE-PADRE SOLTERO +'];
    const edad_adultes = ['30-35','35-40','40-45', '45-50', '50-55', '55-60', '60-65'];
    const edad_gurises = ['0-5','5-10','10-15', '15-20', '20-25'];
    const hobbies = ['COCINA','ARTE','OFICIO', 'DEPORTIVO', 'LECTURA-ESCRITURA', 'MÚSICA', 'NINGUNO'];
    const trabajo = ['Home Adm.','Home Emp.','Fuera de Casa', 'Cuidador'];
    const localidad = ['FRANCK','RINCÓN','RECONQUISTA', 'SANTO TOMÉ', 'PARANÁ', 'ARROYO', 'LEYES', 'SANTA FE', 'SAUCE VIEJO', 'MONTE VERA', 'RECREO'];
    const caracteristica = ['MADERA','HORMIGÓN','LADRILLO', 'PILETA-QUINCHO', 'VERDE', 'FUTURA PA', 'COLORES', 'ILUMINACIÓN', 'TECHOS ALTOS', 'NINGUNA'];
    const procrear_2_dorm = ['ALFONSINA','CRIOLLA','MILAGRO', 'JUANA', 'BICENTENARIA', 'AIME'];
    const procrear_1_dorm = ['COMPAÑERA I','COMPAÑERA II','FEDERAL I', 'FEDERAL II'];

    eventos_tr()
    console.log(sorteo_perfil(procrear_1_dorm))
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

function sorteo_perfil(categoria) {
    var rand = Math.random()*categoria.length | 0;
    var rValue = categoria[rand];
    return rValue;
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