# Khanpaan App

Modern Simple Meal Tracker | For Myself | By Myself.

## Features

- Routes 🔀:-
  - History
    - Show all recipes taken
    - In calender format
    - Each day will have breakfast, lunch, dinner, snacks meal type
  - Today
    - What taken today in all meal types
  - Recipe
    - List of recipes option
    - Each Meal will have
      - Name
      - Meal type eg. breakfast, lunch, dinner, snacks
      - Image (optional)
      - Description (optional)
  - Dashboard
    - Basic graphs of what the data represents now.(will see what data we have then decide)
- Add Recipe Form
- Database 🛢️:-
  - Recipes
    - Create
    - Update
    - Delete
    - Get by ID
    - Get all
      - Sort
      - Filter by type
      - Search by name
    - Count recipes
    - Check whether recipe is used by a log
  - Logs
    - Create/add
    - Delete by ID
    - Get by ID
    - Get all
      - Sort by date
      - Filter by date range
      - Filter by meal type
      - Search/filter by recipe
    - Get logs for a specific date
    - Check whether a log already exists for a date
  - Dashboard
    - Total logs
    - Total recipes
    - Most frequently taken recipe
    - Most frequently taken breakfast
    - Most frequently taken lunch
    - Most frequently taken dinner
    - Most frequently taken snack
    - Recent logs
    - Logs this week/month
      Later:
      - Meal frequency over time
      - Favorite recipes
      - Most/least used meal types
      - Streaks
      - Weekly/monthly comparisons

## Steps

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Init expo
   ```bash
   pnpm create expo-app --template default@sdk-57
   ```
2. Run
   ```bash
   pnpm expo start
   ```
3. When you're ready, run:
   ```bash
   pnpm dlx run reset-project
   ```
   This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Credits

- Icons used from [here](https://fontawesome.com/icons/).
