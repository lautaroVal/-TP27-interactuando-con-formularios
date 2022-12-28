console.log("moviesAdd sucess");

window.addEventListener('load', () => {

  let titulo = document.querySelector('.moviesAddTitulo');
  let formulario = $('formulario');
  let article = document.querySelector('article');
  titulo.innerHTML = 'AGREGAR PELÍCULA';
  titulo.classList.add('titulo');
  article.classList.add('fondoTransparente');
  formulario.classList.add('fondoCRUD');

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//  

  let
    title = $("title"),
    rating = $("rating"),
    awards = $("awards"),
    release_date = $("release_date"),
    length = $("length"),
    genre_id = $("genre_id");

/* VALIDACIÓN POR SUBMIT */
  $("form-add").addEventListener("submit", (e) => {
    let errores = [];
    const elements = $("form-add").elements;
    
    /* Validación TÍTULO */
    if (title.value === "") {
      errores.push("El titulo es requerido");
      title.classList.add('is-invalid');
      $("titleMsg").style.color = "red";
      $("titleMsg").innerText = 'El título es requerido'
    } else {
      title.classList.remove('is-invalid');
      $("titleMsg").innerText = '';
      title.classList.add('is-valid');
    }

    /* Validación RATING */
    switch (true) {
      case rating.value === "":
        errores.push("La calificación es requerido");
        rating.classList.add('is-invalid');
        $("ratingMsg").style.color = "red";
        $("ratingMsg").innerText = 'La calificación es requerido'
        break;
      case (+rating.value < 0) || (+rating.value > 10):
        errores.push("La calificación debe ser entre 0 y 10");
        rating.classList.add('is-invalid');
        $("ratingMsg").style.color = "red";
        $("ratingMsg").innerText = 'La calificación debe ser entre 0 y 10'
        break;
      default:
        rating.classList.remove('is-invalid');
      $("ratingMsg").innerText = '';
        rating.classList.add('is-valid');
        break;
    }
    
    /* Validación PREMIOS */
    switch (true) {
      case awards.value === "":
        errores.push("Los premios es requerido");
        awards.classList.add('is-invalid');
        $("awardsMsg").style.color = "red";
        $("awardsMsg").innerText = 'Los premios es requerido'
        break;
      case (+awards.value < 0) || (+awards.value > 10):
        errores.push("Los premios deben ser entre 0 y 10");
        awards.classList.add('is-invalid');
        $("awardsMsg").style.color = "red";
        $("awardsMsg").innerText = 'Los premios deben ser entre 0 y 10'
        break;
      default:
        awards.classList.remove('is-invalid');
      $("awardsMsg").innerText = '';
        awards.classList.add('is-valid');
        break;
    }

    /* Validación FECHA DE CREACIÓN */
    if (release_date.value === "") {
      errores.push("La fecha es requerida");
      release_date.classList.add('is-invalid');
      $("release_dateMsg").style.color = "red";
      $("release_dateMsg").innerText = 'La fecha es requerida'
    }else {
      release_date.classList.remove('is-invalid');
      $("release_dateMsg").innerText = '';
      release_date.classList.add('is-valid');
    }

    /* Validación DURACIÓN */
    switch (true) {
      case length.value === "":
        errores.push("La duración es requerida");
        length.classList.add('is-invalid');
        $("lengthMsg").style.color = "red";
        $("lengthMsg").innerText = 'La duración es requerida'
        break;
      case (+length.value < 60) || (+length.value > 360):
        errores.push("La duración deben tener entre 60 y 360 minutos");
        length.classList.add('is-invalid');
        $("lengthMsg").style.color = "red";
        $("lengthMsg").innerText = 'La duración deben tener entre 60 y 360 minutos'
        break;
      default:
        length.classList.remove('is-invalid');
      $("lengthMsg").innerText = '';
        length.classList.add('is-valid');
        break;
    }

    /* Validación GÉNERO */
    if (genre_id.value === "") {
      errores.push("El genero es requerido");
      genre_id.classList.add('is-invalid');
      $("genre_idMsg").style.color = "red";
      $("genre_idMsg").innerText = 'El genero es requerido'
    }else {
      genre_id.classList.remove('is-invalid');
      $("genre_idMsg").innerText = '';
      genre_id.classList.add('is-valid');
    }
    console.log(errores);

    if (errores.length > 0) {
      e.preventDefault()
    } else {
      $('form-add').submit();
      alert("La película se guardó satisfactoriamente")
    }

  })


  /* VALIDACION POR BLUR */

  $("title").addEventListener("blur", function (e) {
    if (title.value === "") {
      title.classList.add('is-invalid');
      $("titleMsg").style.color = "red";
      $("titleMsg").innerText = 'El título es requerido'
    } else {
      title.classList.remove('is-invalid');
      $("titleMsg").innerText = '';
      title.classList.add('is-valid');
    }
  });

  $("rating").addEventListener("blur", function (e) {
    switch (true) {
      case rating.value === "":
        rating.classList.add('is-invalid');
        $("ratingMsg").style.color = "red";
        $("ratingMsg").innerText = 'La calificación es requerido'
        break;
      case (+rating.value < 0) || (+rating.value > 10):
        rating.classList.add('is-invalid');
        $("ratingMsg").style.color = "red";
        $("ratingMsg").innerText = 'La calificación debe ser entre 0 y 10'
        break;
      default:
        rating.classList.remove('is-invalid');
      $("ratingMsg").innerText = '';
        rating.classList.add('is-valid');
        break;
    }
  })

   $("awards").addEventListener("blur", function (e) {
    switch (true) {
      case awards.value === "":
        awards.classList.add('is-invalid');
        $("awardsMsg").style.color = "red";
        $("awardsMsg").innerText = 'Los premios es requerido'
        break;
      case (+awards.value < 0) || (+awards.value > 10):
        awards.classList.add('is-invalid');
        $("awardsMsg").style.color = "red";
        $("awardsMsg").innerText = 'Los premios deben ser entre 0 y 10'
        break;
      default:
        awards.classList.remove('is-invalid');
      $("awardsMsg").innerText = '';
        awards.classList.add('is-valid');
        break;
    }
   })

  $("release_date").addEventListener("blur", function (e) {
    if (release_date.value === "") {
      release_date.classList.add('is-invalid');
      $("release_dateMsg").style.color = "red";
      $("release_dateMsg").innerText = 'La fecha es requerida'
    }else {
      release_date.classList.remove('is-invalid');
      $("release_dateMsg").innerText = '';
      release_date.classList.add('is-valid');
    }
  })

   $("length").addEventListener("blur", function (e) {
    switch (true) {
      case length.value === "":
        length.classList.add('is-invalid');
        $("lengthMsg").style.color = "red";
        $("lengthMsg").innerText = 'La duración es requerida'
        break;
      case (+length.value < 60) || (+length.value > 360):
        length.classList.add('is-invalid');
        $("lengthMsg").style.color = "red";
        $("lengthMsg").innerText = 'La duración deben tener entre 60 y 360 minutos'
        break;
      default:
        length.classList.remove('is-invalid');
      $("lengthMsg").innerText = '';
        length.classList.add('is-valid');
        break;
    }
   })

   $("genre_id").addEventListener("blur", function (e) {
    if (genre_id.value === "") {
      genre_id.classList.add('is-invalid');
      $("genre_idMsg").style.color = "red";
      $("genre_idMsg").innerText = 'El genero es requerido'
    }else {
      genre_id.classList.remove('is-invalid');
      $("genre_idMsg").innerText = '';
      genre_id.classList.add('is-valid');
    }
   })


})
