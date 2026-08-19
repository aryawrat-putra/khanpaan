export type RecipeType =
    | "Breakfast"
    | "Lunch"
    | "Dinner"
    | "Snack";

export type MealType =
    | "Breakfast"
    | "Lunch"
    | "Dinner"
    | "Snack"
    | "Other";

export type RecipesRow = {
    id: string;
    name: string;
    type: RecipeType;
    image_uri: string | null;
    created_at: number;
    updated_at: number;
};

export type LogsRow = {
    id: string;
    log_id: string;
    recipe_id: string;
    meal_type: MealType;
    taken_on: number;
    created_at: number;
};

// create insert/update types 

export type CreateRecipe = {
    name: string;
    type: RecipeType;
    image_uri?: string | null;
};

export type UpdateRecipe = {
    name?: string;
    type?: RecipeType;
    image_uri?: string | null;
};

export type CreateLog = {
    recipe_id: string;
    taken_on: number;
    meal_type: MealType;
};