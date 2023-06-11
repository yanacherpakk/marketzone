document.addEventListener("DOMContentLoaded", function () {
    var categorySelect = document.getElementById("category");
    var subcategorySelect = document.getElementById("subcategory");
    var photoInput = document.getElementById("photo");
    var photoPreviewContainer = document.getElementById(
      "photo-preview-container"
    );
    var maxPhotos = 6;

    categorySelect.addEventListener("change", function () {
      var selectedCategory = categorySelect.value;

      if (selectedCategory === "") {
        subcategorySelect.innerHTML = "<option value=''>тип</option>";
      } else {
        // Мапа з дочірніми категоріями
        var subcategories = {
          "одяг і взуття": [
            "жіночий одяг",
            "жіноче взуття",
            "чоловічий одяг",
            "чоловіче взуття",
            "дитячий одяг",
            "дитяче взуття",
          ],
          "краса та здоров'я": [
            "косметика",
            "парфуми",
            "засоби для догляду за волосям",
            "засоби для догляду за шкірою",
          ],
          "спортивні товари": ["тренажери", "обладнання"],
          "хобі та розваги": ["книги", "музичні інструменти", "картини"],
          аксесуари: ["кольца", "намиста", "браслети", "інше"],
          техніка: [
            "ноутбуки та комп'ютери",
            "навушники",
            "телефони",
            "телевізори",
            "фото- та відео камери",
          ],
        };

        var subcategoriesOptions = subcategories[selectedCategory].map(
          function (subcategory) {
            return (
              "<option value='" +
              subcategory +
              "'>" +
              subcategory +
              "</option>"
            );
          }
        );

        subcategorySelect.innerHTML =
          "<option value=''>тип</option>" + subcategoriesOptions.join("");
      }
    });

    photoInput.addEventListener("change", function (event) {
      var files = event.target.files;
      photoPreviewContainer.innerHTML = "";

      if (files.length > maxPhotos) {
        alert("Максимальна кількість фотографій: " + maxPhotos);
        photoInput.value = "";
        return;
      }

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = (function (file) {
          return function (e) {
            var img = document.createElement("img");
            img.className = "photo-preview";
            img.src = e.target.result;
            photoPreviewContainer.appendChild(img);
          };
        })(file);

        reader.readAsDataURL(file);
      }
    });
  });