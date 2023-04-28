import React from 'react';
import classes from './../../assets/css/AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
];
const AvailableMeals = (props) => {
    const mealItems = DUMMY_MEALS.map(mealItem => (
        <MealItem id={mealItem.id} key={mealItem.id} mealItem={mealItem} />
    ));
    return (<section className={classes.meals}>
        <Card>
            <ul>
                {mealItems}
            </ul>
        </Card>
    </section>);
};

export default AvailableMeals;