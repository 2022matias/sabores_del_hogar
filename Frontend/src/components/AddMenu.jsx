import { useState } from "react";
import ButtonFill from "./ButtonFill";
import FormMenu from "./FormMenu";

const AddMenu = ({ handleAddMenu }) => {
  const [showAddMenuPopup, setShowAddMenuPopup] = useState(false);
  const [text, setText] = useState("agregar");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cookMethodName: "",
    recipeIngredients: [],
    portion: "",
    imgUrl: "",
    minutes: "",
  });

  function handleOpenAddMenuPopup() {
    setShowAddMenuPopup(true);
    document.body.style.overflow = "hidden";
  }

  // function handleIngredientChange(e) {
  //     const ingredientInput = e.target.value;
  //     if (ingredientInput) {
  //         setFormData({ ...formData, recipeIngredients: ingredientInput });
  //     } else {
  //         setFormData({ ...formData, recipeIngredients: ingredientInput });
  //         alert("Ingresa los ingredientes separados por coma y espacio.");
  //     }
  // }

  function handleUrlChange(e) {
    const urlInput = e.target.value;
    const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(urlInput);
    console.log(isValidUrl);
    console.log(formData.imgUrl);

    if (!isValidUrl) {
      alert("Ingresa una URL válida que comience con 'http://' o 'https://'.");
      return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {
      name,
      description,
      cookMethodName,
      recipeIngredients,
      portion,
      imgUrl,
      minutes,
      id,
    } = formData;
    const isValidUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(
      formData.imgUrl
    );
    if (!isValidUrl) {
      alert("Ingresa una URL válida que comience con 'http://' o 'https://'.");
      return;
    }
    handleAddMenu(formData);
    setFormData({
      name: "",
      description: "",
      cookMethodName: "",
      recipeIngredients: [],
      portion: "",
      imgUrl: "",
    });
    setShowAddMenuPopup(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <ButtonFill
        addClass="mt-20 lg:absolute lg:mt-0 lg:bottom-4"
        onClick={handleOpenAddMenuPopup}
      >
        Agregar tu propio menu
      </ButtonFill>
      <FormMenu
        showAddMenuPopup={showAddMenuPopup}
        setShowAddMenuPopup={setShowAddMenuPopup}
        formData={formData}
        setFormData={setFormData}
        // handleIngredientChange={handleIngredientChange}
        handleUrlChange={handleUrlChange}
        handleSubmit={handleSubmit}
        text={text}
      />
    </>
  );
};

export default AddMenu;