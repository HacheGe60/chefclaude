import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {

  const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  function showRecipe() {
    setRecipeShown(true);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">

        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length ?
        <IngredientsList show={showRecipe} items={ingredients} itemsList={ingredientsListItems} />
        : null}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}