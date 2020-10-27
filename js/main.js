$(document).ready(function () {
  const ajouter = $("#ajouter");
  const supprimer = $("#supprimer");
  const listeFruits = $("#liste_fruits");
  const monPanier = $("#panier");

  let fruitAjouter;

  listeFruits.children().on("click", function () {
    ajouter.attr("disabled", false);
    fruitAjouter = $(this);

    ajouter.on("click", function () {
      monPanier.append(fruitAjouter);
      ajouter.attr("disabled", true);

      monPanier.children().on("click", function () {
        supprimer.attr("disabled", false);
        fruitAjouter = $(this);

        supprimer.on("click", function () {
          listeFruits.append(fruitAjouter);
          supprimer.attr("disabled", true);
        });
      });
    });
  });
});
